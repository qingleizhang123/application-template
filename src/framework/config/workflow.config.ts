export const imageTextConfig = {
  items: [
    {
      modality: 'CT',
      cellType: 'Mesh',
      WebPath: 'assets/TextConfig/image_text_mesh_ct.json',
    },
    {
      modality: 'CT',
      cellType: 'VR',
      WebPath: 'assets/TextConfig/image_text_vr_ct.json',
    },
    {
      modality: 'CT',
      cellType: 'MPR',
      WebPath: 'assets/TextConfig/image_text_mpr_ct.json',
    },
    {
      modality: 'MR',
      cellType: 'VR',
      WebPath: 'assets/TextConfig/image_text_vr_mr.json',
    },
    {
      modality: 'MR',
      cellType: 'MPR',
      WebPath: 'assets/TextConfig/image_text_mpr_mr.json',
    },
    {
      modality: 'PT',
      cellType: 'VR',
      WebPath: 'assets/TextConfig/image_text_vr_pet.json',
    },
    {
      modality: 'PT',
      cellType: 'MPR',
      WebPath: 'assets/TextConfig/image_text_mpr_pet.json',
    },
    {
      cellType: 'FusedMPR', // Pt-PT
      modality: 'PT',
      WebPath: 'assets/TextConfig/image_text_pet_pet_fuse.json',
    },
    {
      cellType: 'FusedPTTop', // PT-MR
      modality: 'PT',
      WebPath: 'assets/TextConfig/image_text_mpr_pet_fuse_top.json',
    },
    {
      cellType: 'FusedPTBase', // MR-PT
      modality: 'PT',
      WebPath: 'assets/TextConfig/image_text_mpr_pet_fuse_base.json',
    },
    {
      cellType: 'FusedMPR',
      WebPath: 'assets/TextConfig/image_text_mpr_fused.json',
    },
    {
      cellType: 'FusedVR',
      WebPath: 'assets/TextConfig/image_text_vr_fused.json',
    },
  ],
};
export const workflowConfig = {
  cellCollection: [
    {
      cellName: 'Mesh',
      cellType: 'Mesh',
      isStencil: false,
      initializeItems: [
    ],
    },
    {
      cellName: 'SingleVolumeStencil_VR',
      cellType: 'VR',
      isStencil: true,
      initializeItems: [
      ],
    },
    {
      cellName: 'SingleVolumeStencil_Axial',
      cellType: 'MPR',
      isStencil: true,
      initializeItems: [
        { mapClassName: 'CellBasicInitializeItem' },
        { mapClassName: 'NeuroMPRCellCrossHairInitializeItem' },
        {},
      ],
    },
    {
      cellName: 'SingleVolumeStencil_Coronal',
      clonedFrom: 'SingleVolumeStencil_Axial',
      isStencil: true,
    },
    {
      cellName: 'SingleVolumeStencil_Sagittal',
      clonedFrom: 'SingleVolumeStencil_Axial',
      isStencil: true,
    },
  ],
  layoutCollection: [
    {
      layoutName: '3+1',
      content: '3+1',
      toolTip: '3+1',
      layoutInfo: {
        layout: {
          rows: 1,
          columns: 2,
          widths: [3, 7],
          heights: [1, 1],
          cells: [
            { rows: 3, columns: 1 },
            { rows: 1, columns: 1 },
          ],
        },
        cellItems: ['SingleVolumeStencil_Axial', 'SingleVolumeStencil_Sagittal', 'SingleVolumeStencil_Coronal', 'Mesh'],
      },
    },
    {
      layoutName: '2+3',
      content: '2+3',
      toolTip: '2+3',
      layoutInfo: {
        layout: {
          rows: 2,
          columns: 1,
          widths: [1, 1],
          heights: [2, 1],
          cells: [
            { rows: 1, columns: 2 },
            { rows: 1, columns: 3 },
          ],
        },
        cellItems: [
          'SingleVolumeStencil_VR',
          'Mesh',
          'SingleVolumeStencil_Axial',
          'SingleVolumeStencil_Sagittal',
          'SingleVolumeStencil_Coronal',
        ],
      },
    },
  ],
};
