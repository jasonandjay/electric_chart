// 带电显示
import type { NsGraph } from '@antv/xflow';
import { useAppContext } from '@antv/xflow';
import './index.less';
import img from './img.svg';

const EarthSwitch: NsGraph.INodeRender = (props) => {
  const ctx = useAppContext();

  return (
    <div className="EarthSwitch-container component">
      <img src={img} />
    </div>
  );
};
export default EarthSwitch;

export const Icon = img;
