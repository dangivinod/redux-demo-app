import axios from 'axios';
import * as types from '../actionTypes';
import authActions from '../actions';

const LoginOperation = (data) => dispatch => {
  return axios.post('http://18.223.136.203/api/auth/sign_in', data)
    .then(function (response) {
      dispatch(authActions.LoginAction(response.data.data))
      return response.data.data;
    })
    .catch(function (error) {
      dispatch(authActions.ErrorAction(error.response.data.errors[0]))
      return error.response.data.errors;
    });
  
}

export { LoginOperation }
