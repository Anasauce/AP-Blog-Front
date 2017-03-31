import React, { Component } from 'react';
import './SearchField.css';


class SearchField extends Component {
  render() {
    return (
      <form method="post">
        <input name="search" className="searchInputField" placeholder="search">
        </input>
      </form>
    );
  }
}

export default SearchField;
