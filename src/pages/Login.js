import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../App.css";
import { withAuth } from "../providers/AuthProvider";


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      ciao: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({
      username, 
      password
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
      <Link to="/" style={{ textDecoration: 'none' }}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></Link>
      <form className="auth-from" onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input className="secondary-button" type="submit" value="Login" />
      </form>
      </>
    );
  }
}

export default withAuth(Login);
