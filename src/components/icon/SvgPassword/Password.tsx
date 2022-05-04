import React, {FC} from 'react';
import PasswordSvgFile from '/assets/svgs/password.svg';

interface Props {
  size?: number
}

const SvgPassword: FC<Props> = (props) => {
  const {size} = props

  return (
    <PasswordSvgFile width={size || 120} height={size || 120}/>
  );
};

export default SvgPassword;