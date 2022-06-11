import { createToolbarConfig } from '@antv/xflow'
import { XFlowGraphCommands, XFlowNodeCommands, IconStore } from '@antv/xflow'
import { PlusCircleOutlined, SaveOutlined, DeleteOutlined, ExportOutlined, EyeOutlined } from '@ant-design/icons'
import type { NsGraphCmd, NsNodeCmd } from '@antv/xflow'

IconStore.set('PlusCircleOutlined', PlusCircleOutlined)
IconStore.set('SaveOutlined', SaveOutlined)
IconStore.set('DeleteOutlined', DeleteOutlined)
IconStore.set('ExportOutlined', ExportOutlined)
IconStore.set('EyeOutlined', EyeOutlined)

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
              text: '预览',
              iconName: 'EyeOutlined',
              onClick: async ({ commandService }) => {
                // TODO: 预览电路图
              },
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
                      // TODO: 存储数据到mobx or model
                      console.log(data)
                    },
                  },
                )
              },
            },
            {
              id: '3',
              text: '导出',
              iconName: 'ExportOutlined',
              onClick: async ({ commandService }) => {
                // TODO: 导出PDF
              },
            },
          ],
        },
      ]
    })
  })
})
