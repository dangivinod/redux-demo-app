import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import axios from "axios";

import authActions from '../../actions';

class LoginUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:"Dangi",
      fullname:""
    }
  }

  UserLoginForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // async UserLogin(e){
  //   e.preventDefault();
  //   let {userName, password} = this.state
  //   let data = {
  //     email: userName,
  //     password: password
  //   }
  //   this.props.LoginOperation(data)
  //   .then((res) => {
  //     debugger
  //     console.log('>>>>>>>>>>>>>>>>>>111 ',res)
  //   })
  // }

  UserLogin = (e) => {
    e.preventDefault();
    var promise1 = new Promise(function(resolve, reject) {
      // let fname = this.state.userName+" "+this.state.username
      axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(function (response) {
        console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      })
    });

    promise1.then(function(value) {
      debugger
      console.log(value);
    });

    console.log(promise1);
  }

  render(){
    return(
      <form onSubmit={this.UserLogin.bind(this)} >
        <div className="container">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="userName" required onChange={this.UserLoginForm} />

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required onChange={this.UserLoginForm} />

          <button type="submit">Login</button>
          <Link to="register">Registration</Link>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.AuthReducer.userData
  }
}

export default connect(mapStateToProps, null)(LoginUser);
