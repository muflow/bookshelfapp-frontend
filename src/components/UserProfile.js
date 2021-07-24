import React from 'react';
import { withAuth } from '../providers/AuthProvider';
// import apiClient from '../lib/apiClient';

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
  const { username, email, } = this.props.user;
    return (
      <div>
        Hello {username}
        tu email es {email}
      </div>
    )
  }
}

export default withAuth(UserProfile);