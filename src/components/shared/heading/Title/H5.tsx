import React, {FC} from 'react';
import {StyleSheet, Text} from "react-native";
import {HEADER_FONT_BOLD} from "utils/helper/style/typography";
import {px} from "utils/helper/style/mixins";

interface Props {
  color?: string;
  style?: any;
  children: any | string;
}

const H5: FC<Props> = (props) => {
  const {color, style, children} = props

  return (
    <Text style={{...styles.wrap, color, ...style}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  wrap : {
    fontSize: px(16),
    fontWeight: "700",
    lineHeight: px(18),
    fontFamily: HEADER_FONT_BOLD,
    letterSpacing: 0.36
  }
})

export default H5;