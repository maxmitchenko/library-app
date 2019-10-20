import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RegistrationForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          selectedOption: 'chef'
        }
      }
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      };

      handleSubmit = event => {
        event.preventDefault();
      
        const user = {
          email: this.state.email,
          password: this.state.password          
        };        
        
  };

  handleRadio = (ev) => {
    const val = ev.target.value;
    this.setState({selectedOption: {val}})
  }
  render () {
        
        return (
          <div className="container">
          <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <h3 className="mt-4 mb-3">Registration:</h3>
          <form action="register" onSubmit={this.handleSubmit}>
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
            <input type="radio" name="typeOfUser" value="chef" 
            checked={this.handleRadio}/>
            <label className="p-1">Chef</label>
            <input type="radio" name="typeOfUser" value="manager" 
            checked={this.handleRadio}/>
            <label className="p-1">Manager</label>
            <input type="radio" name="typeOfUser" value="librarian" 
            checked={this.handleRadio}/>
            <label className="p-1">Librarian</label>
            <input type="radio" name="typeOfUser" value="student" 
            checked={this.handleRadio}/>
            <label className="p-1">Student</label>
              <p></p>           
            <button type="submit" className="btn btn-primary mb-2">Confirm</button>
          </form>
          </div>
          <div className="col-md-3"></div>
          </div>
          </div>



            
        );
        };
    }