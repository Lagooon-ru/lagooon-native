import React, {FC} from 'react';
import SafeArea from "components/shared/paper/SafeArea";
import Colors from "utils/helper/style/color";
import Wrap from "components/shared/paper/Wrap";
import LogoHeader from "../../components/shared/header/LogoHeader";


const ActivityScreen: FC = () => {

  return (
    <SafeArea bg={Colors.white}>
      <Wrap>
        <LogoHeader/>
      </Wrap>
    </SafeArea>
  );
};

export default ActivityScreen;