import React, {FC, useEffect, useState} from 'react';
import {FlatList} from "react-native";
import Box from "components/shared/paper/Box";
import {PaginationDto, TPagination, useFeedsMutation} from "api/graphql";

import Nodata from "components/shared/noData";
import {P1} from "components/shared/paragraph";
import Colors from "utils/helper/style/color";
import FeedsGridItem from '../FeedsGridItem';
import {px, wp} from "utils/helper/style/mixins";
import {useStore} from "effector-react";
import {$search} from "models/search/state";
import {Loader} from "components/shared/loader";

const FeedsGrid: FC = () => {
  const [feedsMutation] = useFeedsMutation();
  const keyword = useStore($search).keyword
  const [pagination, setPagination] = useState<TPagination>({
    page: 0,
    total: 12,
    limit: 24,
  });
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState<any[]>([]);

  const getFeedsHandler = (keyword = '', pagination: PaginationDto, append: boolean = false) => {
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

  const pageScrollHandler = () => {
    if (feeds.length < pagination.total) {
      return getFeedsHandler(keyword, {
        page: pagination.page + 1,
        limit: pagination.limit
      }, true)
    }
  }

  useEffect(() => {
    return getFeedsHandler(keyword, {
      page: pagination.page,
      limit: pagination.limit
    })
  }, [keyword]);

  return (
    <Box flex={1}>
      <Box flex={1}>
        <FlatList
          data={feeds}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({index}) => {
            if (
              index === 0 ||
              index % 12 === 0 ||
              ((index + 4) % 12 === 0 && !((index + 4) % 5 === 0))
            ) {
              return (
                <>
                  <FeedsGridItem feed={feeds[index]} width={wp(66) + 2} />
                  <Box>
                    <FeedsGridItem feed={feeds[index + 1]} width={wp(33)}/>
                    <FeedsGridItem feed={feeds[index + 2]} width={wp(33)}/>
                  </Box>
                </>
              );
            }
            if (index % 6 === 0 && !((index + 1) % 4 === 1)) {
              // 6, 18
              return (
                <>
                  <Box>
                    <FeedsGridItem feed={feeds[index]} width={wp(33)}/>
                    <FeedsGridItem feed={feeds[index + 1]} width={wp(33)}/>
                  </Box>
                  <FeedsGridItem feed={feeds[index + 2]} width={wp(66) + 2} />
                </>
              );
            }
            return <FeedsGridItem feed={feeds[index]} width={wp(33)}/>;
          }}

          ListEmptyComponent={
            loading ?
              <Box height={500} align='center' justify='center'>
                <Loader/>
              </Box> :
              <Nodata/>
          }
          pagingEnabled={false}
          numColumns={3}
          onEndReached={pageScrollHandler}
        />
      </Box>
      {
        loading && (
          <Box
            align='center'
            p={px(3)}
          >
            <P1
              color={Colors.text}
            >
              Загрузка...
            </P1>
          </Box>
        )
      }
    </Box>
  );
};

export default FeedsGrid;