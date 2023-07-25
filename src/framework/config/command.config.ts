export const commandConfig = {
  cellOperations: [
    {
      ID: 0,
      classNames: ['InitializeCellOperation'],
    },
    {
      ID: 19,
      classNames: ['UpdateGraphicAllInfoCellOperation'],
    },
    {
      ID: 22,
      classNames: ['ScaleCellOperation'],
    },
    {
      ID: 23,
      classNames: ['WindowLevelCellOperation'],
    },
    {
      ID: 24,
      classNames: ['CrossHairCellOperation'],
    },
    {
      ID: 25,
      classNames: ['NeuroCrossCellOperation'],
    },
    {
      ID: 28,
      classNames: ['ThicknessCellOperation'],
    },
    {
      ID: 31,
      classNames: ['RulerCellOperation'],
    },
    {
      ID: 32,
      classNames: ['SlicePosition3DCellOperation'],
    },
    {
      ID: 34,
      classNames: ['CurrentSliceOperation'],
    },
    {
      ID: 55,
      classNames: ['OrientationCellOperation'],
    },
    {
      ID: 59,
      classNames: ['PseudoColorCellOperation'],
    },
    {
      ID: 60,
      classNames: ['ImageDataCellOperation'],
    }
  ],
  panelOperations: [
    {
      ID: 'NotifyFELoading',
      classNames: ['MMLoadingStartOperation', 'MMLockUIOperation', 'SendDtiProtocol'],
    },
    {
      ID: 'NotifyFESeriesType',
      classNames: ['UpdateSeriesTypeOperation'],
    },
    {
      ID: 'NotifyFELoaded',
      classNames: ['NeuroLoadingEndOperation', 'SetLayoutOperation', 'MMUnlockUIOperation'],
    },
  ]
};
