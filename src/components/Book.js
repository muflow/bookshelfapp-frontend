import React from 'react';

class Book extends React.Component {
  

  // handleCheckbox2 = (e) => {
  //   this.props.onCambia(this.props.id);
  // };

  // handleDelete = () => {
  //   this.props.onDelete(this.props.id);
  // };

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  render() {
    const { title, author } = this.props;
    // console.log(this.props.onCambia);
    return (
      <div className="border border-gray-600 p-4 flex items-center space-x-2">
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
      <select></select>
        
      </div>
    );
  }
}

export default Book;