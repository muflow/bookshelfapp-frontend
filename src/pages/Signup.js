// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { withAuth } from "../providers/AuthProvider";

// import "../App.css";

// class Signup extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     username: "",
//     password: "",
//     email: "",
//   };
// }

//   handleFormSubmit = event => {
//     event.preventDefault();
//     const { username, password, email } = this.state;
//     this.props.signup({ username, password, email });
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { username, password, email } = this.state;
//     return (
//       <>
//       <Link to="/" style={{ textDecoration: 'none' }}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></Link>
//         <form className="auth-from" onSubmit={this.handleFormSubmit}>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={this.handleChange}
//           />
//            <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <input className="primary-button" type="submit" value="Signup" />
//         </form>
//         <p>
//           Already have account?
//           <Link to={"/login"} style={{ color: '#000' }}> Login</Link>
//         </p>
//       </>
//     );
//   }
// }

// export default withAuth(Signup);



import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";

import "../App.css";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
    username: "",
    password: "",
    email: "",
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
      const { username, email, password } = this.state;
    this.props.signup({
      username,
      email,
      password
    })
  }
  };

  validate(){
      const { username, email, password } = this.state; 
      const errors = {};
      let isValid = true;

      if (!username) {
        isValid = false;
        errors.username = "Please enter a username.";
      }

      if (!email) {
        isValid = false;
        errors.email = "Please enter an email.";
      }

      if (!password) {
        isValid = false;
        errors.password = "Please enter a password.";
      }

      this.setState({
        errors: errors
      });
  
      return isValid;      
   }

  

  render() {
    const { username, email, password, errors } = this.state;
    return (
      <>
      <Link to="/" style={{ textDecoration: 'none' }}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></Link>
        <form className="signup-from" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <div className="text-danger">{errors.username}</div>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <div className="text-danger">{errors.email}</div>

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <div className="text-danger">{errors.password}</div>

          <input className="primary-button" type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"} style={{ color: '#000' }}> Login</Link>
        </p>
      </>
    );
  }
}

export default withAuth(Signup);
