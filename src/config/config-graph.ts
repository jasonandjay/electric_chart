import React from 'react';
import { createGraphConfig } from '@antv/xflow';
/** 自定义React节点/边 */
import Node1 from '@/components/node1';
import Node2 from '@/components/node2';
import Edge1 from '@/components/edge1';
import Edge2 from '@/components/edge2';
import PRESENCEINDICATING from '@/components/presenceIndicating';

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
  config.setEdgeRender('EDGE1', Edge1);
  config.setEdgeRender('EDGE2', Edge2);
});
