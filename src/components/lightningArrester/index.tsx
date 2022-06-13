// 避雷器
import type { NsGraph } from '@antv/xflow';
import { useAppContext } from '@antv/xflow';
import './index.less';
import img from './img.svg';

const LightningArrester: NsGraph.INodeRender = (props) => {
  const ctx = useAppContext();

  return (
    <div className="LightningArrester-container component">
      <img src={img} />
    </div>
  );
};
export default LightningArrester;
export const Icon = img;
