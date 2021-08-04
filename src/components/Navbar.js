import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../App.css";
import "./Navbar.css"
// import home from '../imgs/new-home-solid.svg';
// import favs from '../imgs/heart-solid.svg';
// import profile from '../imgs/user-solid.svg';

import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		active: false,
	// 	}
	// }

// 	componentDidMount() {
//   const active = localStorage.getItem('active') === 'true';
//   this.setState({ active });
// }

// handleClick = () => {
// const { active } = this.state;
// localStorage.setIteam('active', active);

// };

	
	render() {
		const { isLoggedIn } = this.props;
		// const { active } = this.state
		return (
			<div>
				{isLoggedIn ? (
					<>
						{/* <p>Welcome {user.username}</p> */}
						<nav className="navbar">
						<ul id="menu">
						<Link to="/books" className="" ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path strikewidth="2" id="home" fill="currentcolor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg></Link>
						
						<Link to="/favs" className=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" id="favs" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></Link>
						
						<Link to="/profile" className=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" id="profile" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></Link>
						</ul>
						</nav>
						{/* <button onClick={logout}>Logout</button> */}
					</>
				) : (
					<>
						<Link to="/signup" className="primary-button">Signup</Link>
						<br/>
						<br/>
						<div>
						<Link to="/login" className="secondary-button-splashscreen">Login</Link>
						</div>
						
					</>
				)}
			</div>
		);
	}
}

export default withAuth(Navbar);
