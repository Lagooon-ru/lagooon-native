import React, {FC, useEffect, useState} from 'react';
import {FlatList} from "react-native";
import SafeArea from "components/shared/paper/SafeArea";
import Wrap from "components/shared/paper/Wrap";
import LogoHeader from "components/shared/header/LogoHeader";
import {AvatarFlow} from 'components/shared/avatars';
import Box from "components/shared/paper/Box";
import {P1} from 'components/shared/paragraph';
import FeedItem from 'components/screen/feed/FeedItem';
import Nodata from "components/shared/noData";
import {Loader} from "components/shared/loader";
import Colors from "utils/helper/style/color";
import {
  PaginationDto,
  TPagination,
  useFeedsMutation
} from "api/graphql";
import {px} from "utils/helper/style/mixins";

const FeedsScreen: FC = () => {
  const [feedsMutation] = useFeedsMutation();
  const [pagination, setPagination] = useState<TPagination>({
    page: 0,
    total: 10,
    limit: 10,
  });
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState<any[]>([]);


  const getFeedsHandler = (
    keyword = '',
    pagination: PaginationDto,
    append: boolean = false
  ) => {
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
        append ?
          setFeeds([...feeds, ...data.feeds.data]) :
          setFeeds(data.feeds.data);
        setPagination(data.feeds.pagination)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      });
  }

  const pageScrollHandler = () => {
    if (feeds.length < pagination.total) {
      return getFeedsHandler("", {
        page: pagination.page + 1,
        limit: pagination.limit
      }, true)
    }
  }

  useEffect(() => {
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
        <Box flex={1}>
          <FlatList
            data={feeds}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <FeedItem feed={item}/>}
            legacyImplementation={false}
            ListEmptyComponent={
              loading ?
                <Box
                  height={500}
                  align='center'
                  justify='center'
                >
                  <Loader/>
                </Box> :
                <Nodata/>
            }
            pagingEnabled={false}
            onEndReached={pageScrollHandler}
          />
        </Box>
        {
          loading && (
            <Box align='center' p={px(3)}>
              <P1 color={Colors.text}>
                Загрузка...
              </P1>
            </Box>
          )
        }
      </Wrap>
    </SafeArea>
  );
};

export default FeedsScreen;