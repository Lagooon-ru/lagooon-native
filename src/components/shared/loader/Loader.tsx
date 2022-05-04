import React, {FC, useEffect, useState} from 'react';
import {View, Animated, Easing} from "react-native";
import Icon from "components/icon";

interface Props {
  size?: number
}

const Loader: FC<Props> = (props) => {
  const {size} = props;
  const [spinAnim] = useState(new Animated.Value(0));
  const interpolateRotation = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [ '360deg', '0deg']
  });

  const animatedStyle = {
    transform: [
      { rotateY: '-180deg'},
      { rotate: interpolateRotation },
      { rotateY: '180deg'},
    ],
    width: size || 25,
    height: size || 25,
  }

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  });

  return (
    <Animated.View style={animatedStyle}>
      <Icon name='loading' width={size || 25} height={size || 25}/>
    </Animated.View>
  );
};

export default Loader;