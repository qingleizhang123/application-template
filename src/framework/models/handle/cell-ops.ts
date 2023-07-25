/* eslint-disable import/order */
import { ModelContainer, plugable } from 'uih-mcsf-appframework';
import {
  CellOperationBase,
} from 'uih-mcsf-apptoolkit';
import {
  MedViewerControlCell,
  OverlayType,
} from 'uih-mcsf-medviewercontrol';
import * as $PBRoot from 'uih-mcsf-protocol';
import { Point } from 'uih-mcsf-utility';
import { NeuroOverlayType } from '../../defines';
import { msgColorToRgba, ContourLineHelper } from '../../util';
import { GraphicContourLine } from '../graphic/graphic-contour-line';
import { GraphicContourLineImpl } from '../graphic/graphic-contour-line.impl';
import { UIBot } from '@/framework/proto/uhor_planning_common';
import $PB = $PBRoot.Mcsf.AppCommon.ProtoBuf;
import $UHORPB = UIBot.UHOR.ProtoBuf;

// 轮廓线
@plugable('ContourLineOperation')
export class ContourLineOperation extends CellOperationBase {
  handle(modelContainer: ModelContainer, cell: MedViewerControlCell, buffer: Uint8Array): void {
    const contourLine = $UHORPB.MsgVOIInfos.decode(buffer);
    this.updateContourLines(cell, contourLine);
  }

  updateContourLines(cell: MedViewerControlCell, contourLines: $UHORPB.IMsgVOIInfos) {
    const graphicOl = cell.displayData.getOverlay(OverlayType.Graphic);
    // graphicOl.deleteGraphics(TumorExtractionLine);
    const contourLineOl = cell.displayData.getOverlay(NeuroOverlayType.Contourline);
    contourLineOl.clearOverlay();
    console.log('----updateContourLine----', cell.cellName, contourLines)

    contourLines.voiInfoList.forEach(item => {
      if (item.isVisible) {
        // 外轮廓
        item.outerlinePointList.forEach(contourLine => {
          this.drawLine(contourLine, cell, item);
        });
        // 内轮廓
        item.innerlinePointList.forEach(innerline => {
          this.drawLine(innerline, cell, item);
        });
      }
    });
    // 内外轮廓都不存在时，手动清除之前的轮廓线
    if (
      contourLines.voiInfoList
        .filter(
          item =>
            item.maskID === '21' ||
            item.maskID === '22' ||
            item.maskID === '23' ||
            item.maskID === '24' ||
            item.maskID === '13' ||
            item.maskID === '14',
        )
        .filter(item => item.innerlinePointList.length !== 0 && item.outerlinePointList.length !== 0).length === 0
    ) {
      const ol = cell.getOrAddOverlay(NeuroOverlayType.Contourline);
      ol.getContext('2d').clearRect(0, 0, ol.width, ol.height);
    }
  }

  drawLine(line: $UHORPB.IMsgPointList, cell: MedViewerControlCell, voiInfo: $UHORPB.IMsgVOIInfo) {
    const maskId = parseInt(voiInfo.maskID, 10);
    const contourLineItem = new GraphicContourLine(GraphicContourLineImpl);
    const contourLinePoints: Point[] = [];
    const imp = contourLineItem.impl as GraphicContourLineImpl;
    imp.isFillFreehand = false;
    const isVisible = voiInfo.isVisible;
    const tissueOpacity = ContourLineHelper.getMPROpacity(maskId, voiInfo.volumeUID);
    const color = {
      ...voiInfo.color,
      alpha: voiInfo.color.alpha === 0 ? 0 : tissueOpacity,
    };
    const lineColor = msgColorToRgba(color);
    const contourLineOl = cell.displayData.getOverlay(NeuroOverlayType.Contourline);
    contourLineOl.addGraphic(contourLineItem);
    line.PointList.forEach(iter => {
      const point: Point = new Point(iter.x, iter.y);
      contourLinePoints.push(point);
    });
    contourLineItem.renderContourLineModel = {
      contourLinePoints,
      maskId,
      lineColor,
      isVisible,
      opacity: tissueOpacity,
    };
  }
}