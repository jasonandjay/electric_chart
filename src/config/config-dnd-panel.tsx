import React from 'react'
import type { NsNodeCollapsePanel, NsNodeCmd, IGraphCommandService, NsGraph } from '@antv/xflow'
import { XFlowConstants, XFlowNodeCommands, uuidv4 } from '@antv/xflow'

// 添加节点
export const addNode = (cmd: IGraphCommandService, nodeConfig: NsGraph.INodeConfig) => {
  return cmd.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {
    nodeConfig: { ...nodeConfig, id: uuidv4(), width: 190, height: 32 },
  })
}

export const DND_RENDER_ID = 'DND_RENDER_ID'

export const onNodeDrop: NsNodeCollapsePanel.IOnNodeDrop = async (nodeConfig, commandService) => {
  addNode(commandService, nodeConfig)
}

export const nodeDataService: NsNodeCollapsePanel.INodeDataService = async (meta, modelService) => {
  console.log(meta, modelService)
  return [
    {
      id: 'component',
      header: '定制组件',
      children: [
        {
          id: '1',
          label: '电容柜',
          renderKey: 'CAPACITORBANK',
          popoverContent: <div>电容柜组件</div>,
          // TODO: 修改自定义组件的样式，icon+text?
          renderComponent: props => (
            <div className="react-dnd-node react-custom-node-1"> {props.data.label} </div>
          ),
        },
        {
          id: '2',
          label: '断路器',
          renderKey: 'Breaker',
          popoverContent: <div>断路器组件</div>,
          renderComponent: props => (
            <div className="react-dnd-node react-custom-node-2"> {props.data.label} </div>
          ),
        },
        {
          id: '3',
          label: '带电显示',
          renderKey: 'PRESENCEINDICATING',
          popoverContent: <div>带电显示组件</div>,
          renderComponent: props => (
            <div className="react-dnd-node react-custom-node-3"> {props.data.label} </div>
          ),
        },
        {
          id: '4',
          label: '避雷器',
          renderKey: 'LIGHTNINGARRESTER',
          popoverContent: <div>避雷器组件</div>,
          renderComponent: props => (
            <div className="react-dnd-node react-custom-node-4"> {props.data.label} </div>
          ),
        },
        {
          id: '5',
          label: '电压互感器',
          renderKey: 'VOLTAGETRANSFORMER',
          popoverContent: <div>电压互感器组件</div>,
          renderComponent: props => (
            <div className="react-dnd-node react-custom-node-5"> {props.data.label} </div>
          ),
        },
        {
          id: '6',
          label: '接地开关',
          renderKey: 'EARTHSWITCH',
          popoverContent: <div>接地开关组件</div>,
          renderComponent: props => (
            <div className="react-dnd-node react-custom-node-6"> {props.data.label} </div>
          ),
        },
      ],
    },
  ]
}
