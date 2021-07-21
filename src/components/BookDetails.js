import React from 'react';
import apiClient from '../lib/apiClient';

class BookDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book: {},
    }
  }

  componentDidMount = async () => {
    const {bookId} = this.props.match.params;
    console.log(bookId);
    // try catch 
    // conectarte a apiClient.findOneBook(bookId)
    // subir al estado los datos del libro al estado (setState)
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

    // en el render pinto los datos del estado
  }
  
  render() {
    const { title, author } = this.state.book;
    return (
      <div>
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
      <p>Descritpion: </p>
      <p>Category: </p>
      <button>Edit book</button>
      <button>Delete book</button>
      </div>
    );
  }
}

export default BookDetails;