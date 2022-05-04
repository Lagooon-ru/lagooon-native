import React, { FC } from 'react';
import IconProps from "components/icon/icon.type";
import HomeSvg from "/assets/svgs/home.svg";
import HomeActiveSvg from "/assets/svgs/homeActive.svg";

const IconHome: FC<IconProps> = (props) => {
  const {width, height, style = {}, active} = props;

  return active ? (
    <HomeActiveSvg width={width} height={height} style={style}/>
  ) : (
    <HomeSvg width={width} height={height} style={style}/>
  );
};

export default IconHome;