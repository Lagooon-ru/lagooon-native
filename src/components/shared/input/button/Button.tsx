import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import {px, wp} from 'utils/helper/style/mixins';
import {HEADER_FONT_BOLD} from "utils/helper/style/typography";
import ButtonThemes from "utils/helper/style/button";
import {Loader} from "components/shared/loader";
import Box from "components/shared/paper/Box";
import Icon from "components/icon";

interface Props {
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  text?: string;
  theme?: string;
  style?: any;
  size?: 'lg' | 'md' | 'sm';
  onPress?: () => void;
  suffixIcon?: any;
  prefixIcon?: any;
}

const Button: FC<Props> = (props) => {
  const {
    loading,
    block,
    disabled,
    text,
    theme = 'orange',
    style,
    size = 'lg',
    onPress,
    prefixIcon,
    suffixIcon,
  } = props

  const buttonTheme = disabled ? 'disabled' : loading ? 'white' : theme

  const styles = StyleSheet.create({
    wrap: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: px(24),
      borderRadius: {
        'lg': px(14),
        'md': px(10),
        'sm': px(10),
        default: px(14),
      }[size],
      height: {
        'lg': px(60),
        'md': px(48),
        'sm': px(40),
        default: px(60),
      }[size],
      backgroundColor: ButtonThemes[buttonTheme].backgroundColor,
      flexDirection: 'row',
      width: block ? wp(100) - px(32) : undefined,
      ...style
    },

    text: {
      fontFamily: HEADER_FONT_BOLD,
      fontSize: {
        'lg': px(20),
        'md': px(17),
        'sm': px(15),
        default: px(20),
      }[size],
      color: ButtonThemes[buttonTheme].color
    },
  })

  return (
    <TouchableOpacity
      style={styles.wrap}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {
        prefixIcon && (
          <Icon name={prefixIcon} width={24} height={24}/>
        )
      }
      <Text style={styles.text}>{text}</Text>
      {
        suffixIcon && (
          <Icon name={suffixIcon} width={24} height={24}/>
        )
      }
      {
        loading && (
          <Box ml={px(12)}>
            <Loader size={px(18)}/>
          </Box>
        )
      }
    </TouchableOpacity>
  );
};

export default Button;