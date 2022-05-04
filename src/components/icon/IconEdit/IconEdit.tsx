import React, {FC} from 'react';
import EditSvg from '/assets/svgs/edit.svg';
import EditActiveSvg from '/assets/svgs/edit-active.svg';
import IconProps from "components/icon/icon.type";

const IconEdit: FC<IconProps> = (props) => {
  const {width, height, style = {}, active} = props;

  return active ? (
    <EditActiveSvg width={width} height={height} style={style}/>
  ) : (
    <EditSvg width={width} height={height} style={style}/>
  );
};
export default IconEdit;
