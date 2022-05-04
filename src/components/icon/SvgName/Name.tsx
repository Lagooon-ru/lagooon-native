import React, {FC} from 'react';
import NameSvgFile from '/assets/svgs/name.svg';

interface Props {
  size?: number
}

const NameSvg: FC<Props> = (props) => {
  const {size} = props

  return (
    <NameSvgFile width={size || 120} height={size || 120}/>
  );
};

export default NameSvg;