import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

// handle a message from the server asynchronously
const handleNewMessage = function * handleNewMessage(params) {
  // take every action of type ADD_MESSAGE
  yield takeEvery(types.ADD_MESSAGE, action => {
    action.author = params.username,
    // when the action occurs send a message to the web socket
    params.socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage