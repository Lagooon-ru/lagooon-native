import React, { FC } from 'react';
import IconProps from "components/icon/icon.type";
import VideoSvg from "/assets/svgs/video.svg";
import VideoActiveSvg from "/assets/svgs/video-active.svg";

const IconVideo: FC<IconProps> = (props) => {
  const {width, height, style = {}, active} = props;

  return active ? (
    <VideoActiveSvg width={width} height={height} style={style}/>
  ) : (
    <VideoSvg width={width} height={height} style={style}/>
  );
};

export default IconVideo;