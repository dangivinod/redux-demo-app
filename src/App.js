import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import LoginView from './views/authentication/login'
import Section from './views/authentication/login/scroll.jsx'
import Assignment from './views/assignment'
import AssignmentNew from './views/assignmentNew'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginView}  />
      <Route exact path="/scroll" component={Section}  />
      <Route exact path="/assignment" component={Assignment}  />
      <Route exact path="/assignment-new" component={AssignmentNew}  />
    </div>
  );
}

export default App;
