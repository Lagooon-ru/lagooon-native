import React, {FC} from 'react';
import {StyleSheet, View} from "react-native";
import {wp} from "utils/helper/style/mixins";

const GridPlaceholder: FC = () => {

  return (
    <View style={styles.wrap}>
      <View style={styles.item}/>
      <View style={styles.item}/>
      <View style={styles.item}/>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: wp(100),
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between'
  },
  item: {
    width: wp(33.33) - 3,
    height: wp(33.33) - 3,
    backgroundColor: '#F5F5F5'
  }
})

export default GridPlaceholder;