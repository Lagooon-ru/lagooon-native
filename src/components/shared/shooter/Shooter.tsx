import React, {FC} from 'react';
import {TouchableOpacity, StyleSheet, View} from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import Colors from 'utils/helper/style/color';

interface Props {
  value: number;
  onPress: () => void;
  disabled?: boolean;
}

const Shooter: FC<Props> = (props) => {
  const {value, onPress, disabled} = props

  const styles = StyleSheet.create({
    wrap: {
      height: 60,
      width: 60,
      borderRadius: 44,
      borderColor: value > 0 ? Colors.transparent : Colors.white,
      borderWidth: 5,
      justifyContent: 'center',
      alignItems: 'center',
      position: "absolute"
    },
    center: {
      height: 44,
      width: 44,
      borderRadius: 44,
      backgroundColor: Colors.whiteOpacity
    }
  })

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.wrap}>
        <View style={styles.center}/>
      </View>
      <CircularProgress
        value={value}
        showProgressValue={false}
        activeStrokeWidth={6}
        activeStrokeColor={Colors.orange}
        inActiveStrokeColor={Colors.transparent}
        inActiveStrokeWidth={5}
        radius={30}
      />
    </TouchableOpacity>
  );
};


export default Shooter;