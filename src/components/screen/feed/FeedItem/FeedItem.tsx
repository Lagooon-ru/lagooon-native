import React, {FC, useState} from 'react';
import Box from "components/shared/paper/Box";
import {P3} from 'components/shared/paragraph';
import Colors from 'utils/helper/style/color';
import Avatar from "components/shared/avatar";
import {Image, StyleSheet} from "react-native";
import {fullWidth, px} from 'utils/helper/style/mixins';
import IconButton from "components/shared/input/iconButton";
import Icon from "components/icon";
import Touch from "components/shared/paper/Touch";
import timeAgo from "utils/helper/date/ago";
import {useStore} from "effector-react";
import {$auth} from 'models/auth/state';
import {useNavigation} from "@react-navigation/native";
import {useFeedLikeMutation} from "api/graphql";
import FeedCommentModal from "components/screen/feed/FeedCommentModal";

interface Props {
  feed: any;
}

const FeedItem: FC<Props> = (props) => {
  const [feedLikeMutation] = useFeedLikeMutation();
  const navigation: any = useNavigation()
  const {feed} = props;
  const auth: any = useStore($auth);

  const [isLike, setIsLike] = useState<boolean>(feed?.likes?.filter(f => f.id === auth.profile.id).length > 0)
  const [likes, setLikes] = useState<number>(feed?.likes?.length || 0)
  const [comment, setComment] = useState<boolean>(false)
  const [commentsNumber, setCommentsNumber] = useState<number>(feed.comments.length || 0);

  const showHandler = () => {
    navigation.navigate('FeedScreen', {
      feed: feed
    })
  }

  const handleLike = () => {
    const options = {
      variables: {
        feed: {
          id: feed.id,
          action: !isLike,
        },
      },
    };
    feedLikeMutation(options)
      .then(({data}) => {
        setIsLike(data.feedLike.status);
        data.feedLike.status ? setLikes(likes + 1) : setLikes(likes - 1);
      })
      .catch(err => console.log(err));
  };

  const linkUserHandler = () => {
    if (feed.author.id !== auth.profile.id) {
      navigation.navigate('UserScreen', {
        uid: feed.author.id
      })
    } else {
      navigation.navigate('Signed', {
        screen: 'ProfileTab'
      })
    }
  }

  return (
    <Box>
      <Box
        direction='row'
        ph={px(16)}
        pv={px(8)}
        align='center'
      >
        <Touch
          onPress={linkUserHandler}
          direction='row'
          align='center'
        >
          <Avatar
            url={feed.author.avatar?.path}
            size={22}
            bordered
          />
          <Box ml={7}>
            <P3
              color={Colors.text}
            >
              @{feed.author.username}
            </P3>
          </Box>
        </Touch>
        <Box>
          <P3
            color={Colors.text}
          >
            {timeAgo(feed.createdAt)}
          </P3>
        </Box>
      </Box>
      <Touch onPress={showHandler}>
        <Image
          source={{
            uri: feed.photos[0].path
          }}
          style={styles.image}
          width={fullWidth()}
          height={fullWidth()}
        />
      </Touch>
      <Box
        ph={px(16)}
        pt={px(4)}
        pb={px(22)}
      >
        <Box
          direction='row'
          justify='flex-start'
          align='center'
        >
          <Box
            direction='row'
            mr={px(12)}
            justify='flex-start'
            align='center'
          >
            <IconButton
              size={px(32)}
              onPress={handleLike}
            >
              <Icon
                active={isLike}
                name='like'
                width={px(32)}
                height={px(32)}
              />
            </IconButton>
            <P3
              color={
                isLike ?
                  Colors.orange :
                  Colors.text
              }
            >
              {likes}
            </P3>
          </Box>
          <Box
            direction='row'
            mr={px(12)}
            justify='flex-start'
            align='center'
          >
            <IconButton
              size={px(32)}
              onPress={() => {
                setComment(true)
              }}
            >
              <Icon
                name='comment'
                width={px(32)}
                height={px(32)}
              />
            </IconButton>
            <P3
              color={Colors.text}
            >
              {commentsNumber}
            </P3>
          </Box>
          <Box>
            <IconButton
              size={px(32)}
              onPress={() => {
                navigation.navigate('ChatScreen', {receiverId: feed.author.id})
              }}
            >
              <Icon
                name='send'
                width={px(30)}
                height={px((30))}
              />
            </IconButton>
          </Box>
        </Box>
        <Box pb={px(8)} justify='center'>
          <Touch onPress={() => {
          }}>
            {
              feed.caption.length > 0 ?
                <P3>
                  {
                    feed.caption.substring(0, 110)
                    .replace(/\n/g, " ")
                  }
                  {feed.caption.length > 50 && '...'}
                </P3> :
                <P3 color={Colors.grey}>
                  ~~~
                </P3>
            }
          </Touch>
        </Box>
        <Box
          direction='row'
          pb={px(12)}
          align='center'
        >
          <Touch onPress={() => {
            setComment(true)
          }} direction='row' align='center'>
            <Avatar size={px(22)} bordered/>
            <Box ml={px(7)}>
              <P3
                color={Colors.text}
              >
                Комментировать...
              </P3>
            </Box>
          </Touch>
        </Box>
      </Box>
      <FeedCommentModal
        setCommentsNumber={setCommentsNumber}
        feed={feed}
        visible={comment}
        setVisible={setComment}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: fullWidth(),
    resizeMode: 'cover'
  },
  commentModal: {
    height: 400,

  }
})

export default FeedItem;