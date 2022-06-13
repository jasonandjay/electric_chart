import { useEffect, useState } from 'react';
const NodeDataIcon = ({ type }: { type: string }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    // console.log();
    const path = `@/components/${type}/img.svg`;
    import(path).then((res) => {
      console.log(res);
    });
  }, []);
  return <i></i>;
};

export default NodeDataIcon;
