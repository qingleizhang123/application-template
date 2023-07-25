import * as AppToolkit from 'uih-mcsf-apptoolkit';
import {
  AppLayoutSwitcher,
  ImageTextInitializeItem,
  PseudoColorViewModel,
  RulerCellOperation,
} from 'uih-mcsf-apptoolkit';
import * as VueAppToolkit from 'uih-mcsf-vue-apptoolkit';
import { ModelContainer } from 'uih-mcsf-appframework';
import {
  ContourLineOperation
} from '@/framework/models/handle/cell-ops';
import {
  UpdateTissueList,
} from '@/framework/models/handle/panel-ops';
import { commonToolsConfig } from '@/framework/config/commontools.config';
import { ContourLineOverlayInitializeItem } from '../models/initialize/cell-initialize-item';
import { commandConfig } from './command.config';
import { workflowConfig } from './workflow.config';

export const modelContainerConfig = {
  modelCollection: [
    {
      modelName: 'AppWorkflow',
      modelParameter: workflowConfig,
    },
    {
      modelName: 'CommandHandlerModel',
      modelParameter: commandConfig,
    },
    {
      modelName: 'CommonTools',
      mapClassName: 'AppControlModel',
      modelParameter: commonToolsConfig,
    }
  ],
};

export function registerCommonType(modelContainer: ModelContainer) {
  AppToolkit.registerType(modelContainer);
  modelContainer.register(PseudoColorViewModel);
  modelContainer.register(AppToolkit.CrossCellOperation);
  modelContainer.register(UpdateTissueList);
  modelContainer.register(ContourLineOperation);
  modelContainer.register(ContourLineOverlayInitializeItem);
  modelContainer.register(RulerCellOperation);
}

export function addCommonModels(modelContainer: ModelContainer) {
  AppToolkit.addModels(modelContainer);
  VueAppToolkit.addModels(modelContainer);
  modelContainer.initilize(modelContainerConfig);
}
