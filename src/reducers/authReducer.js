import * as type from '../actionTypes';
// import { LOGIN, SIGNUP } from '../actionTypes';


const initialState = {
  userData: [],
  error:''
}

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN:
      return Object.assign({}, state, { 
        userData:action.payload,
        error:""
      })

    case type.SIGNUP:
      return Object.assign({}, state, {
        data:action.payload
      })

    case type.LOGIN_ERROR:
      return Object.assign({}, state, { 
        error:action.payload,
        userData:[]
      })

    default:
      return state
  }
}

export { AuthReducer };