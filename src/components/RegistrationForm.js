import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      selectedOption: ''
    }
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = JSON.stringify(this.state);
    
    var user = {
      email: this.state.email,
      password: this.state.password,
      option: this.state.selectedOption
    };

    fetch('http://localhost:8000/register', {
      method: 'POST',
      body: data,
    });
    console.log(user);
    console.log(data);

  };

  handleChange(ev) {
    this.setState({ selectedOption: ev.target.value });
  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3 className="mt-4 mb-3">Registration:</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="registrateEmail"></label>
                <input type="email" className="form-control" placeholder="Email" name="email"
                  value={this.state.email}
                  onChange={this.handleUserInput} />
              </div>
              <div className="form-group">
                <label htmlFor="registratePassword"></label>
                <input type="password" className="form-control" placeholder="Password" name="password"
                  value={this.state.password}
                  onChange={this.handleUserInput} />
              </div>              
              <p></p>
              <label>
                Choose your type of user:
          <select value={this.state.selectedOption} onChange={this.handleChange.bind(this)}>
                  <option value="chef">Chef</option>
                  <option value="manager">Manager</option>
                  <option value="librarian">Librarian</option>
                  <option value="student">Student</option>
                </select>
              </label>
              <button type="submit" className="btn btn-primary mb-2">Confirm</button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

    );
  };
}