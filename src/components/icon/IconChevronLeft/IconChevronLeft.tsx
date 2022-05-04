import React, {FC} from 'react';
import ChevronLeftSvg from '/assets/svgs/chevron-left.svg';
import ChevronLeftDarkSvg from '/assets/svgs/chevron-left-dark.svg';
import IconProps from "components/icon/icon.type";

const IconChevronLeft: FC<IconProps> = (props) => {
  const {width, height, style = {}, active} = props;

  return active ? (
    <ChevronLeftDarkSvg width={width} height={height} style={style}/>
  ) : (
    <ChevronLeftSvg width={width} height={height} style={style}/>
  );
};
export default IconChevronLeft;
