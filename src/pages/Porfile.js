import React from 'react';

import apiClient from '../lib/apiClient';

// import UserProfile from '../components/UserProfile';

class Profile extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			users: [],
		}
  }

  	componentDidMount() {
		apiClient.findAllUsers().then(({ found: users }) => {
			this.setState({
				users,
			})
      
		})
		}

  render() {
    // const { users } = this.state
    return (
      <div>
        
      </div>
    )
  }
}

export default Profile;