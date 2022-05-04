import React, {FC} from 'react';
import Box from "components/shared/paper/Box";
import {fullHeight, fullWidth, px} from "utils/helper/style/mixins";
import Touch from "components/shared/paper/Touch";
import Avatar from "components/shared/avatar";
import {P3} from "components/shared/paragraph";
import Colors from "utils/helper/style/color";
import timeAgo from "utils/helper/date/ago";
import {Image} from "react-native";

interface Props {
  story: any;
}

const StoryItem: FC<Props> = ({story}) => {
  return (
    <Box key={story.id} flex={1}>
      <Box
        direction='row'
        ph={px(16)}
        pv={px(16)}
        align='center'
        width={fullWidth()}
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 1
        }}
      >
        <Touch
          onPress={() => {
          }}
          direction='row'
          align='center'
        >
          <Avatar
            url={story.author.avatar?.path}
            size={22}
            bordered
          />
          <Box ml={7}>
            <P3
              color={Colors.white}
            >
              @{story.author.username}
            </P3>
          </Box>
        </Touch>
        <Box>
          <P3
            color={Colors.white}
          >
            {timeAgo(story.createdAt)}
          </P3>
        </Box>
      </Box>
      <Image
        source={{uri: story.photos[0].path}}
        width={fullWidth()}
        height={fullHeight()}
        style={{
          width: fullWidth(),
          height: fullHeight()
        }}
      />
    </Box>
  );
};

export default StoryItem;