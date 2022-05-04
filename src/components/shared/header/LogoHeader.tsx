import React from 'react';
import Box from "components/shared/paper/Box";
import LogoHorizontal from '/assets/svgs/logo-horizontal.svg'
import {px} from "utils/helper/style/mixins";


const LogoHeader = () => {
  return (
    <Box align='center' height={50} justify='center'>
      <LogoHorizontal width={px(114)} height={px(24)}/>
    </Box>
  );
};

export default LogoHeader;