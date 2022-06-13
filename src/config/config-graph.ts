import { createGraphConfig } from '@antv/xflow';
/** 自定义React节点/边 */
import Node1 from '@/components/node1';
import Node2 from '@/components/node2';
import Edge1 from '@/components/edge1';
import Edge2 from '@/components/edge2';
// 带电显示组件
import PRESENCEINDICATING, {
  Icon as PRESENCEINDICATING_icon,
} from '@/components/presenceIndicating';
// 断路器
import BREAKER, { Icon as BREAKER_icon } from '@/components/breaker';
// 电容柜
import CAPACITORBANK, {
  Icon as CAPACITORBANK_icon,
} from '@/components/capacitorBank';
// 接地开关
import EARTHSWITCH, {
  Icon as EARTHSWITCH_icon,
} from '@/components/earthSwitch';
// 避雷器
import LIGHTNINGARRESTER, {
  Icon as LIGHTNINGARRESTER_icon,
} from '@/components/lightningArrester';
// 电压互感器
import VOLTAGETRANSFORMER, {
  Icon as VOLTAGETRANSFORMER_icon,
} from '@/components/voltageTransformer';
import { ReactNode } from 'react';

interface NODEDATASITEM {
  [properyName: string]: {
    icon: string;
    component: ReactNode;
    label: string;
  };
}
export const NODEDATAS: NODEDATASITEM = {
  PRESENCEINDICATING: {
    icon: PRESENCEINDICATING_icon,
    component: PRESENCEINDICATING,
    label: '带电显示',
  },
  BREAKER: {
    icon: BREAKER_icon,
    component: BREAKER,
    label: '断路器',
  },
  CAPACITORBANK: {
    icon: CAPACITORBANK_icon,
    component: CAPACITORBANK,
    label: '电容柜',
  },
  EARTHSWITCH: {
    icon: EARTHSWITCH_icon,
    component: EARTHSWITCH,
    label: '接地开关',
  },
  LIGHTNINGARRESTER: {
    icon: LIGHTNINGARRESTER_icon,
    component: LIGHTNINGARRESTER,
    label: '避雷器',
  },
  VOLTAGETRANSFORMER: {
    icon: VOLTAGETRANSFORMER_icon,
    component: VOLTAGETRANSFORMER,
    label: '电压互感器',
  },
};

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
  // 自定义节点
  Object.entries(NODEDATAS).forEach(([key, { component }]) => {
    config.setNodeRender(key, component);
  });
  config.setEdgeRender('EDGE1', Edge1);
  config.setEdgeRender('EDGE2', Edge2);
});
