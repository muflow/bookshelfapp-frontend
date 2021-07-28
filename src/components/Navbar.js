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
						<p>Welcome {user.username}</p>
						<Link to="/books/new" className="primary-button">Create book</Link>
						<Link to="/favs" className="primary-button">Favourite books</Link>
						<Link to="/profile" className="primary-button">Profile</Link>
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
