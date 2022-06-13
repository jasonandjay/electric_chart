// 带电显示
import type { NsGraph } from '@antv/xflow';
import { useAppContext } from '@antv/xflow';
import './index.less';
import img from './img.svg';

const VoltageTransformer: NsGraph.INodeRender = (props) => {
  const ctx = useAppContext();

  return (
    <div className="VoltageTransformer-container">
      <img src={img} />
    </div>
  );
};
export default VoltageTransformer;
export const Icon = img;
