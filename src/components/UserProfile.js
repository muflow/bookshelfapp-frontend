import React from 'react';
import { withAuth } from '../providers/AuthProvider';

import { Link } from 'react-router-dom';
// import apiClient from '../lib/apiClient';
import './UserProfile.css'
import profilepic from '../imgs/user.png'

class UserProfile extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     user: {},
  //   }
  // }


  // 	componentDidMount = async () => {
  //   const { loggedUser } = this.state
  //   try{
  //     const theUser = await apiClient.userProfile(loggedUser);
  //     this.setState({
  //       user: theUser.user
  //     })
    
	// 	}
  //   catch (error) {
  //         console.log(error)
  //       }

  // }
   
  render() {
  const { isLoggedIn, logout } = this.props;
  const { username, email } = this.props.user;
    return (
      <div className="profile-card-container">
        <img className="profile-pic" src={profilepic} alt="user" />
        <h2>Hello {username}{' '}</h2>
        <p>Your e-mail is:</p>
        <h3>{email}</h3>

        {isLoggedIn ? (
					<>
						{/* <p>Welcome {user.username}</p> */}
						
						<button className="primary-button" onClick={logout}>Logout</button>
					</>
				) : (
					<>
						<Link to="/signup" className="primary-button">Signup</Link>
						<div>
						<Link to="/login" className="secondary-button">Login</Link>
						</div>
						
					</>
				)}
        
      </div>
    )
  }
}

export default withAuth(UserProfile);