import React, {FC, useEffect, useRef, useState} from 'react';
import RBSheet from "react-native-raw-bottom-sheet";
import Container from "components/shared/paper/Container";
import Box from "components/shared/paper/Box";
import {H3} from "components/shared/heading/Title";
import {TouchableOpacity, View} from "react-native";
import IconButton from "components/shared/input/iconButton";
import Icon from "components/icon";
import {P1} from "components/shared/paragraph";
import {useNavigation} from "@react-navigation/native";

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const PopupMenu: FC<Props> = (props) => {
  const {visible, setVisible} = props
  const navigation: any = useNavigation()
  const ref: any = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() =>{
    if(visible) {
      ref.current.open()
    }
  }, [visible])

  useEffect(() =>
  {
    setMounted(true)
  }, [])

  return mounted ? (
    //@ts-ignore
    <RBSheet
      ref={ref}
      closeOnDragDown={true}
      closeOnPressMask={false}
      onClose={()=>{setVisible(false)}}
      customStyles={{
        wrapper: {
          backgroundColor: "#00000077"
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 322
        },
        draggableIcon: {
          backgroundColor: "#111111"
        }
      }}
    >
      <Container>
        <Box align='center'>
          <H3>Выбери режим</H3>
        </Box>
        <Box ph={12} mt={13}>
          <Box mt={14}>

            <TouchableOpacity>
              <Box align='center' justify='flex-start' direction='row'>
                <Box>
                  <IconButton
                    size={56}
                    theme='grey'
                  >
                    <Icon name='video' width={32} height={32}/>
                  </IconButton>
                </Box>
                <Box ml={16}>
                  <P1>Look</P1>
                </Box>
              </Box>
            </TouchableOpacity>
          </Box>
          <Box mt={14}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                ref.current.close();
                setTimeout(() =>{navigation.navigate('StoryPostScreen')}, 100)
              }}
            >
              <Box align='center' justify='flex-start' direction='row'>
                <Box>
                  <IconButton
                    size={56}
                    theme='grey'
                  >
                    <Icon name='story' width={30} height={30}/>
                  </IconButton>
                </Box>
                <Box ml={16}>
                  <P1>История</P1>
                </Box>
              </Box>
            </TouchableOpacity>
          </Box>
          <Box mt={14}>
            <TouchableOpacity>
              <Box align='center' justify='flex-start' direction='row'>
                <Box>
                  <IconButton
                    size={56}
                    theme='grey'
                  >
                    <Icon name='frame' width={30} height={30}/>
                  </IconButton>
                </Box>
                <Box ml={16}>
                  <P1>Публикация</P1>
                </Box>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
      </Container>
    </RBSheet>
  ) : (<View/>);
};

export default PopupMenu;