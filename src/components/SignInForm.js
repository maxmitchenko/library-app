import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form action='signin' className='demoForm'>
              <h3 className='mt-4 mb-3'>Sign in:</h3>
              <div className='form-group'>
                <label htmlFor='email'></label>
                <input type='email' className='form-control'
                  name='email' placeholder='Email' value={this.state.email}
                  onChange={this.handleUserInput} />
              </div>
              <div className='form-group'>
                <label htmlFor='password'></label>
                <input type='password' className='form-control'
                  name='password' placeholder='Password' value={this.state.password}
                  onChange={this.handleUserInput} />
              </div>
              <button type='submit' className='btn btn-primary mb-2'>
                Sign up
            </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>



    )
  }
}