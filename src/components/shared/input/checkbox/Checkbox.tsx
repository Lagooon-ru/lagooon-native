import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {px, rs, wp} from "utils/helper/style/mixins";
import {TEXT_FONT_REGULAR} from "utils/helper/style/typography";
import Colors from "utils/helper/style/color";
import Icon from "components/icon";

interface Props {
  label?: any | string;
  check?: boolean;
  setCheck?: (value: boolean) => void;
}

const Checkbox: FC<Props> = (props) => {
  const {label, check, setCheck} = props;
  const [checked, setChecked] = useState<boolean>(check);

  const styles = StyleSheet.create({
    wrap: {
      flexDirection: 'row',
      width: wp(100) - px(32),
    },
    check: {
      width: px(20),
      height: px(20),
      borderColor: checked ? Colors.orange: '#D1D3D9',
      borderWidth: px(1),
      borderRadius: px(4),
      marginTop: px(7),
      marginRight: px(14),
      alignItems: 'center',
      justifyContent: 'center'
    },
    label: {
      width: wp(100) - px(68),
      fontFamily: TEXT_FONT_REGULAR,
      fontSize: px(14)
    }
  })

  const checkHandler = () => {
    setChecked(!checked);
  }

  useEffect(() => {
    setCheck(checked)
  }, [checked])

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        style={styles.check}
        activeOpacity={0.5}
        onPress={checkHandler}
      >
        {checked && <Icon name='check' width={15} height={15}/>}
      </TouchableOpacity>
      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
};

export default Checkbox;