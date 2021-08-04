import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../App.css";
import "./Login.css";
import { withAuth } from "../providers/AuthProvider";


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username:"",
      password:"",
      errors: {}
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.validate()) {
      const { username, password } = this.state;
    this.props.login({
      username, 
      password
    })
  }
  };

   validate(){
      const { username, password } = this.state; 
      const errors = {};
      let isValid = true;

      if (!username) {
        isValid = false;
        errors.username = "Please enter your username.";
      }

      if (!password) {
        isValid = false;
        errors.password = "Please enter your password.";
      }

      this.setState({
        errors: errors
      });
  
      return isValid;      
   }

  

  render() {
    const { username, password, errors } = this.state;
    return (
      <>
      <Link to="/" style={{ textDecoration: 'none' }}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></Link>
      <form className="auth-from" onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input className="auth-input"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />

        <div className="text-danger">{errors.username}</div>

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />

        <div className="text-danger">{errors.password}</div>

        <input className="secondary-button" type="submit" value="Login" />
      </form>
      </>
    );
  }
}

export default withAuth(Login);
