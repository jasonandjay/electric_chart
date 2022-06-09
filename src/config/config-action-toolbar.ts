import { createToolbarConfig } from '@antv/xflow'
import { XFlowGraphCommands, XFlowNodeCommands, IconStore } from '@antv/xflow'
import { PlusCircleOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons'
import type { NsGraphCmd, NsNodeCmd } from '@antv/xflow'

IconStore.set('PlusCircleOutlined', PlusCircleOutlined)
IconStore.set('SaveOutlined', SaveOutlined)
IconStore.set('DeleteOutlined', DeleteOutlined)

export const useActionToolbarConfig = createToolbarConfig(toolbarConfig => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async toolbarModel => {
    toolbarModel.setValue(toolbar => {
      toolbar.mainGroups = [
        {
          name: 'main',
          items: [
            {
              id: '1',
              text: '添加节点',
              iconName: 'PlusCircleOutlined',
              tooltip: 'horizontal',
            },
            {
              id: XFlowGraphCommands.SAVE_GRAPH_DATA.id,
              text: '保存数据',
              iconName: 'SaveOutlined',
              onClick: async ({ commandService }) => {
                commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(
                  XFlowGraphCommands.SAVE_GRAPH_DATA.id,
                  {
                    saveGraphDataService: async (meta, data) => {
                      console.log(data)
                    },
                  },
                )
              },
            },
          ],
        },
      ]
      toolbar.extraGroups = [
        {
          name: 'extra',
          items: [
            {
              id: '3',
              iconName: 'DeleteOutlined',
              text: '退出',
              tooltip: '退出编辑',
            },
          ],
        },
      ]
    })
  })
})
