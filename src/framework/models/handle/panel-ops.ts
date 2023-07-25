/* eslint-disable no-useless-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable import/order */
import { ModelContainer, plugable } from 'uih-mcsf-appframework';
import {
  IPanelOperation,
} from 'uih-mcsf-apptoolkit';
import * as $PBRoot from 'uih-mcsf-protocol';
import { UIBot } from '@/framework/proto/uhor_planning_common';
import $UHORPB = UIBot.UHOR.ProtoBuf;
import $FrameworkPB = $PBRoot.Mcsf.AppFramework.ProtoBuf;

@plugable('UpdateTissueList')
export class UpdateTissueList implements IPanelOperation {
  handle(modelContainer: ModelContainer, obj: $FrameworkPB.MsgCommonOperate): Uint8Array {
    const tissueObject = $UHORPB.MsgTissueList.decode(obj.context);
    console.log(tissueObject, '----------UpdateTissueList-------')
    return null;
  }
}



