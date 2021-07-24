import React from 'react';
import { Link } from 'react-router-dom';

import apiClient from '../lib/apiClient';



class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      fav: ''
    }
  }

addToFavs = async (event) => {
        event.preventDefault();
        const {bookId} = this.props.match.params;
        // const {fav} = this.state;
        try{
          await apiClient.addToFavs(bookId);
          this.setState({
            fav: true
          })
      }
        catch (error) {
          console.log(error)
        } finally {
        
          this.props.history.push("/favs");
        }
        
    }
  
  
    render() {
    const { title, author, _id } = this.props.book;
    return (
      <div>
      <Link to={`/books/${_id}`}><h3>Title: {title}</h3></Link>
      <p>Author: {author}</p>
      <button onClick={() => this.addToFavs()}>Add to Favorite</button>
      </div>
    );
  }
}

export default BookCard;