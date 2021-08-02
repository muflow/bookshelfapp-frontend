import React from 'react';

import Navbar from '../components/Navbar';

import './Splashscreen.css';

import logo from '../imgs/bookshelf-logo.png'

class Splashscreen extends React.Component {
  render() {
    return(
      <>
      <div className="splash-container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p className="p-off">Take your readings everywhere</p>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      </>
    )
  }
}

export default Splashscreen;