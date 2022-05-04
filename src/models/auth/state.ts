import { createStore } from 'effector';
import {
  bioEvent,
  emailEvent,
  avatarEvent,
  initAuthEvent,
  loginEvent,
  logoutEvent,
  nameEvent,
  passwordEvent,
  signupEvent,
  updateProfileEvent,
  usernameEvent,
} from 'models/auth/event';
import * as SecureStore from 'expo-secure-store';

const initialState = {
  isAuth: false,
  loading: false,
  token: '',
  profile: {},
};

SecureStore.getItemAsync('auth').then(savedData => {
  initAuthEvent(JSON.parse(savedData));
});

export const $auth = createStore(initialState)
  .on(initAuthEvent, (_, data: any) => ({
    ...initialState,
    ...data,
  }))
  .on(signupEvent, (state, data) => ({
    ...state,
    isAuth: true,
    token: data.access_token,
    profile: data.user,
  }))
  .on(loginEvent, (state, data) => ({
    ...state,
    isAuth: true,
    token: data.access_token,
    profile: data.user,
  }))
  .on(logoutEvent, _ => initialState)
  .on(updateProfileEvent, (state, data) => ({
    ...state,
    profile: {
      ...state.profile,
      ...data,
    },
  }));

export const $input = createStore({
  email: '',
  username: '',
  name: '',
  bio: '',
  password: '',
  avatar: {},
})
  .on(emailEvent, (state, data) => ({ ...state, email: data }))
  .on(usernameEvent, (state, data) => ({ ...state, username: data }))
  .on(nameEvent, (state, data) => ({ ...state, name: data }))
  .on(bioEvent, (state, data) => ({ ...state, bio: data }))
  .on(passwordEvent, (state, data) => ({ ...state, password: data }))
  .on(avatarEvent, (state, data) => ({ ...state, avatar: data }));

$auth.watch(async state => {
  const data = JSON.stringify(state);
  if (!!state) {
    await SecureStore.setItemAsync('auth', data);
  }
});
