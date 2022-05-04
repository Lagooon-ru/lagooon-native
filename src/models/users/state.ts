import { createStore } from 'effector';

import {initUsersEvent} from "models/users/event";

const initialState = {
  users: [],
};

export const $users = createStore(initialState)
  .on(initUsersEvent, (state, data) => ({ ...state, users: data }))