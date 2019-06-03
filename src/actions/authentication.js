import * as type from '../actionTypes';
// import LOGINs, { SIGNUP } from '../actionTypes';
import axios from 'axios';

export const LoginAction = (data111) => {
    return{
        type:type.LOGIN,
        payload:data111
    }
}

export const SignupAction = ({data}) => {
    return{
        type:type.SIGNUP,
        payload:data
    }
}


export const ErrorAction = (error) => {
  return {
    type:type.LOGIN_ERROR,
    payload:error
  }
}