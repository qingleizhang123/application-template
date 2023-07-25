import { plugable } from 'uih-mcsf-appframework';
import { CellInitializeItemBase } from 'uih-mcsf-apptoolkit';
import { OverlayData } from 'uih-mcsf-medviewercontrol';

@plugable('ContourLineOverlayInitializeItem')
export class ContourLineOverlayInitializeItem extends CellInitializeItemBase {
  initialize(): void {
    // add overlay data
    const olData = new OverlayData();
    olData.overlayType = 'Contourline';
    this.cell.displayData.addOverlay(olData);
    // add overlay impl
    this.cell.getOrAddOverlay('Contourline');
  }
}