import React, { Component } from 'react';
import { Switch, } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';

import apiClient from './lib/apiClient'; // added
import Book from './components/Book';
// import AddBookInput from './components/AddBookInput';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		}
	}

	
	componentDidMount() {
		apiClient.findAllBooks().then(({ found: books }) => {
			this.setState({
				books, // not defined!
			})
		})
		}

	render() {
		const { books } = this.state;
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<h1>Basic React Authentication</h1>
				<Navbar />
				<Switch>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/private" component={Private} />
				</Switch>
				<div>
				{/* <AddBookInput /> */}

				</div>
				<div>
				
				{books.map(book => {
					return (
						<Book
						key={book._id}
						title={book.title}
						author={book.author}
						/>
					);
				})}
				</div>
			</div>
		);
	}
}

export default withAuth(App);
