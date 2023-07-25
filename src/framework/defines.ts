export enum NeuroOverlayType {
  Contourline = 'Contourline'
}

// 组织类型
export enum TissueType {
  Base = 2,
  Hydroncus = 11,
  Hematoma = 10,
  Tumor = 12,
  Vessel = 4,
  Hemorrhage = 10,
  Sulcus = 13,
  Nucleis = 15,
  DrainageTube = 17,
  BrainParenchyma = 18,
}

// 默认透明度
export const DEFAULT_MPR_OPACITY = 0.5;
export const DEFAULT_VR_OPACITY = 1.0;

interface SeriesViewModel {
  seriesUid: string;
  volumeUid?: string;
  thumbnail?: string;
  descritpion?: string;
  modality?: string;
  sliceThickness?: string;
  imageCount?: number;
}

export interface NeuroSeriesViewModel extends SeriesViewModel {
  // 分割序列列表选中状态
  isSelected?: boolean;
  atlasResetDisabled?: boolean;
}