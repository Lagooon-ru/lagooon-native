import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {px} from 'utils/helper/style/mixins';
import ButtonThemes from "utils/helper/style/button";

interface Props {
  children: any;
  disabled?: boolean;
  title?: string;
  text?: string;
  theme?: string;
  style?: any;
  size?: number;
  onPress?: () => void;
}

const IconButton: FC<Props> = (props) => {
  const {
    children,
    disabled,
    theme,
    style,
    size,
    onPress
  } = props

  const styles = StyleSheet.create({
    wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: size || px(14),
      height: size || px(50),
      width: size || px(50),
      backgroundColor: ButtonThemes[theme || 'reverseOrange'].backgroundColor,
      flexDirection: 'row',
      ...style
    },
  })

  return (
    <TouchableOpacity
      style={styles.wrap}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;