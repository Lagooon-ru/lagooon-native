import { createEvent } from 'effector';

const initAuthEvent = createEvent();
const signupEvent = createEvent<{ access_token: string; user: any }>();
const loginEvent = createEvent<{ access_token: string; user: any }>();
const logoutEvent = createEvent();
const forgetEvent = createEvent();
const resetEvent = createEvent();
const updateProfileEvent = createEvent<any>();

const emailEvent = createEvent<string>();
const usernameEvent = createEvent<string>();
const bioEvent = createEvent<string>();
const nameEvent = createEvent<string>();
const passwordEvent = createEvent<string>();
const avatarEvent = createEvent<any>();

export {
  initAuthEvent,
  signupEvent,
  loginEvent,
  logoutEvent,
  forgetEvent,
  resetEvent,
  updateProfileEvent,
  emailEvent,
  usernameEvent,
  bioEvent,
  nameEvent,
  passwordEvent,
  avatarEvent,
};
