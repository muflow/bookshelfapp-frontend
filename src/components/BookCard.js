import React from 'react';

import { Link } from 'react-router-dom';

class BookCard extends React.Component {
  
  
    render() {
    const { title, author, _id } = this.props.book;
    return (
      <div>
      <Link to={`/books/${_id}`}><h3>Title: {title}</h3></Link>
      <p>Author: {author}</p>
      </div>
    );
  }
}

export default BookCard;