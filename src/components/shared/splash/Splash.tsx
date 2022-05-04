import React, {FC} from 'react';
import {StyleSheet, Image, View} from "react-native";
import SplashImage from '/assets/images/splash.png'

const Splash: FC = () => {
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default Splash;