import React from 'react';
import type {
  NsNodeCollapsePanel,
  NsNodeCmd,
  IGraphCommandService,
  NsGraph,
} from '@antv/xflow';
import { XFlowConstants, XFlowNodeCommands, uuidv4 } from '@antv/xflow';
import { NODEDATAS } from '@/config/config-graph';
// 添加节点
export const addNode = (
  cmd: IGraphCommandService,
  nodeConfig: NsGraph.INodeConfig,
) => {
  return cmd.executeCommand<NsNodeCmd.AddNode.IArgs>(
    XFlowNodeCommands.ADD_NODE.id,
    {
      nodeConfig: { ...nodeConfig, id: uuidv4(), width: 30 },
    },
  );
};

export const DND_RENDER_ID = 'DND_RENDER_ID';

export const onNodeDrop: NsNodeCollapsePanel.IOnNodeDrop = async (
  nodeConfig,
  commandService,
) => {
  addNode(commandService, nodeConfig);
};

export const nodeDataService: NsNodeCollapsePanel.INodeDataService = async (
  meta,
  modelService,
) => {
  return [
    {
      id: 'component',
      header: '定制组件',
      children: Object.keys(NODEDATAS).map((key, i) => ({
        id: `${i}`,
        label: NODEDATAS[key]?.label,
        renderKey: key,
        popoverContent: <div>{NODEDATAS[key]?.label}</div>,
        renderComponent: (props) => (
          <div className="react-dnd-node">
            <i>
              <img src={NODEDATAS[key]?.icon} />
            </i>
            <p>{props.data.label}</p>
          </div>
        ),
      })),
    },
  ];
};
