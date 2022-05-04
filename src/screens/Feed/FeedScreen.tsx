import React, {FC, Fragment, useEffect, useState} from 'react';
import SafeArea from "components/shared/paper/SafeArea";
import Wrap from "components/shared/paper/Wrap";
import Box from "components/shared/paper/Box";
import Touch from "components/shared/paper/Touch";
import Avatar from "components/shared/avatar";
import {P3} from "components/shared/paragraph";
import Colors from "utils/helper/style/color";
import timeAgo from "utils/helper/date/ago";
import {Image, ScrollView, StyleSheet} from "react-native";
import {fullWidth} from "utils/helper/style/mixins";
import IconButton from "components/shared/input/iconButton";
import Icon from "components/icon";
import {useStore} from "effector-react/effector-react.cjs";
import {$auth} from "models/auth/state";
import {FeedEntity, useFeedLikeMutation} from "api/graphql";
import {PageLoader} from "components/shared/loader";
import LogoHeader from "../../components/shared/header/LogoHeader";
import BackButton from "components/shared/back";
import {useNavigation} from "@react-navigation/native";
import FeedCommentModal from "components/screen/feed/FeedCommentModal";

interface Props {
  route?: any
}

const FeedScreen: FC<Props> = (props) => {
  const [feedLikeMutation] = useFeedLikeMutation();
  const navigation: any = useNavigation();
  const {route} = props

  const [isLike, setIsLike] = useState<boolean>(false)
  const [likes, setLikes] = useState<number>(0)
  const [feed, setFeed] = useState<FeedEntity>(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState<boolean>(false)
  const [commentsNumber, setCommentsNumber] = useState<number>(0);

  useEffect(() => {
    if (route.params?.feed?.id) {
      setFeed(route.params.feed)
      setLoading(false)
      setIsLike(feed?.likes?.filter(f => f.id === auth.profile.id).length > 0)
      setLikes(feed?.likes?.length || 0)
      setCommentsNumber(feed?.comments?.length || 0)
    }
  }, [route.params])

  const auth: any = useStore($auth);

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
    <SafeArea bg={Colors.white}>
      <Wrap>
        <LogoHeader/>
        <BackButton light/>
        <ScrollView>
          {
            loading ? (
              <PageLoader/>
            ) : (
              <Fragment>
                <Box direction='row' ph={16} pv={8} align='center'>
                  <Touch onPress={linkUserHandler} direction='row' align='center'>
                    <Avatar url={feed.author.avatar?.path} size={22} bordered/>
                    <Box ml={7}>
                      <P3 color={Colors.text}>@{feed.author.username}</P3>
                    </Box>
                  </Touch>
                  <Box>
                    <P3 color={Colors.text}>{timeAgo(feed.createdAt)}</P3>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Image
                    source={{
                      uri: feed.photos[0].path
                    }}
                    style={styles.image}
                    width={fullWidth()}
                    height={fullWidth()}
                  />
                </Box>
                <Box ph={16} pt={4} pb={22}>
                  <Box direction='row' justify='flex-start' align='center'>
                    <Box direction='row' mr={12} justify='flex-start' align='center'>
                      <IconButton
                        size={32}
                        onPress={handleLike}
                      >
                        <Icon active={isLike} name='like' width={32} height={32}/>
                      </IconButton>
                      <P3 color={isLike ? Colors.orange : Colors.text}>
                        {likes}
                      </P3>
                    </Box>
                    <Box direction='row' mr={12} justify='flex-start' align='center'>
                      <IconButton
                        size={32}
                        onPress={() => {
                          setComment(true)
                        }}
                      >
                        <Icon name='comment' width={32} height={32}/>
                      </IconButton>
                      <P3 color={Colors.text}>
                        {commentsNumber}
                      </P3>
                    </Box>
                    <Box>
                      <IconButton
                        size={32}
                        onPress={
                          () => {
                            navigation.navigate('ChatScreen', {receiverId: feed.author.id})
                          }
                        }
                      >
                        <Icon name='send' width={30} height={30}/>
                      </IconButton>
                    </Box>
                  </Box>
                  <Box pb={8} justify='center'>
                    <Box>
                      {
                        feed.caption.length > 0 ?
                          <P3>
                            {feed.caption}
                          </P3> :
                          <P3 color={Colors.grey}>
                            ~~~
                          </P3>
                      }
                    </Box>
                  </Box>
                  <Box direction='row' pb={12} align='center'>
                    <Touch
                      onPress={() => {
                        setComment(true)
                      }}
                      direction='row'
                      align='center'
                    >
                      <Avatar size={22} bordered/>
                      <Box ml={7}>
                        <P3 color={Colors.text}>Комментировать...</P3>
                      </Box>
                    </Touch>
                  </Box>
                </Box>
              </Fragment>
            )
          }
        </ScrollView>
      </Wrap>
      {
        !!feed && (
          <FeedCommentModal
            setCommentsNumber={setCommentsNumber}
            feed={feed}
            visible={comment}
            setVisible={setComment}
          />
        )
      }
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: fullWidth(),
    resizeMode: 'cover'
  }
})

export default FeedScreen;