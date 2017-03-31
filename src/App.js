import React, { Component } from 'react';
import Navbar from './Navbar'
import BlogEnry from './BlogEntry'
import './App.css';


class App extends Component {
  render() {
    return (
      <Navbar />
      <BlogEntry />
    );
  }
}

export default App;
