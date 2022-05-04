import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {px, rs, wp} from "utils/helper/style/mixins";
import Icon from "components/icon";
import Colors from 'utils/helper/style/color';

interface Props {
  disable?: boolean;
  onTabChange?: (value: number) => void;
}

const ProfileGridHeader: FC<Props> = (props) => {
  const {disable, onTabChange} = props;

  const [tab, setTab] = useState<number>(0);

  const tabHandler = (t: number) => {
    !disable && setTab(t);
  }

  useEffect(() =>{
    onTabChange && onTabChange(tab);
  }, [tab])

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.8}
        onPress={() =>{
          tabHandler(0)
        }}
      >
        <Icon name='grid' width={32} height={32}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.8}
        onPress={() =>{
          tabHandler(1)
        }}
      >
        <Icon name='shooter' width={32} height={32}/>
      </TouchableOpacity>
      <View style={{...styles.tail, left: tab === 0 ? 0 : undefined, right: tab === 1 ? 0 : undefined}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: wp(100),
    flexDirection: 'row',
    marginBottom: 3,
    position: 'relative'
  },
  item: {
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.orange,
    paddingHorizontal: px(5),
    paddingVertical: px(10),
  },
  tail: {
    width: wp(50),
    height: px(3),
    position: 'absolute',
    backgroundColor: Colors.orange,
    bottom: -3
  }
})

export default ProfileGridHeader;