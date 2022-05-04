import React, {FC} from 'react';
import BioSvgFile from '/assets/svgs/bio.svg';

interface Props {
  size?: number
}

const SvgBio: FC<Props> = (props) => {
  const {size} = props

  return (
    <BioSvgFile width={size || 120} height={size || 120}/>
  );
};

export default SvgBio;