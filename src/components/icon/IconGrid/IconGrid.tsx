import React, { FC } from 'react';
import IconProps from "components/icon/icon.type";
import GridSvg from "/assets/svgs/grid.svg";

const IconGrid: FC<IconProps> = (props) => {
  const {width, height, style = {}} = props;

  return <GridSvg width={width} height={height} style={style}/>;
};

export default IconGrid;