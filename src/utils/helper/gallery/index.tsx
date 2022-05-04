import {useCallback} from "react";
import * as ImagePicker from 'expo-image-picker';

export const useGallery = (aspect: [number, number] = [4, 3]) => {
  const open = useCallback(async () => {
    const result: any = await ImagePicker
      .launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: aspect,
        quality: 1,
      });
    return result;
  }, []);

  return {
    open,
  };
};
