import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div id="search-bar">
        <input type="text" id="search-input" defaultValue="FIND YOUR POLISH"/>
        <button>GO</button>
      </div>
    )
  }
};

export default SearchBar;