import React, { Component } from 'react';
import SearchField from './SearchField'
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="NavbarLeft">
          <h1>A&P</h1>
          <SearchField />
        </div>
        <div className="NavbarRight">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Blog</h3>
          <h3>Content</h3>
        </div>
      </div>
    );
  }
}

export default Navbar;
