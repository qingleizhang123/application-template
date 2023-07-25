/* eslint-disable prefer-regex-literals */
/* eslint-disable import/order */
import * as Viewer from 'uih-mcsf-medviewercontrol';
import {
  AppCell,
  AppUtility,
  AppVolume,
  AppWorkflow,
  BuiltInKeys,
  CellConfig,
  CellType,
  CommonToolsCommandViewModel,
  IAppConfigService,
  LoadedDataModel,
} from 'uih-mcsf-apptoolkit';
import { DicomClient } from 'uih-mcsf-serverapi';
import { Tag } from 'uih-mcsf-dataheader';
import { BlobConvert } from 'uih-mcsf-utility';
import { ModelContainer } from 'uih-mcsf-appframework';
import { UIBot } from '@/framework/proto/uhor_planning_common';
import $UHORPB = UIBot.UHOR.ProtoBuf;
import { DEFAULT_MPR_OPACITY, DEFAULT_VR_OPACITY, TissueType } from '@/framework/defines';
import { message } from 'ant-design-vue';
import { MedViewerControl } from 'uih-mcsf-medviewercontrol';

export class NeuroMedViewerHelper {
  static getCellsByCellType(cellType: string, medViewer: Viewer.MedViewerControl): Viewer.MedViewerControlCell[] {
    return medViewer.cells.filter(m => (m as AppCell).cellType.indexOf(cellType) > -1);
  }

  static selectFirstCell(medViewer: Viewer.MedViewerControl, index = 0) {
    if (medViewer.cells.length > 0) {
      const cell = medViewer.cells[index] ?? medViewer.cells[0];
      cell.isSelected = true;
    }
  }

  static getCurrentCell(medViewer: Viewer.MedViewerControl): AppCell {
    return medViewer.cells.find(item => item.isSelected) as AppCell;
  }

  static isVRCell(medViewer: Viewer.MedViewerControl, cell: AppCell): boolean {
    const cellType = cell.cellType;
    return cellType.indexOf(CellType.VR) > -1;
  }

  static isMPRCell(medViewer: Viewer.MedViewerControl, cell: AppCell): boolean {
    const cellType = cell.cellType;
    return cellType.indexOf(CellType.MPR) > -1;
  }
}

interface TissueOpacity {
  tissueId: number;
  mprOpacity?: number;
  vrOpacity?: number;
}

export class ContourLineHelper {
  static opacityMap = new Map<string, TissueOpacity>();

  static isContourLineTissue(tissueType: number): boolean {
    return [TissueType.Tumor, TissueType.Hydroncus, TissueType.Nucleis].indexOf(tissueType) > -1;
  }

  static addOpacity(cellType: string, tissueId: number, volumeUid: string, opacity?: number) {
    const key = this.buildKey(tissueId, volumeUid);
    if (!this.opacityMap.has(key)) {
      this.opacityMap.set(key, { tissueId, mprOpacity: DEFAULT_MPR_OPACITY, vrOpacity: DEFAULT_VR_OPACITY });
    }

    if (opacity !== undefined) {
      if (cellType.indexOf(CellType.MPR) > -1) {
        this.opacityMap.get(key).mprOpacity = opacity;
      } else if (cellType.indexOf(CellType.VR) > -1) {
        this.opacityMap.get(key).vrOpacity = opacity;
      }
    }
  }

  static removeOpacity(tissueId: number, volumeUid: string) {
    const key = this.buildKey(tissueId, volumeUid);
    this.opacityMap.delete(key);
  }

  static getOpacity(tissueId: number, volumeUid: string, cellType: string): number {
    if (cellType.indexOf(CellType.MPR) > -1) {
      return this.getMPROpacity(tissueId, volumeUid);
    } else if (cellType.indexOf(CellType.VR) > -1) {
      return this.getVROpacity(tissueId, volumeUid);
    }
  }

  static getMPROpacity(tissueId: number, volumeUid: string): number {
    const key = this.buildKey(tissueId, volumeUid);
    if (this.opacityMap.has(key)) {
      return this.opacityMap.get(key).mprOpacity;
    } else {
      return DEFAULT_MPR_OPACITY;
    }
  }

  static getVROpacity(tissueId: number, volumeUid: string): number {
    const key = this.buildKey(tissueId, volumeUid);
    if (this.opacityMap.has(key)) {
      return this.opacityMap.get(key).vrOpacity;
    } else {
      return DEFAULT_VR_OPACITY;
    }
  }

  private static buildKey(tissueId: number, volumeUid: string) {
    return `${volumeUid}_${tissueId}`;
  }
}

/**
 * 获取加载的所有的volumeList，对于多期相序列，即一个序列有多个Volumn，只取第一个Volume
 * @param modelContainer modelContainer
 * @returns volumeList
 */
export function getAllVolumeList(modelContainer: ModelContainer): AppVolume[] {
  const dataModel = modelContainer.getSpecificModel(LoadedDataModel);
  if (!dataModel.appMultiVolumes.length) {
    return null;
  }
  const volumeList: AppVolume[] = [];
  dataModel.appMultiVolumes.forEach(item => {
    volumeList.push(item.appVolume);
  });
  return volumeList;
}

