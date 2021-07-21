import React from 'react';

import apiClient from '../lib/apiClient';
import BookCard from '../components/BookCard';

class Home extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			books: [],
			search: '',
		}
  }

	componentDidMount() {
		apiClient.findAllBooks().then(({ found: books }) => {
			this.setState({
				books,
			})
      
		})
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
				<input className='input' type='text' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Search' />
				<br/>

        {books.map(book => {
					return (
            <BookCard book={book} key={book._id}
            />
          );
				})}

        </div>
        </>
      )
    }
}

export default Home;