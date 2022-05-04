import {Dimensions, PixelRatio} from "react-native";

const fullWidth = () => {
  return Dimensions.get('window').width;
}

const fullHeight = () => {
  return Dimensions.get('window').height;
}

const scaleFont = (size: number) => {
  return size * PixelRatio.getFontScale()
}

const wp = (percent: number | string) => {
  const width = parseFloat(percent.toString());
  const pixel = Dimensions.get('window').width * width / 100;
  return PixelRatio.roundToNearestPixel(pixel);
}

const hp = (percent: number | string) => {
  const height = parseFloat(percent.toString());
  const pixel = Dimensions.get('window').height * height / 100;
  return PixelRatio.roundToNearestPixel(pixel);
}

export const rs = (size, direction: 'w' | 'h' = 'w', baseWidth = 375, baseHeight = 812) => {
  return {
    'w': wp((size / baseWidth) * 100),
    'h': hp((size / baseHeight) * 100),
  }[direction]
};

const px = (size) => {
  const width = Dimensions.get('window').width;
  return width * size / 375
}

const circleRadius = () => {
  return Math.round(fullWidth() + fullHeight()) / 2;
};

export {
  fullWidth,
  fullHeight,
  scaleFont,
  wp,
  hp,
  px,
  circleRadius,
}