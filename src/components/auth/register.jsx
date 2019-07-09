import React from 'react';
import { connect } from 'react-redux';

import ContactForm from '../form/register.js'

class RegisterUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  submit = values => {
  debugger
    console.log(values)
  }

  render(){
    return(
      <div>
       <ContactForm onSubmit={this.submit} />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   user: state.reducers
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     userAction: (data) => dispatch(action(data)) 
//   }
// }

export default RegisterUser
