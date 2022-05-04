import React, {useEffect, useState} from 'react';
import SafeArea from "components/shared/paper/SafeArea";
import Colors from "utils/helper/style/color";
import {LogoHeader} from "components/shared/header";
import {AvatarFlow} from "components/shared/avatars";
import {PaginationDto, TPagination, useFeedsMutation} from "api/graphql";
import Box from "components/shared/paper/Box";
import {Image, ScrollView} from "react-native";

import {P1, P3} from "components/shared/paragraph";
import Wrap from 'components/shared/paper/Wrap';
import {fullHeight, fullWidth, px} from "utils/helper/style/mixins";
import Touch from "components/shared/paper/Touch";
import Avatar from "components/shared/avatar";
import timeAgo from "utils/helper/date/ago";
import StoryItem from "components/screen/story/StoryItem";

const StoriesScreen = () => {
  const [feedsMutation] = useFeedsMutation();
  const [pagination, setPagination] = useState<TPagination>({
    page: 0,
    total: 10,
    limit: 10,
  });
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState<any[]>([]);

  const getFeedsHandler = (keyword = '', pagination: PaginationDto, append: boolean = false) =>
  {
    const opt = {
      variables: {
        search: {
          keyword: keyword,
          pagination: pagination,
        },
      },
    };
    setLoading(true);
    feedsMutation(opt)
      .then(({data}) => {
        append ? setFeeds([...feeds, ...data.feeds.data]) : setFeeds(data.feeds.data);
        setPagination(data.feeds.pagination)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      });
  }

  const pageScrollHandler = () =>
  {
    if (feeds.length < pagination.total) {
      return getFeedsHandler("", {
        page: pagination.page + 1,
        limit: pagination.limit
      }, true)
    }
  }

  const scrollHandler = ({nativeEvent}) =>
  {
    if(nativeEvent.contentSize.width <= nativeEvent.contentOffset.x  + nativeEvent.layoutMeasurement.width) {
      pageScrollHandler()
    }
  }

  useEffect(() =>
  {
    return getFeedsHandler("", {
      page: 0,
      limit: 10
    })
  }, []);

  return (
    <SafeArea bg={Colors.white}>
      <Wrap>
        <LogoHeader/>
        <AvatarFlow/>
        <Box
          flex={1}
          background={Colors.black}
        >
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            onScrollEndDrag={scrollHandler}
          >
            {
              feeds?.map((story) => {
                return (
                  <StoryItem
                    story={story}
                    key={`story_${story.id}`}
                  />
                )
              })
            }
          </ScrollView>
        </Box>
        {
          loading && (
            <Box
              align='center'
              p={px(3)}
              background={Colors.whiteOpacity}
            >
              <P1
                color={Colors.text}
              >
                Загрузка...
              </P1>
            </Box>
          )
        }
      </Wrap>
    </SafeArea>
  );
};

export default StoriesScreen;