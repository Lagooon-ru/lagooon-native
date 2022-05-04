import React, {FC} from 'react';
import {StyleSheet, Text} from "react-native";
import {FONT_SIZE_28, HEADER_FONT_BOLD} from "utils/helper/style/typography";
import {px, rs} from "utils/helper/style/mixins";

interface Props {
  color?: string;
  textAlign?: string;
  style?: any;
  children: any | string;
}

const H1: FC<Props> = (props) => {
  const {color, style, children, textAlign} = props

  return (
    <Text style={{...styles.wrap, color, textAlign, ...style}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  wrap : {
    fontSize: px(24),
    fontFamily: HEADER_FONT_BOLD,
    lineHeight: px(28),
  }
})

export default H1;