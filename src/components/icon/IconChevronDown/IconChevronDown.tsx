import React, {FC} from 'react';
import ActiveSvg from '/assets/svgs/chevron-down.svg';
import Svg from '/assets/svgs/chevron-down.svg';
import IconProps from "components/icon/icon.type";

const IconChevronDown: FC<IconProps> = (props) => {
  const {width, height, style = {}, active} = props;

  return active ? (
    <ActiveSvg width={width} height={height} style={style}/>
  ) : (
    <Svg width={width} height={height} style={style}/>
  );
};
export default IconChevronDown;
