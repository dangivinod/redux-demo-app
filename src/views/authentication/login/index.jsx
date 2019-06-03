import React from 'react';
import {connect} from 'react-redux';

import authActions from '../../../actions';
import { LoginOperation } from '../../../operations';


import LoginUser from '../../../components/auth/login'

class LoginView extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    let { LoginOperation } = this.props
    return(
      <LoginUser LoginOperation={LoginOperation} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    // authActions: (data) => dispatch(authActions.authActions(data)),
    LoginOperation: (data) => dispatch(LoginOperation(data)),
  }
}

export default connect(null, mapDispatchToProps)(LoginView);
