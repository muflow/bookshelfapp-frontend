import React from 'react';

class UserProfile extends React.Component {
  
  render() {
  const { username } = this.props
    return (
      <div>
        Hello {username}
      </div>
    )
  }
}

export default UserProfile;