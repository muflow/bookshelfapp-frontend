import React, { Component } from 'react';
import apiClient from '../lib/apiClient';

// import { withRouter } from "react-router-dom";


class AddBookInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
    };
  };
  

    handleSubmit = async (event) => {
        event.preventDefault();
        const { title, author } = this.state;
        try{
          await apiClient.createBook({title, author});
          
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
      <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />
                    <br/><br/>

                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" value={author} onChange={this.handleChange} />
                    <br/>

                    <label htmlFor='category'>Category</label>
                    <select className="select-category" name='category' id='category'>
                      <option value=' '>--</option>
                      <option value='Art'>Art</option>
                      <option value='Biography'>Biography</option>
                      <option value='Comics'>Comics</option>
                      <option value='Crime'>Crime</option>
                      <option value='Fantasy'>Fantasy</option>
                      <option value='Thriller'>Thriller</option>
                      <option value='Travel'>Travel</option>
                    </select>
                    <br/>

                    <label htmlFor='description'>Description</label>
                    <textarea type='text' rows='4' cols='40' id='description' name='description'></textarea>
                    
                    <br/><br/>
                    <button type="submit">Add new book</button>
             </form>  
    )
  }
};

export default AddBookInput;