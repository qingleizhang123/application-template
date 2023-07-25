import { GraphicDefinitions, GraphicFreehandImpl } from 'uih-mcsf-medviewercontrol';
import { Point } from 'uih-mcsf-utility';
import { CommonModule } from '@/store/modules/commonStore';
import { NeuroOverlayType, SegmentType } from '../../defines';
import { GraphicContourLine } from './graphic-contour-line';

export class GraphicContourLineImpl extends GraphicFreehandImpl {
  private _isFillFreehand: boolean;

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  public set isFillFreehand(isFill: boolean) {
    this._isFillFreehand = isFill;
  }

  public get isFillFreehand(): boolean {
    return this._isFillFreehand;
  }

  public refresh(): void {
    const cell = this.dataSource.getCell();
    const ol = this.dataSource.getCell().getOrAddOverlay(NeuroOverlayType.Contourline);
    ol.getContext('2d').clearRect(0, 0, ol.width, ol.height);
    if (!this.dataSource.isVisible) {
      return;
    }
    const outlineOlData = cell.displayData.getOverlay(NeuroOverlayType.Contourline);
    outlineOlData.graphics.forEach(g => {
      if (g instanceof GraphicContourLine && g.renderContourLineModel.isVisible) {
        if (
          g.renderContourLineModel.maskId === CommonModule.selectTissueId &&
          CommonModule.currentAction === SegmentType.TumorContourLineEdit
        ) {
          g.isSelected = true;
        } else {
          g.isSelected = false;
        }
        this.drawOutLine(
          ol,
          g.renderContourLineModel.contourLinePoints,
          g.renderContourLineModel.lineColor,
          g.isSelected,
          g.hitState,
        );
      }
    });
  }

  protected drawOutLine(
    overlay: HTMLCanvasElement,
    drawPoints: Point[],
    lineColor: string,
    isSelect: boolean,
    hitState: number,
  ): void {
    const ctx = overlay.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(drawPoints[0].x, drawPoints[0].y);
    for (let i = 1; i < drawPoints.length; i++) {
      ctx.lineTo(drawPoints[i].x, drawPoints[i].y);
    }
    ctx.closePath();

    if (this._isFillFreehand) {
      ctx.fillStyle = lineColor;
      ctx.fill();
    }

    const pen = this.drawingPen;
    ctx.setLineDash(pen.LineDash);
    ctx.lineWidth = 2;
    ctx.strokeStyle = isSelect ? (hitState === 1 ? '#41c4e2' : 'blue') : lineColor;
    // console.log('isSelected:',this.dataSource.isSelected);
    ctx.stroke();
  }
}
