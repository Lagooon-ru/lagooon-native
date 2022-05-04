import {createStore} from "effector";
import {closedSckEvent, errorSckEvent, openSckEvent} from "models/socket/event";


const $ws = createStore('closed')
  .on(openSckEvent, () => 'open')
  .on(closedSckEvent, () => 'closed')
  .on(errorSckEvent, () => 'error')

export {$ws}