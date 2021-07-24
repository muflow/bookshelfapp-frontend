import React from 'react';
import BookCard from '../components/BookCard';
import apiClient from '../lib/apiClient';

class Favs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favBooks: [],
    }
  }

  componentDidMount = async() => {
    try {
      const user = await apiClient.getUsersFavBooks();
      this.setState({
        favBooks: user.favBooks
      })
      console.log(user)
    } catch(error){
      console.log(error)
    }
  }

  render() {
    const { favBooks } = this.state;
    return (
      <div>
        <h1>Favorite books</h1>
        <p>These are your favourite books:</p>
        {favBooks.map(book => {
					return (
            <BookCard book={book} key={book._id}
            />
          );
				})}
      </div>
    )
  }
}

export default Favs;