import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useStore} from "effector-react";

import Box from 'components/shared/paper/Box';
import {P1} from "components/shared/paragraph";
import Nodata from "components/shared/noData";
import {Loader} from "components/shared/loader";
import UsersListItem from "components/screen/user/UsersListItem";

import {$search} from "models/search/state";
import {px} from "utils/helper/style/mixins";
import Colors from "utils/helper/style/color";

import {
  PaginationDto,
  TPagination,
  useUsersMutation
} from "api/graphql";

const UsersList = () => {
  const keyword = useStore($search).keyword
  const [usersMutation] = useUsersMutation();
  const [pagination, setPagination] =
    useState<TPagination>({
      page: 0,
      total: 12,
      limit: 30,
    });
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);

  const getUsersHandler =
    (
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
      usersMutation(opt)
        .then(({data}) => {
          append ?
            setUsers([...users, ...data.users.data]) :
            setUsers(data.users.data);
          setPagination(data.users.pagination)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false)
        });
    }

  const pageScrollHandler = () => {
    if (users.length < pagination.total) {
      return getUsersHandler("", {
        page: pagination.page + 1,
        limit: pagination.limit
      }, true)
    }
  }

  useEffect(() => {
    return getUsersHandler(keyword, {
      page: pagination.page,
      limit: pagination.limit
    })
  }, [keyword]);

  return (
    <Box flex={1}>
      <Box flex={1}>
        <FlatList
          data={users}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={
            ({item}) =>
              <UsersListItem
                user={item}
              />
          }
          ListEmptyComponent={
            loading ? (
              <Box
                height={500}
                align='center'
                justify='center'
              >
                <Loader/>
              </Box>
            ): (
              <Nodata/>
            )

          }
          pagingEnabled={false}
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

export default UsersList;