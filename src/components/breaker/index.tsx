// 带电显示
import type { NsGraph } from '@antv/xflow';
import { useAppContext } from '@antv/xflow';
import './index.less';
import img from './img.svg';

const Breaker: NsGraph.INodeRender = (props) => {
  const ctx = useAppContext();

  return (
    <div className="Breaker-container component">
      <img src={img} />
    </div>
  );
};
export default Breaker;
export const Icon = img;
