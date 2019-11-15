import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './App.css';
import SignInForm from './components/SignInForm';
import RegistrationForm from './components/RegistrationForm';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='text-center'>Welcome to our library</h1>
        <div className='text-center'>
          <nav>
            <ul>
              <li><Link to='/'>Sign In</Link></li>
              <li><Link to='/registration'>Registrate</Link></li>              
            </ul>
          </nav>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={SignInForm} />
            <Route path='/registration' component={RegistrationForm} />            
          </Switch>
        </div>
      </div>
    );
  }
}