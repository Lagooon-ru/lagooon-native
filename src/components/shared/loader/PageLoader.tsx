import React, {FC} from 'react';
import Loader from "./Loader";
import Box from "components/shared/paper/Box";
import { fullHeight } from 'utils/helper/style/mixins';

const PageLoader: FC = () => {
  return (
    <Box
      align='center'
      justify='center'
      height={fullHeight()}
    >
      <Box>
        <Loader size={36}/>
      </Box>
    </Box>
  );
};

export default PageLoader;