/**
 * 获取指定序列的volumeList，对于多期相序列，即一个序列有多个Volumn，只取第一个Volume
 * @param modelContainer modelContainer
 * @param seriesUids seriesUids
 * @returns volumeList
 */
export function getVolumeListBySeriesUids(modelContainer: ModelContainer, seriesUids: string[]): AppVolume[] {
  const dataModel = modelContainer.getSpecificModel(LoadedDataModel);
  const volumeList: AppVolume[] = [];
  seriesUids.forEach(seriesUid => {
    const appMultiVolume = dataModel.appMultiVolumes.find(item => item.seriesUID === seriesUid);
    volumeList.push(appMultiVolume.appVolume);
  });
  return volumeList;
}

/**
 * MsgColorToRgba
 * @param color IMsgColor
 * @returns rgba string
 */
export function msgColorToRgba(color: $UHORPB.IMsgColor): string {
  return `rgba(${color.red},${color.green},${color.blue},${color.alpha})`;
}

/**
 * rgba字符串转IMsgColor
 * @param rgba rgba字符串
 */
export function rgbaToMsgColor(rgba: string): $UHORPB.IMsgColor {
  const regex = /\((.+?)\)/g;
  const result = rgba.match(regex)[0].replace('(', '').replace(')', '').split(',');
  return {
    red: parseInt(result[0], 10),
    green: parseInt(result[1], 10),
    blue: parseInt(result[2], 10),
    alpha: parseFloat(result[3]),
  };
}

/**
 * rgb字符串转IMsgColor
 * @param rgb rgb字符串
 */
export function rgbToMsgColor(rgb: string): $UHORPB.IMsgColor {
  const regex = /\((.+?)\)/g;
  const result = rgb.match(regex)[0].replace('(', '').replace(')', '').split(',');
  return {
    red: parseInt(result[0], 10),
    green: parseInt(result[1], 10),
    blue: parseInt(result[2], 10),
    alpha: 1,
  };
}

/**
 * MsgColorToRgb
 * @param color IMsgColor
 * @returns rgb string
 */
export function msgColorToRgb(color: $UHORPB.IMsgColor): string {
  return `rgb(${color.red},${color.green},${color.blue})`;
}

interface IPoint {
  x: number;
  y: number;
}

// 用于获取闭合区域内点的个数
export const getCloseAreaPointNum = (pointList: IPoint[] = []): number => {
  const length = pointList.length;
  if (length === 0) return 0;
  let count = 0;
  // 获取最大矩形区域
  const xMin = Math.floor(Math.min(...pointList.map(item => item.x)));
  const yMin = Math.floor(Math.min(...pointList.map(item => item.y)));
  const xMax = Math.ceil(Math.max(...pointList.map(item => item.x)));
  const yMax = Math.ceil(Math.max(...pointList.map(item => item.y)));

  // 创建虚拟canvas
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  canvas.width = xMax + 1;
  canvas.height = yMax + 1;
  const ctx = canvas.getContext('2d');
  ctx.lineWidth = 1;
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#fff';
  pointList.forEach(item => {
    ctx.lineTo(item.x, item.y);
  });
  ctx.fill();
  ctx.stroke();

  // 筛选合理点
  const startX = xMin;
  const startY = yMin;
  const imageData = ctx.getImageData(startX, startY, xMax - xMin + 1, yMax - yMin + 1);
  const width = imageData.width;
  const height = imageData.height;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const index = (i + j * width) * 4;
      const pixel = imageData.data.slice(index, index + 4);
      if (
        (pixel[0] === 255 && pixel[1] === 255 && pixel[2] === 255) ||
        pointList.some(item => item.x - startX === i && item.y - startY === j)
      ) {
        count++;
      }
    }
  }
  return count;
};

/**
 * 获取 cellconfig对象的复本
 * @param workflow workflow
 * @param configCellName configCellName
 * @returns cellconfig对象的复本
 */
export function getCellConfigCopy(workflow: AppWorkflow, configCellName): CellConfig {
  const nameSplitResult = AppUtility.parseCellName(configCellName);
  const stencilCellName = nameSplitResult.prefix + BuiltInKeys.CellStencilSeparator + nameSplitResult.cellType;
  const cellConfig = workflow.workflowConfig.cellCollection.find($2 => {
    return $2.cellName === stencilCellName || $2.cellName === configCellName;
  });
  // 复制一份副本
  const copyCellConfig = { ...cellConfig } as CellConfig;
  copyCellConfig.cellName = configCellName;
  return copyCellConfig;
}

export const DefaultMedViewerControl = 'MedViewerControl';
export const ACPCMedViewerControl = 'ACPCMedViewerControl';

// 过滤特殊字符
export const filterSpecialChar = (str: string): string => {
  const pattern = new RegExp('[^A-Za-z0-9\u4e00-\u9fa5]');
  let rs = '';
  for (let i = 0, len = str.length; i < len; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, '');
  }
  return rs;
};
