import React, {FC} from 'react';
import LogoImage from '/assets/svgs/logo.svg';

interface Props {
  size?: number
}

const SvgLogo: FC<Props> = (props) => {
  const {size} = props

  return (
    <LogoImage width={size || 120} height={size || 120}/>
  );
};

export default SvgLogo;