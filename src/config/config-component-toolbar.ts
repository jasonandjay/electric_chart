import { createToolbarConfig } from '@antv/xflow';
import { IconStore, XFlowNodeCommands } from '@antv/xflow';
import { PlusCircleOutlined } from '@ant-design/icons';
import type { NsNodeCmd } from '@antv/xflow';
IconStore.set('PlusCircleOutlined', PlusCircleOutlined);
let id = 1;
export const useComponentToolbarConfig = createToolbarConfig(
  (toolbarConfig) => {
    /** 生产 toolbar item */
    toolbarConfig.setToolbarModelService(async (toolbarModel) => {
      toolbarModel.setValue((toolbar) => {
        toolbar.mainGroups = [
          {
            name: 'main',
            items: [
              {
                id: '1',
                text: '添加节点',
                iconName: 'PlusCircleOutlined',
                tooltip: '电容柜',
                onClick: async ({ commandService }) => {
                  const nodeName = `Node-${id}`;
                  commandService.executeCommand<NsNodeCmd.AddNode.IArgs>(
                    XFlowNodeCommands.ADD_NODE.id,
                    {
                      nodeConfig: {
                        id: nodeName,
                        label: nodeName,
                        x: 100 + id * 5,
                        y: 50 + id * 5,
                        width: 160,
                        height: 32,
                      },
                    },
                  );
                  id += 1;
                },
              },
              {
                id: '2',
                iconName: 'PlusCircleOutlined',
                tooltip: '断路器(竖)',
              },
              {
                id: '3',
                iconName: 'PlusCircleOutlined',
                tooltip: '断路器(横)',
              },
              {
                id: '4',
                iconName: 'PlusCircleOutlined',
                tooltip: '带电显示',
              },
              {
                id: '5',
                iconName: 'PlusCircleOutlined',
                tooltip: '避雷器',
              },
              {
                id: '6',
                iconName: 'PlusCircleOutlined',
                tooltip: '电压互感器',
              },
              {
                id: '7',
                iconName: 'PlusCircleOutlined',
                tooltip: '接地开关',
              },
            ],
          },
        ];
      });
    });
  },
);
