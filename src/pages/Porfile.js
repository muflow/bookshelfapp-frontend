import React from 'react';

import UserProfile from '../components/UserProfile'

// import apiClient from '../lib/apiClient';

// import UserProfile from '../components/UserProfile';

class Profile extends React.Component {
  

  render() {
    return (
      <div>
				<h1>My profile</h1>
        <UserProfile />
      </div>
    )
  }
}

export default Profile;