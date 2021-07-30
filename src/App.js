import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import Splashscreen from './pages/Splashscreen';
import Home from './pages/Home';
import Favs from './pages/Favs'
import Profile from './pages/Porfile';
import BookDetails from './components/BookDetails';
import EditBookInput from './components/EditBookInput'

import AddBookInput from './components/AddBookInput';

class App extends Component {
		
	render() {
		// const { books } = this.state;
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				{/* <h1>My Bookshelf</h1> */}
				{this.props.isLoggedIn && <Navbar />}
				<Switch>
					<PrivateRoute exact path="/books" component={Home} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute exact path="/books/new" component={AddBookInput} />
					<PrivateRoute exact path="/books/edit/:bookId" component={EditBookInput} />
					<PrivateRoute exact path="/books/:bookId" component={BookDetails} />
					<PrivateRoute exact path="/favs" component={Favs} />
					<PrivateRoute path="/private" component={Private} />
					<PrivateRoute path="/profile" component={Profile} />
					<Route path="/" component={Splashscreen} />
					<Route path="/favorites" component={Favs} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
