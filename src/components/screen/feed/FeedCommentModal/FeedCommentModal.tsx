import React, {FC, useEffect, useRef, useState} from 'react';
import RBSheet from "react-native-raw-bottom-sheet";
import Box from "components/shared/paper/Box";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import IconButton from "components/shared/input/iconButton";
import Icon from "components/icon";
import {P1, P3} from "components/shared/paragraph";
import Input from 'components/shared/input/Input';
import {fullWidth, px} from "utils/helper/style/mixins";
import {useFeedAddCommentMutation, useFeedGetCommentsMutation} from 'api/graphql';
import {useStore} from "effector-react";
import {$auth} from "models/auth/state";
import Avatar from "components/shared/avatar";
import timeAgo from "utils/helper/date/ago";

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  setCommentsNumber: (value: number) => void;
  feed: any;
}

const FeedCommentModal: FC<Props> = (props) => {
  const {visible, setVisible, feed, setCommentsNumber} = props
  const ref: any = useRef();
  const auth = useStore($auth);
  const [feedGetCommentsMutation] = useFeedGetCommentsMutation();
  const [feedAddCommentMutation] = useFeedAddCommentMutation();
  const [comments, setComments] = useState([])
  const [txt, setTxt] = useState("");
  const [mounted, setMounted] = useState(false);

  const sendCommentHandler = () => {
    if (!!txt) {
      const options = {
        variables: {
          feed: {
            feedId: feed.id,
            content: txt,
          },
        },
      };
      feedAddCommentMutation(options)
        .then(({data}) => {
          setComments([
            {
              feed: data,
              author: auth.profile,
              comment: txt,
              createdAt: data.feedAddComment.createdAt,
            },
            ...comments,
          ]);
          setTxt('');
        })
        .catch(err => console.log(err));
    }
  }

  useEffect(() => {
    if (visible) {
      ref.current.open()
    }
  }, [visible])

  useEffect(() => {
    if (!!feed.id) {
      const options = {
        variables: {
          feed: {
            feedId: feed.id,
          },
        },
      };

      feedGetCommentsMutation(options)
        .then(({data}) => {
          setComments(data.feedGetComments);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [feed]);

  useEffect(() => {
    setCommentsNumber(comments.length)
  }, [comments])

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? (
    //@ts-ignore
    <RBSheet
      ref={ref}
      closeOnDragDown={true}
      closeOnPressMask={false}
      onClose={() => {
        setVisible(false)
      }}
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
      <Box flex={1}>
        <Box align='center' flex={1}>
          <ScrollView>
            <TouchableOpacity>
              {
                comments.map((item) => <CommentItem item={item} key={`comment_${item.id}`}/>)
              }
            </TouchableOpacity>
          </ScrollView>
        </Box>
        <Box ph={px(16)} pv={px(5)}>
          <Input
            placeholder='Добавьте комментарий'
            value={txt}
            onChangeText={setTxt}
            suffix={
              <IconButton onPress={sendCommentHandler} size={px(28)}>
                <Icon name='send' width={px(28)} height={px(28)}/>
              </IconButton>
            }
          />
        </Box>
      </Box>
    </RBSheet>
  ) : (<View/>);
};

const CommentItem = ({item}) => {
  return (
    <Box
      width={fullWidth() - px(32)}
      direction='row'
      justify='flex-start'
      align='center'
      mb={12}
      key={item.id}
    >
      <Box mr={px(12)}>
        <Avatar
          size={px(50)}
          url={item.author.avatar?.path}
        />
      </Box>
      <Box>
        <P3>
          @{item.author.username}
          <Text style={{color: '#9797BD'}}>
            • {timeAgo(item.createdAt)}
          </Text>
        </P3>
        <P1>
          {item.comment}
        </P1>
      </Box>
    </Box>
  )
}

export default FeedCommentModal;