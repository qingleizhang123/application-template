import { GraphicBase, GraphicImplBase } from 'uih-mcsf-medviewercontrol';
import { Point } from 'uih-mcsf-utility';

export interface RenderContourLineModel {
  maskId: number;
  contourLinePoints: Point[];
  lineColor: string;
  isVisible: boolean;
  opacity?: number;
}
export class GraphicContourLine extends GraphicBase {
  renderContourLineModel: RenderContourLineModel;

  constructor(implcreater: { new (): GraphicImplBase }) {
    super(implcreater);
    this.isCreated = true;
    this.canDelete = true;
  }

  delete(): void {
    super.delete();
  }
}
