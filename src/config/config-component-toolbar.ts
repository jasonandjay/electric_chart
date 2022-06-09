import { createToolbarConfig } from '@antv/xflow'
import { IconStore } from '@antv/xflow'
import { PlusCircleOutlined } from '@ant-design/icons'

IconStore.set('PlusCircleOutlined', PlusCircleOutlined)

export const useComponentToolbarConfig = createToolbarConfig(toolbarConfig => {
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
              tooltip: '电容柜',
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
              id: '6',
              iconName: 'PlusCircleOutlined',
              tooltip: '接地开关',
            }
          ],
        },
      ]
    })
  })
})
