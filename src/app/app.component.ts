
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { BpmnShapeModel, NodeModel, DiagramComponent, BpmnFlowModel, PointModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: "app-root",
  template: `<ejs-diagram id="diagram" width="100%" height="580px" [getNodeDefaults]="getNodeDefaults">
    <e-nodes>
      <e-node id='node' [offsetX]=110 [offsetY]=300 [shape]='node'></e-node>
      <e-node id='node1' [offsetX]=500 [offsetY]=300 [shape]='node1'></e-node>
    </e-nodes>
    <e-connectors>
        <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [shape]='shape'>
        </e-connector>
      <e-connector id='connector1' type='Orthogonal' [sourcePoint]='{ x: 250, y: 100 }' [targetPoint]='{ x: 350, y: 200 }' [shape]='shape2'>
      </e-connector>
      <e-connector id='connector2' [sourcePoint]='{ x: 450, y: 100 }' [targetPoint]='{ x: 550, y: 200 }' [shape]='shape3'>
      </e-connector>
      <e-connector id='connector3' sourceID='node' targetID='node1' [shape]='shape4'>
      </e-connector>

    </e-connectors>
</ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public sourcePoint: PointModel;
  public targetPoint:PointModel;
  public node: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'Start'
    },
    activity: {
      activity: 'Task',
      task: {
        type: 'Send'
      }
    }
  };
  public node1: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'NonInterruptingStart'
    },
    activity: {
      activity: 'Task',
      task: {
        type: 'Service'
      }
    }
  };
  public shape: BpmnFlowModel = {
    type: 'Bpmn',
    flow: "Association",
    association: "BiDirectional"
  };
  public shape2: BpmnFlowModel = {
    type: 'Bpmn',
    flow: "Message",
    message: "InitiatingMessage"
  };
  public shape3: BpmnFlowModel = {
    type: 'Bpmn',
    flow: "Message",
    message: "NonInitiatingMessage"
  };
  public shape4: BpmnFlowModel = {
    type: 'Bpmn',
    flow: "Message",
    message: "InitiatingMessage"
  };

  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  };
  ngOnInit(): void {
    this.sourcePoint = { x: 100, y: 100 };
    this.targetPoint = { x: 200, y: 200 };
  }
}
