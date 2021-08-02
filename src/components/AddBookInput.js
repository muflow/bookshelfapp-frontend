import React, { Component } from 'react';
import apiClient from '../lib/apiClient';
import { Link } from 'react-router-dom';

// import { withRouter } from "react-router-dom";


class AddBookInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      category: "",
      description: "",
      imgUrl: ""
    };
  };
  

    handleSubmit = async (event) => {
        event.preventDefault();
        const { title, author, category, description, imgUrl } = this.state;
        try{
          await apiClient.createBook({title, author, category, description, imgUrl});
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
    const { title, author, description, imgUrl, category } = this.state;
    return (
      <>
      <Link to="/books" style={{ textDecoration: 'none' }}><i className="fa fa-angle-left fa-2x" aria-hidden="true"></i></Link>
      <h1>Add a new book</h1>
      <form className="create-book" onSubmit={this.handleSubmit}>
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
                    

                    {/* <label htmlFor='category'>Category</label>
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
                    <br/> */}

                    {/* <label htmlFor='description'>Description</label>
                    <textarea type='text' rows='4' cols='40' id='description' name='description' value={description}></textarea> */}
                    
                    
                    <button className="primary-button" type="submit">Add new book</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
             </form>
             </>
    )
  }
};

export default AddBookInput;