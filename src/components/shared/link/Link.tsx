import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Colors from 'utils/helper/style/color';

interface Props {
  children?: any | string;
  onPress?: () => void;
}

const Link: FC<Props> = (props) => {
  const {children, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.wrap}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {

  },
  text: {
    color: Colors.blue,
    textDecorationLine: 'underline'
  }
})

export default Link;