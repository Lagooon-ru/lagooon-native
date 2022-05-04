import React, {FC} from 'react';
import {StyleSheet, Text} from "react-native";
import {
  FONT_SIZE_14,
  FONT_SIZE_17,
  FONT_SIZE_28,
  HEADER_FONT_BOLD,
  TEXT_FONT_REGULAR
} from "utils/helper/style/typography";
import {px} from "utils/helper/style/mixins";

interface Props {
  color?: string;
  textAlign?: string;
  style?: any;
  children: any | string;
}

const P2: FC<Props> = (props) => {
  const {color, style, children, textAlign} = props

  return (
    <Text style={{...styles.wrap, color, textAlign, ...style}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  wrap : {
    fontSize: px(14),
    fontFamily: TEXT_FONT_REGULAR,
    lineHeight: px(18),
  }
})

export default P2;