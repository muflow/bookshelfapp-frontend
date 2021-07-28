import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../App.css";

import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			<div>
				{isLoggedIn ? (
					<>
						<p>username: {user.username}</p>
						<button onClick={logout}>Logout</button>
					</>
				) : (
					<>
						<Link to="/signup" className="primary-button">Signup</Link>
						<br/>
						<br/>
						<div>
						<Link to="/login" className="secondary-button">Login</Link>
						</div>
						
					</>
				)}
			</div>
		);
	}
}

export default withAuth(Navbar);
