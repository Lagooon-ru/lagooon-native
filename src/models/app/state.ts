import * as SecureStore from 'expo-secure-store';
import {createStore} from "effector";
import {initAppEvent} from "models/app/event";
import {useFonts} from "expo-font";

const initState = {
  version: '0.4.0',
  fontLoaded: false
}

export const $app = createStore(initState)
