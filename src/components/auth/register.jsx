import React from 'react';
import { connect } from 'react-redux';

import SyncValidationForm from '../form/register'

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
        <SyncValidationForm onSubmit={this.submit} />
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

export default connect(null, null)(RegisterUser)
