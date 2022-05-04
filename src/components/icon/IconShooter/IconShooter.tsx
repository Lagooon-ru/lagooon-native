import React, { FC } from 'react';
import IconProps from "components/icon/icon.type";
import ShooterSvg from "/assets/svgs/shooter.svg";

const IconShooter: FC<IconProps> = (props) => {
  const {width, height, style = {}} = props;

  return <ShooterSvg width={width} height={height} style={style}/>;
};

export default IconShooter;