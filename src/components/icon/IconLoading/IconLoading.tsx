import React, { FC } from 'react';
import IconProps from "components/icon/icon.type";
import LoadingSvg from "/assets/svgs/loading.svg";

const IconLoading: FC<IconProps> = (props) => {
  const {width, height, style = {}} = props;

  return <LoadingSvg width={width} height={height} style={style}/>;
};

export default IconLoading;