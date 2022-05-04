import React, {FC} from 'react';
import Box from "components/shared/paper/Box";
import {H5} from "components/shared/heading/Title";
import {rs} from "utils/helper/style/mixins";

const Nodata: FC = () => {
  return (
    <Box align='center' mt={rs(150)}>
      <H5>Пока нет публикаций</H5>
    </Box>
  );
};

export default Nodata;