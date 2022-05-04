import React, {FC, useState} from 'react';
import {StyleSheet, View, TextInput, KeyboardTypeOptions, Text, Keyboard} from "react-native";
import {px, wp} from "utils/helper/style/mixins";
import {TEXT_FONT_REGULAR} from "utils/helper/style/typography";
import Colors from "utils/helper/style/color";
import Box from "components/shared/paper/Box";

interface Props {
  prefix?: any;
  suffix?: any;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  label?: string;
  onChangeText?: (value: any) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  textContentType?: any;
  value?: string | undefined;
  multiline?: boolean;
  numberOfLines?: number;
  customStyle?: any;
  style?: any;
  inputStyle?: object;
  onKeyboardAppear?: () => void;
  onKeyboardDisappear?: () => void;
}

const Search: FC<Props> = (props) => {
  const {
    prefix,
    suffix,
    autoCapitalize,
    autoCorrect,
    keyboardType,
    label,
    onChangeText,
    placeholder,
    secureTextEntry,
    textContentType,
    value,
    multiline,
    numberOfLines,
    customStyle,
    inputStyle,
    onKeyboardAppear,
    onKeyboardDisappear,
  } = props

  const initStyles = {
    container :{
    },

    labelWrap: {
      paddingHorizontal: px(10)
    },

    label: {
      color: '#000000',
      lineHeight: px(22),
      fontFamily: TEXT_FONT_REGULAR,
      fontSize: px(16),
    },

    input: {
      backgroundColor: Colors.white,
      height: multiline ? numberOfLines * px(60): px(60),
      paddingHorizontal: px(16),
      paddingVertical: px(16),
      fontSize: px(18),
      lineHeight: px(26),
      fontFamily: TEXT_FONT_REGULAR,
      borderRadius: px(13),
      width: '100%',
      flex: 1,
      textAlignVertical: 'top'
    },

    inputWrap: {
      borderRadius: px(13),
      flexDirection: 'row',
      marginTop: px(14),
      borderWidth: px(1),
      borderColor: '#D1D3D9',
      justifyContent: 'center',
      alignItems: 'center',
      width: wp(100) - px(32),
    },
  }
  const [styleSheet, setStyleSheet] = useState<any>(initStyles);
  const styles: any = StyleSheet.create(styleSheet)

  const focusEffect = () => {
    onKeyboardAppear && onKeyboardAppear();
    setStyleSheet({
      ...styleSheet,
      inputWrap: {
        ...styleSheet.inputWrap,
        borderColor: '#95979D',
      }
    })
  }

  const blurEffect = () => {
    onKeyboardDisappear  && onKeyboardDisappear();
    setStyleSheet(initStyles)
  }


  return (
    <View style={styles.container}>
      {
        label && (
          <View style={styles.labelWrap}>
            <Text style={styles.label}>{label}</Text>
          </View>
        )
      }
      <View style={styles.inputWrap}>
        {
          prefix && (
            <Box ml={px(12)}>
              {prefix}
            </Box>
          )
        }
        <TextInput
          placeholder={placeholder}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholderTextColor='#9C9EA4'
          secureTextEntry={secureTextEntry}
          textContentType={textContentType}
          style={{...styles.input, ...inputStyle}}
          onFocus={focusEffect}
          onBlur={blurEffect}
        />
        {
          suffix && (
            <Box mr={px(12)}>
              {suffix}
            </Box>
          )
        }
      </View>
    </View>
  );
};



export default Search;