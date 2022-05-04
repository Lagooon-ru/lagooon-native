import React, {FC, useEffect, useRef, useState} from 'react';
import Box from "components/shared/paper/Box";
import {useStore} from "effector-react";
import {$auth} from "models/auth/state";
import Icon from "components/icon";
import IconButton from "components/shared/input/iconButton";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import PopupMenu from "components/screen/story/PopupMenu";
import { logoutEvent } from 'models/auth/event';

interface Props {
}

const ProfileAction: FC<Props> = (props) => {
  const navigation: any = useNavigation();
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused()

  useEffect(() =>{
    setVisible(false)
  }, [isFocused])

  return (
    <Box direction='row' justify='flex-end'>
      <IconButton
        size={30}
        style={{marginRight: 12}}
        onPress={() => {setVisible(true); console.log('PRESSED')}}
      >
        <Icon name='add' width={28} height={28}/>
      </IconButton>
      <IconButton
        size={30}
        style={{marginRight: 12}}
        onPress={() => {
          navigation.navigate('SettingScreen')
        }}
      >
        <Icon name='edit' width={28} height={28}/>
      </IconButton>
      <IconButton
        size={30}
        style={{marginRight: 12}}
        onPress={logoutEvent}
      >
        <Icon name='logout' width={28} height={28}/>
      </IconButton>
      <PopupMenu visible={visible} setVisible={setVisible}/>
    </Box>
  );
};

export default ProfileAction;