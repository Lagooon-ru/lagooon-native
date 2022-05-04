import Colors from "utils/helper/style/color";

const ButtonThemes = {
  black: {
    backgroundColor: Colors.black,
    color: Colors.white,
  },
  disabled: {
    backgroundColor: Colors.darkGrey,
    color: Colors.grey,
  },
  orange: {
    backgroundColor: Colors.orange,
    color: Colors.white,
  },
  reverseOrange: {
    backgroundColor: 'transparent',
    color: Colors.orange,
  },
  profileDefault: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  },
  profileSubscribed: {
    backgroundColor: Colors.white,
    color: Colors.blue,
  },
  white: {
    backgroundColor: Colors.white,
    color: Colors.black,
  },
  grey: {
    backgroundColor: Colors.lightGray,
    color: Colors.black,
  },
  wOpacity: {
    backgroundColor: Colors.whiteOpacity,
    color: Colors.black,
  },
}

export default ButtonThemes