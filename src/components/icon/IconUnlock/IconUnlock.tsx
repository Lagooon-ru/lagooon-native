import React, { FC } from 'react';
import IconProps from "components/icon/icon.type";
import Svg from "/assets/svgs/unlock.svg";
import ActiveSvg from "/assets/svgs/unlock.svg";

const IconUnlock: FC<IconProps> = (props) => {
  const {width, height, style = {}, active} = props;

  return active ? (
    <ActiveSvg width={width} height={height} style={style}/>
  ) : (
    <Svg width={width} height={height} style={style}/>
  );
};

export default IconUnlock;