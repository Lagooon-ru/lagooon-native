import { createStore } from 'effector';

import {initChatsEvent} from "models/chat/event";

const initialState = {
  chats: [],
};

export const $chats = createStore(initialState)
  .on(initChatsEvent, (state, data) => ({ ...state, chats: data }))