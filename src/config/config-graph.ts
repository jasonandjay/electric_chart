import React from 'react';
import { createGraphConfig } from '@antv/xflow';
/** 自定义React节点/边 */
import Node1 from '@/components/node1';
import Node2 from '@/components/node2';
import Edge1 from '@/components/edge1';
import Edge2 from '@/components/edge2';
// 带电显示组件
import PRESENCEINDICATING from '@/components/presenceIndicating';
// 断路器
import Breaker from '@/components/breaker';
// 电容柜
import CAPACITORBANK from '@/components/capacitorBank';
// 接地开关
import EARTHSWITCH from '@/components/earthSwitch';
// 避雷器
import LIGHTNINGARRESTER from '@/components/lightningArrester';
// 电压互感器
import VOLTAGETRANSFORMER from '@/components/voltageTransformer';

export const useGraphConfig = createGraphConfig((config) => {
  /** 设置XFlow画布配置项 */
  config.setX6Config({
    /** 画布网格 */
    grid: true,
    /** 画布缩放等级 */
    scaling: {
      min: 0.2,
      max: 3,
    },
    /** 画布滚轮缩放 */
    // mousewheel: {
    //   enabled: true,
    //   /** 将鼠标位置作为中心缩放 */
    //   zoomAtMousePosition: true,
    // },
  });

  /** 设置XFlow画布需要渲染的React节点/边 */
  config.setNodeRender('NODE1', Node1);
  config.setNodeRender('NODE2', Node2);
  config.setNodeRender('PRESENCEINDICATING', PRESENCEINDICATING);
  config.setNodeRender('Breaker', Breaker);
  config.setNodeRender('CAPACITORBANK', CAPACITORBANK);
  config.setNodeRender('EARTHSWITCH', EARTHSWITCH);
  config.setNodeRender('LIGHTNINGARRESTER', LIGHTNINGARRESTER);
  config.setNodeRender('VOLTAGETRANSFORMER', VOLTAGETRANSFORMER);
  config.setEdgeRender('EDGE1', Edge1);
  config.setEdgeRender('EDGE2', Edge2);
});
