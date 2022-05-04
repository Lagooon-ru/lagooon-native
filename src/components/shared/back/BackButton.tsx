import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Icon from "components/icon";
import {rs} from "utils/helper/style/mixins";

interface Props{
  light?: boolean;
  top?: number;
  left?: number;
}

const BackButton: FC<Props> = (props) => {
  const {light, top, left} = props;
  const navigation: any = useNavigation();

  const styles = StyleSheet.create({
    wrap: {
      width: rs(50),
      height: rs(50),
      position: "absolute",
      left: left || rs(20),
      top: top || rs(10),
      zIndex: 1
    }
  })

  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={navigation.goBack}
    >
      <Icon
        active={light}
        name='chevron-left'
        width={32}
        height={32}
      />
    </TouchableOpacity>
  );
};

export default BackButton;