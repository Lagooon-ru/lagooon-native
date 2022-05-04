import React, {FC} from 'react';
import {ColorValue, StyleSheet, View} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  bg?: ColorValue | undefined;
  children: any;
  style?: any;
}

const SafeArea: FC<Props> = (props) => {
  const {bg, children, style} = props
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: bg }}>
      <View style={style}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }
})

export default SafeArea;