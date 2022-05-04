import React, {FC} from 'react';
import {StyleSheet, Text} from "react-native";
import { px } from 'utils/helper/style/mixins';
import {HEADER_FONT_BOLD} from "utils/helper/style/typography";

interface Props {
  color?: string;
  style?: any;
  children: any | string;
}

const H3: FC<Props> = (props) => {
  const {color, style, children} = props

  return (
    <Text style={{...styles.wrap, color, ...style}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  wrap : {
    fontSize: px(20),
    fontWeight: "700",
    lineHeight: px(24),
    fontFamily: HEADER_FONT_BOLD,
    letterSpacing: 0.36
  }
})

export default H3;