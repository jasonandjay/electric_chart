// 带电显示
import type { NsGraph } from '@antv/xflow';
import { useAppContext } from '@antv/xflow';
import './index.less';
import img from './img.svg';

const CapacitorBank: NsGraph.INodeRender = (props) => {
  const ctx = useAppContext();

  return (
    <div className="CapacitorBank-container component">
      <img src={img} />
    </div>
  );
};
export default CapacitorBank;

export const Icon = img;
