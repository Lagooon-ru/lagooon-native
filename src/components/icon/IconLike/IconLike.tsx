import React, { FC } from 'react';
import IconProps from "components/icon/icon.type";
import Svg from "/assets/svgs/like.svg";
import ActiveSvg from "/assets/svgs/like-active.svg";

const IconLike: FC<IconProps> = (props) => {
  const {width, height, style = {}, active} = props;

  return active ? (
    <ActiveSvg width={width} height={height} style={style}/>
  ) : (
    <Svg width={width} height={height} style={style}/>
  );
};

export default IconLike;