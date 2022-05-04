import React, {FC} from 'react';
import {ColorValue, StyleSheet, View} from "react-native";
import {fullHeight, px} from "utils/helper/style/mixins";

interface Props {
  children: any;
  bg?: ColorValue | undefined;
  height?: number | string | undefined
}

const Container: FC<Props> = (props) => {
  const {children, bg, height} = props
  return (
    <View style={{...styles.wrap, backgroundColor: bg, height: height}}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {paddingHorizontal: px(16)}
})

export default Container;