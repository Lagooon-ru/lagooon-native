import React, {FC} from 'react';
import CheckSvg from '/assets/svgs/check.svg';
import IconProps from "components/icon/icon.type";

const IconCheck: FC<IconProps> = (props) => {
  const {width, height, style = {}} = props;

  return <CheckSvg width={width} height={height} style={style}/>;
};
export default IconCheck;
