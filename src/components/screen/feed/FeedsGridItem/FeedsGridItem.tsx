import React, {FC} from 'react';
import Box from "components/shared/paper/Box";
import {Image, StyleSheet} from "react-native";
import {px, rs} from 'utils/helper/style/mixins';
import Touch from "components/shared/paper/Touch";
import {useNavigation} from "@react-navigation/native";

interface Props {
  feed: any;
  width: number;
}

const FeedsGridItem: FC<Props> = (props) => {
  const navigation: any = useNavigation()
  const {feed, width} = props;

  const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: width,
      height: width,
      resizeMode: 'cover'
    }
  })

  const showHandler = () => {
    navigation.navigate('FeedScreen', {feed: feed})
  }

  return (
    <Box m={px(1)}>
      {
        feed?.photos && (
          <Touch onPress={showHandler}>
            <Image
              source={{
                uri: feed.photos[0].path
              }}
              style={styles.image}
            />
          </Touch>
        )
      }
    </Box>
  );
};



export default FeedsGridItem;