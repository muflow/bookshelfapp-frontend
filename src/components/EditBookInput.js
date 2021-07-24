import React, { Component } from 'react';
import apiClient from '../lib/apiClient';

class EditBookInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      title: "",
      author: ""
    }
  }

    componentDidMount = async () => {
    const {bookId} = this.props.match.params;
    
    try{
      const oneBook = await apiClient.findOneBook(bookId);
      console.log(oneBook);
      this.setState({
        book: oneBook.found,
        title: oneBook.found.title,
        author: oneBook.found.author
      })

    }
    catch (error) {
          console.log(error)
        }
  }

  handleEdit = async (event) => {
    event.preventDefault();
    // const { title, author } = this.state;
    const {bookId} = this.props.match.params;
    const { title, author } = this.state;
    try{
      const editBook = await apiClient.editOneBook(bookId, { title, author});
      console.log(editBook)
    }
    catch (error) {
          console.log(error)
        } finally {
        
          this.props.history.push("/books");
        }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, author } = this.state;
    return (
      <form onSubmit={this.handleEdit}> 
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" value={author} onChange={this.handleChange} />
                    <br/>
                    <button type="submit">Save Changes</button>
             </form>  
    )
  }
}

export default EditBookInput;