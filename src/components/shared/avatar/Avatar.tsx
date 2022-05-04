import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View
} from "react-native";
import IconButton from "components/shared/input/iconButton";
import Icon from "components/icon";
import {px} from 'utils/helper/style/mixins';
import Colors from "utils/helper/style/color";
import LogoShape from '/assets/svgs/logo-shape.svg'

interface Props {
  size: number;
  active?: boolean;
  edit?: boolean;
  onEdit?: () => void;
  source?: ImageSourcePropType;
  url?: string | undefined;
  bordered?: boolean;
}

const Avatar: FC<Props> = (props) => {
  const {size, active, edit, source, url, onEdit, bordered} = props

  const borderStyle = bordered ? {
    borderRadius: size || px(80),
    borderColor: active ? Colors.orange : Colors.grey,
    borderWidth: size < px(50) ? px(2) : px(4),
  } : {}

  const styles = StyleSheet.create({
    wrap: {
      width: size || px(80),
      height: size || px(80),
      alignItems: 'center',
      justifyContent: 'center',
      ...borderStyle
    }
  })

  return (
    <View style={styles.wrap}>
      {
        url ? (
          <Image
            source={{uri: url}}
            style={{
              borderRadius: size - px(1),
              width: size - px(4),
              height: size - px(4)
            }}
          />
        ) : source ? (
          <Image
            source={source}
            style={{
              borderRadius: size - px(1),
              width: size - px(4),
              height: size - px(4)
            }}
          />
        ) : (
          <LogoShape
            width={size ? size / 2 : px(40)}
            height={size ? size / 2 : px(40)}
          />
        )
      }

      {
        edit && (
          <IconButton
            theme='white'
            size={px(28)}
            onPress={onEdit && onEdit}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0
            }}
          >
            <Icon
              active
              name='edit'
              width={px(20)}
              height={px(20)}
            />
          </IconButton>
        )
      }
    </View>
  );
};

export default Avatar;