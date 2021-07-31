import React from 'react';

import apiClient from '../lib/apiClient';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom'

import './Home.css'

class Home extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			books: [],
			search: '',
		}
  }

	componentDidMount = async() => {
		try {
      const books = await apiClient.findAllBooks();
			this.setState({
				books: books.found
			})
    } catch(e){
      console.log(e)
    }
  }

		 handleChange = event => {
        const value = event.target.value;
        this.setState({
            search: event.target.value
        })
        apiClient.findAllBooks(value)
            .then(response => {
                this.setState({
                    books: response.books
                })
            })
            .catch(err => console.log(err))
    }

     render() {
			const { books } = this.state;
      return (
        <>
        <div>
        <h1>My Books</h1>
				{/* <input className='input' type='text' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Search' />
				<br/> */}

        {books.map(book => {
					return (
            <BookCard book={book} key={book._id}
            />
          );
				})}
        

        </div>
        
        <div>
          <i className="float"><Link to="/books/new" style={{ textDecoration: 'none' }} className="fa fa-plus my-float" /></i>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        </>
      )
    }
}

export default Home;