import React, {FC, Fragment, useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {fullHeight, fullWidth, hp, px, wp} from "utils/helper/style/mixins";
import GridPlaceholder from "components/shared/placeholder/GridPlaceholder";
import Box from 'components/shared/paper/Box';
import {H5} from "components/shared/heading/Title";
import Nodata from "components/shared/noData";
import FeedsGridItem from "components/screen/feed/FeedsGridItem";
import Touch from "components/shared/paper/Touch";
import {useNavigation} from "@react-navigation/native";

interface Props {
  loading?: boolean;
  data: any[];
  mode: 0 | 1;
}

const ProfileGridContent: FC<Props> = (props) => {
  const {data, mode} = props
  const navigation: any = useNavigation()

  const [loading, setLoading] = useState(false)

  return (
    <Box>
      {
        loading ? (
          <Box>
            <GridPlaceholder/>
            <GridPlaceholder/>
            <GridPlaceholder/>
            <GridPlaceholder/>
          </Box>
        ) : (
          data.length > 0 ? (
            mode === 0 ? (
              <FlatList
                data={data}
                renderItem={({item}) => <FeedsGridItem feed={item} width={wp(33)}/>}
                keyExtractor={item => `story_${item.id}`}
                ListEmptyComponent={<Nodata/>}
                numColumns={3}
              />
            ) : (
              <ScrollView
                horizontal={true}
                pagingEnabled={true}
              >
                {
                  data.map((item) =>
                    (
                      <Touch
                        onPress={() => {
                          navigation.navigate('FeedScreen', {feed: item})
                        }}
                        key={`story_gallery_${item.id}`}
                      >
                        <Image
                          source={{uri: item.photos[0].path}}
                          width={wp(100)}
                          height={wp(100)}
                          style={{
                            width: fullWidth(),
                            height: fullHeight() - px(330)
                          }}
                        />
                      </Touch>
                    ))
                }
              </ScrollView>
            )
          ) : (
            <Nodata/>
          )
        )
      }
    </Box>
  );
};

export default ProfileGridContent;