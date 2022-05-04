import { createStore } from 'effector';

import {keywordEvent} from 'models/search/event';

const initialState = {
  keyword: '',
};

export const $search = createStore(initialState)
  .on(keywordEvent, (state, data) => ({ ...state, keyword: data }))

