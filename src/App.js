import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
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
				<h1>My Books app</h1>
				
				{/* <Navbar /> */}
				<Switch>
					<Route exact path="/home" component={Home} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute exact path="/books/new" component={AddBookInput} />
					<PrivateRoute exact path="/books/:bookId" component={BookDetails} />
					<PrivateRoute path="/private" component={Private} />
					<Route path="/" component={Splashscreen} />
					{/* <PrivateRoute  exact path="/home/:id" component={BookDetails} /> */}
					
					<Route path="/favorites" component={Favs} />
				</Switch>
				
				
			</div>
		);
	}
}

export default withAuth(App);
