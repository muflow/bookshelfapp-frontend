import React from 'react';

import BookCard from '../components/BookCard';

class Favs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favBooks: [],
    }
  }

  render() {
    const { favBooks } = this.state;
    return (
      <div>
        <h1>Favorite books</h1>
        <p>Favoritos es una ruta de api client</p>
        
        {favBooks.map(book => {
					return (
            <BookCard book={book} key={book._id}
            />
          );
				})}

        <p>Tengo usuario e id del libro, se la paso por url, Handle favourite addToFavortieList e redirect</p>
      </div>
    )
  }
}

export default Favs;