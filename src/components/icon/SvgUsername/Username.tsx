import React, {FC} from 'react';
import UsernameSvgFile from '/assets/svgs/username.svg';

interface Props {
  size?: number
}

const SvgUsername: FC<Props> = (props) => {
  const {size} = props

  return (
    <UsernameSvgFile width={size || 120} height={size || 120}/>
  );
};

export default SvgUsername;