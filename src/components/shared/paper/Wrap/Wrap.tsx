import React, {FC} from 'react';
import {ColorValue, StyleSheet, View} from "react-native";
import {fullHeight, hp} from "utils/helper/style/mixins";

interface Props {
  children: any;
  bg?: ColorValue | undefined;
}

const Wrap: FC<Props> = (props) => {
  const {children, bg} = props
  return (
    <View style={{...styles.wrap, backgroundColor: bg}}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#0f0f0f',
    height: fullHeight() - 52
  },

})

export default Wrap;