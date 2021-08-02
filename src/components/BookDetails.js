import React from 'react';
import apiClient from '../lib/apiClient';

import { Link } from 'react-router-dom';

import './BookDetails.css'

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
    const { title, author, imgUrl, category, description, _id } = this.state.book;
    return (
      <>
      
      <div className="cover-img-container">
      <Link to="/books" style={{ textDecoration: 'none' }}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></Link>
      <img width="200px" src={imgUrl} alt={title} />
      </div>
      <div className="details-container">
      <h3>{title}</h3>
      <p>by {author}</p>
      <p>__________</p>
      <p>Category: {category}</p>
      <p className="desc-field">Description: {description}</p>
      {/* <Link to={`/books/edit/${_id}`}>Edit book</ Link> */}
      
      <div className="detail-icons">
      <Link to={`/books/edit/${_id}`} style={{ color: 'green' }}><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>
      <i className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={() => this.handleDelete(this.props.id)}></i>
      </div>
      </div>
      </>
    );
  }
}

export default BookDetails;