import {useStore} from "effector-react";
import {$ws} from "models/socket/state";
import {useEffect, useRef} from "react";
import {errorSckEvent} from "models/socket/event";


const useWebSocket = (wsURL, onMessage, onError) => {
  const status = useStore($ws)
  const wsRef = useRef()

  const handleError = (err) => {
    errorSckEvent();
    onError(err.message);
  }

  useEffect(() =>
  {
    const socket = new WebSocket('http://192.168.0.118:8001');

  })
}