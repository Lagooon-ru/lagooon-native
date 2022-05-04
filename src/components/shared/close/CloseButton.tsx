import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Icon from "components/icon";
import {rs} from "utils/helper/style/mixins";

interface Props{
  light?: boolean;
}

const CloseButton: FC<Props> = (props) => {
  const {light} = props;
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={() =>{navigation.navigate("Signed", {screen: "PublishTab"})}}
    >
      <Icon active={light} name='close' width={32} height={32}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: rs(32),
    height: rs(32),
    justifyContent: "center"
    // position: "absolute",
    // left: rs(20),
    // top: rs(20),
    // zIndex: 10
  }
})

export default CloseButton;