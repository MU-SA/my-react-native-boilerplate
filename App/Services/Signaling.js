import io from 'socket.io-client';
import {SOCKET_POINT} from '../../config/constants';
import {store} from '../configureStore';
import {toggle_alert} from '../actions/AlertAction';
const Signaling = (function () {
  var socket;
  return {
    getInstance: function () {
      if (!socket?.connected) {
        Signaling.conncet();
      }
      return socket;
    },
    on: function (event, callback) {
      socket.on(event, callback);
    },
    emit: function (event, callback) {
      socket.emit(event, callback);
    },
    conncet: function (token = store.getState().Auth.UserData?.token) {
      socket = io.connect(SOCKET_POINT, {
        transports: ['websocket'],
        timeout: 500,
        autoConnect: true,
        pingTimeout: 30000,
        query: {token},
      });
      socket.on('disconnect', Signaling.onDisconnect);
    },
    onConnect: () => {},
    onDisconnect: () => {
      store.dispatch(toggle_alert({body: 'Check your internet'}));
    },
  };
})();
export {Signaling};
