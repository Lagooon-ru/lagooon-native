import React, {FC} from 'react';
import {StyleSheet, Text} from "react-native";
import { px } from 'utils/helper/style/mixins';
import {
  FONT_SIZE_10, FONT_SIZE_12,
  FONT_SIZE_13,
  TEXT_FONT_REGULAR
} from "utils/helper/style/typography";

interface Props {
  color?: string;
  textAlign?: string;
  style?: any;
  children: any | string;
}

const P4: FC<Props> = (props) => {
  const {color, style, children, textAlign} = props

  return (
    <Text style={{...styles.wrap, color, textAlign, ...style}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  wrap: {
    fontSize: px(12),
    fontFamily: TEXT_FONT_REGULAR,
    lineHeight: px(13),
  }
})

export default P4;