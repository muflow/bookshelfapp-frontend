import React from 'react';
import apiClient from '../lib/apiClient';

import { Link } from 'react-router-dom';

class BookDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book: {},
    }
  }

  componentDidMount = async () => {
    const {bookId} = this.props.match.params;
    
    try{
      const oneBook = await apiClient.findOneBook(bookId);
      console.log(oneBook);
      this.setState({
        book: oneBook.found
      })

    }
    catch (error) {
          console.log(error)
        }
  }

  handleDelete = async() => {
    try{
      await apiClient.deleteOneBook(this.state.book._id);
    }
    catch (error) {
          console.log(error)
        } finally {
          this.props.history.push("/books");
        }
  }
  
  render() {
    const { title, author, image, category, description, _id } = this.state.book;
    return (
      <div>
      <p>img: {image}</p>
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <Link to={`/books/edit/${_id}`}>Edit book</ Link>
      <button onClick={() => this.handleDelete(this.props.id)}>Delete book</button>
      </div>
    );
  }
}

export default BookDetails;