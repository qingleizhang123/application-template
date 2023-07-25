export const commonToolsConfig = {
  children: [
    {
      command: 'CommonToolsCommandViewModel',
      commandParameter: 'Pointer',
      uiStateConfig: {
        uiName: 'Pointer',
        toolTip: '选择/翻页',
        content: require('../../assets/commontools/tool_select.svg'),
        isCheckable: true,
        allowSwitchToUnCheckedWhenClicked: true,
      },
    },
    {
      command: 'CommonToolsCommandViewModel',
      commandParameter: 'Zoom',
      uiStateConfig: {
        uiName: 'Zoom',
        toolTip: '图像缩放',
        content: require('../../assets/commontools/tool_zoom.svg'),
        isCheckable: true,
        allowSwitchToUnCheckedWhenClicked: true,
      },
    },
    {
      command: 'CommonToolsCommandViewModel',
      commandParameter: 'Pan',
      uiStateConfig: {
        uiName: 'Pan',
        toolTip: '图像平移',
        content: require('../../assets/commontools/tool_pan.svg'),
        isCheckable: true,
        allowSwitchToUnCheckedWhenClicked: true,
      },
    },
    {
      command: 'FitWindowCommandViewModel',
      uiStateConfig: {
        uiName: 'FitToWindow',
        toolTip: '自适应显示',
        content: require('../../assets/commontools/tool_fitwindow.svg'),
      },
    },
    {
      command: 'CommonToolsCommandViewModel',
      commandParameter: 'Windowing',
      uiStateConfig: {
        uiName: 'Windowing',
        toolTip: '调整窗宽窗位',
        content: require('../../assets/commontools/tool_window.svg'),
      },
    },
    {
      command: 'NeuroResetWindowingCommandViewModel',
      uiStateConfig: {
        uiName: 'ResetWindowing',
        toolTip: '重置窗宽窗位',
        content: require('../../assets/commontools/tool_resetWWWL.svg'),
      },
    },
    {
      selectedIdx: 0,
      children: [
        {
          command: 'CommonToolsCommandViewModel',
          commandParameter: 'AnnotationLine',
          uiStateConfig: {
            uiName: 'AnnotationLine',
            toolTip: '直线测距',
            content: require('../../assets/commontools/tool_line.svg'),
            isCheckable: true,
            allowSwitchToUnCheckedWhenClicked: true,
          },
        },
        {
          command: 'CommonToolsCommandViewModel',
          commandParameter: 'AnnotationAngle',
          uiStateConfig: {
            uiName: 'AnnotationAngle',
            toolTip: '角度测量',
            content: require('../../assets/commontools/tool_angle.svg'),
            isCheckable: true,
            allowSwitchToUnCheckedWhenClicked: true,
          },
        },
        {
          command: 'CommonToolsCommandViewModel',
          commandParameter: 'VRAnnotationLine',
          uiStateConfig: {
            uiName: 'VRAnnotationLine',
            toolTip: '三维测距',
            content: require('../../assets/commontools/tool_line.svg'),
            isCheckable: true,
            allowSwitchToUnCheckedWhenClicked: true,
          },
        },
      ],
    },
    {
      command: 'NeuroClearAllGraphicsCommandViewModel',
      uiStateConfig: {
        uiName: 'ClearGraphic',
        toolTip: '清除所有图元',
        content: require('../../assets/commontools/tool_clear.svg'),
      },
    },
    {
      command: 'NeuroResetMPRCommandViewModel',
      uiStateConfig: {
        uiName: 'Reset MPR',
        toolTip: '重置MPR',
        content: require('../../assets/commontools/tool_resetMPR.svg'),
      },
    },
    {
      command: 'NeuroCrossHairVisibleCommandViewModel',
      commandParameter: '',
      uiStateConfig: {
        uiName: 'CrossHairVisible',
        toolTip: '十字线显示/隐藏',
        content: require('../../assets/commontools/tool_crosshair_show.svg'),
      },
    },
    {
      command: 'NeuroCrossHairLockCommandViewModel',
      commandParameter: '',
      uiStateConfig: {
        uiName: 'CrossHairLock',
        toolTip: '十字线锁定',
        content: require('../../assets/commontools/tool_crosshair_unlock.svg'),
      },
    },
  ],
};
