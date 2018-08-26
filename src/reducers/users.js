import * as types from '../constants/ActionTypes'

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([
        {
          name: action.name,
          id: action.id
        }
      ])
      // get all users and assign the list as state.users
      case types.USERS_LIST:
      return action.users
      default:
      return state
  }
}

export default users