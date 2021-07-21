import React, { Component } from 'react';
import apiClient from '../lib/apiClient';

// import { withRouter } from "react-router-dom";


class AddBookInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: ""
    };
  };
  

    handleSubmit = async (event) => {
        event.preventDefault();
        const { title, author } = this.state;
         
        try{
          // apiClient.createBook({title, author}).then((book) =>
          //   console.log('Founded book:', book); // haz un redirect a la home
          // );
          // z.then((book) =>
          const newBook = await apiClient.createBook({title, author});
          console.log(newBook);
      }
        catch (error) {
          console.log(error)
        } finally {
        
          this.props.history.push("/home");
        }
        
    }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, author } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" value={author} onChange={this.handleChange} />
                    <br/>
                    <button type="submit">Add new book</button>
             </form>  
    )
  }
};

export default AddBookInput;