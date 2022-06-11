// 带电显示
import type { NsGraph } from '@antv/xflow';
import { useAppContext } from '@antv/xflow';
import './index.less';
import img from './img.png';

const PresenceIndicating: NsGraph.INodeRender = (props) => {
  const ctx = useAppContext();

  return (
    <div className="PresenceIndicating-container">
      <img src={img} />
    </div>
  );
};
export default PresenceIndicating;
