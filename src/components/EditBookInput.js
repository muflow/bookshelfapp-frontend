import React, { Component } from 'react';
import apiClient from '../lib/apiClient';

class EditBookInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      title: "",
      author: "",
      description: "",
      category: "",
      imgUrl: ""
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
        author: oneBook.found.author,
        description: oneBook.found.description,
        category: oneBook.found.category,
        imgUrl: oneBook.found.imgUrl
      })

    }
    catch (error) {
          console.log(error)
        }
  }

  handleEdit = async (event) => {
    event.preventDefault();
    const {bookId} = this.props.match.params;
    const { title, author, description, imgUrl, category } = this.state;
    try{
      const editBook = await apiClient.editOneBook(bookId, { title, author, description, imgUrl, category });
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
    const { title, author, imgUrl, category, description } = this.state;
    return (
      <>
      <h1>Edit Book</h1>
      <form onSubmit={this.handleEdit}> 
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />
                    
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" value={author} onChange={this.handleChange} />
                    
                    <label htmlFor="imgUrl">Image url</label>
                    <input type="text" name="imgUrl" id="imgurl" value={imgUrl} onChange={this.handleChange} />
                                        
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category" value={category} onChange={this.handleChange} />
                    
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={description} onChange={this.handleChange} />
                    
                    <button className="primary-button" type="submit">Save Changes</button>
             </form> 
    </>
    )
  }
}

export default EditBookInput;