import React, {useState, useRef, useEffect, Fragment} from 'react';
import { Camera } from 'expo-camera';
import {useGallery} from "utils/helper/gallery";
import Icon from 'components/icon';
import {fullHeight, fullWidth, hp, px, rs, wp} from "utils/helper/style/mixins";
import IconButton from "components/shared/input/iconButton";
import Box from 'components/shared/paper/Box';
import Colors from "utils/helper/style/color";
import { P1} from 'components/shared/paragraph';
import SafeArea from "components/shared/paper/SafeArea";
import CloseButton from "components/shared/close";
import Shooter from "components/shared/shooter";
import {Alert, Dimensions, Image, Platform} from "react-native";
import { View } from 'react-native';
import Touch from "components/shared/paper/Touch";
import Button from "components/shared/input/button";

const CameraScreen = ({ navigation }) => {
  const { open: openGallery } = useGallery();
  const [cameraPermission, setCameraPermission] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [hasPreview, setHasPreview] = useState<null | "image" | "video">(null);
  const [timer, setTimer] = useState(60);
  const [recording, setRecording] = useState<boolean>(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isRatioSet, setIsRatioSet] = useState(false);
  const [imagePadding, setImagePadding] = useState(0);
  const [videoSource, setVideoSource] = useState(null);
  const [imageSource, setImageSource] = useState(null);
  const [isPreview, setIsPreview] = useState(false);

  const { height, width } = Dimensions.get('window');
  const screenRatio = height / width;
  const cameraRef = useRef<Camera | null>(null);

  const takePermission = () => {
    Camera.requestCameraPermissionsAsync()
      .then(({ status }) => {
        setHasPermission(status === 'granted');
        if (status === 'granted') {
          setCameraPermission(true);
        } else {
          Alert.alert('Доступ к камере был запрещён :(');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const prepareRatio = async () => {
    let desiredRatio = '4:3';
    if (Platform.OS === 'android') {
      const ratios = await cameraRef.current.getSupportedRatiosAsync();

      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(':');
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      desiredRatio = minDistance;
      const remainder = Math.floor((height - realRatios[desiredRatio] * width) / 2);
      setImagePadding(remainder);
      setIsRatioSet(true);
    }
  };

  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  const switchCamera = () => {
    if (cameraType === Camera.Constants.Type.back) {
      setCameraType(Camera.Constants.Type.front);
    } else {
      setCameraType(Camera.Constants.Type.back);
    }
  };

  const galleryHandler = async () => {
    const result = await openGallery();

    if (!result.cancelled) {
      navigation.navigate('NewStory', { image: result.uri });
    }
  };

  const takePicture = () => {
    if (cameraPermission) {
      console.log(cameraPermission, 'PERMISSION');
      cameraRef.current
        .takePictureAsync()
        .then(photo => {
          setImageSource(photo);
          setHasPreview('image');
          setIsPreview(true)
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      takePermission();
    }
  }

  const nextHandler = () => {
    const source = hasPreview === 'video' ? videoSource : imageSource
    navigation.navigate('NewStoryScreen', {
      source: source,
      type: hasPreview
    })
  }

  useEffect(() => {
    // if (!timer || timer < 0 || !recording) return;
    // const intervalId = setInterval(() => {
    //   setTimer(timer - 0.1);
    // }, 100);
    // return () => clearInterval(intervalId);
  }, [timer, recording])

  useEffect(() => {
    takePermission();
    cameraRef.current?.pausePreview();
  }, []);


  return (
    <SafeArea bg={Colors.black}>
      {/*ACTION PART*/}
      <Box
        width={fullWidth()}
        height={fullHeight()}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 2
        }}
      >
        <Box
          height={fullHeight()}
          width={fullWidth()}
          justify='space-between'
          ph={px(28)}
          pv={px(24)}
        >
          <Box
            direction="row"
            align="center"
          >
            <CloseButton/>
            {
              hasPermission && !isPreview && (
                <P1
                  textAlign='center'
                  color={Colors.white}
                >
                  История
                </P1>
              )
            }
            {
              isPreview ? (
                <Button
                  size="sm"
                  text='Далее'
                  theme="orange"
                  onPress={nextHandler}
                />

              ) : (
                <IconButton size={32}>
                  <View/>
                </IconButton>
              )
            }
          </Box>
          {
            !hasPermission && (
              <Box
                align='center'
                justify='center'
              >
                <Box
                  width={px(166)}
                  height={px(166)}
                  background={Colors.whiteOpacity}
                  align='center'
                  justify='center'
                  style={{borderRadius: px(14)}}
                >
                  <Icon width={rs(62)} height={rs(79)} name='unlock' />
                </Box>
                <Touch
                  onPress={takePermission}
                  mt={px(54)}
                >
                  <P1 color={Colors.orange}>Разрешить доступ к камере</P1>
                </Touch>
              </Box>
            )
          }
          <Box>
            {
              hasPermission && !isPreview && (
                <P1
                  color={Colors.white}
                  textAlign="center"
                >
                  Зажми кнопку,{`\n`} чтобы сделать видео
                </P1>
              )
            }
            <Box>
              <Box
                justify='space-between'
                align='center'
                direction='row'
                mt={12}
              >
                <IconButton
                  theme='wOpacity'
                  onPress={galleryHandler}
                  size={44}
                  disabled={!hasPermission}
                >
                  <Icon
                    name="frame"
                    active
                    width={rs(22)}
                    height={rs(22)}
                  />
                </IconButton>
                <Shooter
                  value={(60 - timer) / 60 * 100}
                  onPress={takePicture}
                  disabled={!hasPermission}
                />
                <IconButton
                  theme='wOpacity'
                  onPress={switchCamera}
                  size={44}
                  disabled={!hasPermission}
                >
                  <Icon
                    name="change-camera"
                    width={rs(24)}
                    height={rs(24)}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*BG PART*/}
      {
        hasPermission && !isPreview && (
          <Camera
            type={cameraType}
            onCameraReady={setCameraReady}
            ratio='16:9'
            ref={r => {
              cameraRef.current = r;
            }}
            style={{
              height: hp(100),
              width: wp(100),
            }}
          />
        )
      }
      {
        isPreview && {
          'image' : (
            <Image
              source={imageSource}
              width={fullWidth()}
              height={fullHeight()}
              style={{width: '100%', height: '100%'}}
            />
          ),
          'video': (
            <View></View>
          ),
          default: (<View/>)
        }[hasPreview]
      }
    </SafeArea>
  );
};

export default CameraScreen;