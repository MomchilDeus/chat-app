import * as types from '../constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../actions/index'

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:1337')

  // send your username, everyone updates their users list to see you
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }

  // when receiving a message from server
  socket.onmessage = e => {
    const data = JSON.parse(e.data)
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author))
        break
      // receive user from server, add to state.users
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }
  return socket
}

export default setupSocket