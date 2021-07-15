// import React, { Component } from 'react';

// // import apiClient from '../lib/apiClient';

// class AddBookInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       author: ''
//     };
//   };

//   handleChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
    
//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit = event => {
//         event.preventDefault();
//         const { title,
//                 author } = this.state

//         axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
//             name,
//             tagline, 
//             description, 
//             first_brewed, 
//             brewers_tips, 
//             attenuation_level,
//             contributed_by
//         })
//         .then(response => {
//             this.setState({
//                 name: '',
//                 tagline: '',
//                 description: '',
//                 first_brewed: '',
//                 brewers_tips: '',
//                 attenuation_level: 0,
//                 contributed_by: ''
//             })
//             console.log(response)
//         })
//         .catch(err => console.log(err))
        
//     }
  

//   render() {
//     return (
      
    
    
//       <form onSubmit={this.handleSubmit}>
//                     <label htmlFor="title">Title</label>
//                     <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
//                     <br/>

//                     <label htmlFor="author">Author</label>
//                     <input type="text" name="author" id="author" value={this.state.author} onChange={this.handleChange} />
//                     <br/>
//                     <button type="submit">Add new book</button>
//              </form>  
//     )
//   }
// };

// export default AddBookInput;