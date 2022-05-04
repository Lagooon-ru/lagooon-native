import React, {FC} from 'react';
import {ColorValue, StyleSheet, View} from "react-native";

interface Props {
  children: any;
  flex?: number | undefined;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | undefined;
  h?: number | string | undefined;
  m?: number | string | undefined;
  mh?: number | string | undefined;
  mv?: number | string | undefined;
  mt?: number | string | undefined;
  mb?: number | string | undefined;
  ml?: number | string | undefined;
  mr?: number | string | undefined;
  p?: number | string | undefined;
  pv?: number | string | undefined;
  ph?: number | string | undefined;
  pt?: number | string | undefined;
  pb?: number | string | undefined;
  pl?: number | string | undefined;
  pr?: number | string | undefined;
  background?: ColorValue | undefined;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
  height?: number | string | undefined;
  width?: number | string | undefined;
  style?: any
}

const Box: FC<Props> = (props) => {
  const {
    children,
    flex,
    justify,
    align,
    m, mv, ml, mr, mh, mt, mb,
    p, ph, pv, pl, pr, pt, pb,
    background,
    direction,
    width,
    height,
    style
  } = props;

  const styles = StyleSheet.create({
    wrap: {
      flex: flex,
      flexDirection: direction || "column",
      alignItems: align,
      justifyContent: justify || "space-between",
      margin: m,
      marginVertical: mv,
      marginHorizontal: mh,
      marginLeft: ml,
      marginRight: mr,
      marginTop: mt,
      marginBottom: mb,
      padding: p,
      paddingVertical: pv,
      paddingHorizontal: ph,
      paddingLeft: pl,
      paddingRight: pr,
      paddingTop: pt,
      paddingBottom: pb,
      backgroundColor: background,
      height: height,
      width: width,
      ...style
    }
  })

  return (
    <View style={{...styles.wrap}}>
      {children}
    </View>
  );
};

export default Box;