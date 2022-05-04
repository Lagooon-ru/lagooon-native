import React, {FC} from 'react';
import PhotoSvgFile from '/assets/svgs/photo.svg';

interface Props {
  size?: number
}

const SvgPhoto: FC<Props> = (props) => {
  const {size} = props

  return (
    <PhotoSvgFile width={size || 120} height={size || 120}/>
  );
};

export default SvgPhoto;