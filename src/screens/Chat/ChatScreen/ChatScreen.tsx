import React, {FC, useEffect, useState} from 'react';
import SafeArea from "components/shared/paper/SafeArea";
import Box from 'components/shared/paper/Box';
import {useStore} from "effector-react";
import {$auth} from "models/auth/state";
import {fullHeight, fullWidth, px} from "utils/helper/style/mixins";
import { P1, P3 } from 'components/shared/paragraph';
import Colors from "utils/helper/style/color";
import {FlatList, StyleSheet, TextInput, View} from "react-native";
import IconButton from "components/shared/input/iconButton";
import Icon from "components/icon";
import color from "utils/helper/style/color";
import Avatar from "components/shared/avatar";
import { H5 } from 'components/shared/heading/Title';
import { socket } from 'api/socket';
import {useGetChatMutation} from "api/graphql";
import {useNavigation} from "@react-navigation/native";
import timeAgo from "utils/helper/date/ago";

interface Props {
  route?: any;
}

socket.on('connected', (msg) => {
  console.log('Connected')
})

const ChatScreen: FC<Props> = (props) => {
  const {route} = props;
  const navigation: any = useNavigation()
  const auth: any = useStore($auth)
  const [getChat] = useGetChatMutation()
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [chat, setChat] = useState<any>(null);
  const [receiver, setReceiver] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const [isMine, setIsMine] = useState(false)

  useEffect(() => {
    socket.on('message', (msg) => {
      if(msg.chat.id === chat?.id) {
        console.log(msg.message)
        setMessages([msg, ...messages])
      }
    })
  }, [])

  useEffect(() => {
    if(!!route?.params?.receiverId) {
      if (route.params.receiverId === auth.profile.id ) navigation.goBack()
      const options = {
        variables: {
          arg: {
            receiverId: route.params.receiverId
          }
        }
      }
      setLoading(true)
      getChat(options)
        .then(({data}) =>
        {
          if(!!data.getChat.messages) {
            setMessages(data.getChat.messages)
          }
          setChat(data.getChat)
          setReceiver(data.getChat.members.filter((i) => i.id !== auth.profile.id)[0])
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() =>
        {
          setLoading(false)
        })
    }
  }, [route])


  const sendHandler = () => {
    !!message && socket.emit('message', {
      chat: chat.id,
      sender: {id: auth.profile.id},
      message: message,
      createdAt: new Date()
    });
    // setMessages([{isMine: isMine, message: message}, ...messages])
    setMessage("")
    setIsMine(!isMine)
  }

  return (
    <SafeArea bg={Colors.white}>
      <Box>
        <Box
          height={px(80)}
          ph={px(16)}
          direction='row'
          align='center'
        >
          <Box
            justify='flex-start'
            align='center'
            direction='row'
          >
            <Avatar
              active
              bordered
              size={px(60)}
              url={receiver?.avatar?.path}
            />
            <Box ml={px(8)} justify='center'>
              <P3 color={Colors.text}>@{receiver.username}</P3>
              <H5>{receiver.name}</H5>
            </Box>
          </Box>
          <Box>
            <IconButton
              size={px(24)}
            >
              <Icon
                name='check'
                width={px(24)}
                height={px(24)}
              />
            </IconButton>
          </Box>
        </Box>
        <Box
          height={fullHeight() - px(160)}
          align='flex-start'
          justify='flex-start'
        >
          <FlatList
            data={messages}
            renderItem={({item}) => <MessageItem message={item}/>}
            keyExtractor={(item, index) => `chat_item_${index}`}
            inverted={true}
            showsVerticalScrollIndicator={false}
          />
        </Box>
        <Box
          direction='row'
          height={px(80)}
          align='center'
          justify='center'
        >
          <Box
            mb={px(12)}
            width={fullWidth() - px(68)}
            mr={px(5)}
          >

            <TextInput
              onChangeText={setMessage}
              value={message}
              style={styles.input}
            />
          </Box>

          <Box
            mt={px(-12)}
          >
            <IconButton
              size={px(42)}
              onPress={sendHandler}
            >
              <Icon
                name='send'
                width={px(42)}
                height={px(42)}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </SafeArea>
  );
};

interface ItemProps {
  message: any;
  send?: boolean;
}

const MessageItem: FC<ItemProps> = ({message}) => {
  const auth: any = useStore($auth)
  const isMine = message.sender.id === auth.profile.id;
  return (
    <Box
      align={isMine ? 'flex-end': 'flex-start'}
      width={fullWidth()}
      ph={px(5)}
    >
      <Box ph={px(12)}>
        <P3
          color={Colors.text}
        >
          {timeAgo(message.createdAt)}
        </P3>
      </Box>
      <View
        style={isMine ? styles.myMessage : styles.otherMessage}
      >
        <P1 color={isMine ? Colors.white : Colors.black}>{message.message}</P1>
      </View>
    </Box>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.text,
    borderWidth: px(1),
    width: '100%',
    height: px(48),
    borderRadius: px(30),
    paddingHorizontal: px(24)
  },
  myMessage: {
    backgroundColor: color.orange,
    paddingHorizontal: px(20),
    paddingVertical: px(16),
    borderTopLeftRadius: px(16),
    borderTopRightRadius: px(16),
    borderBottomLeftRadius: px(16),
    marginBottom: px(4)
  },
  otherMessage: {
    backgroundColor: color.grey,
    paddingHorizontal: px(20),
    paddingVertical: px(16),
    borderTopLeftRadius: px(16),
    borderTopRightRadius: px(16),
    borderBottomRightRadius: px(16),
    marginBottom: px(4)
  }
})

export default ChatScreen;