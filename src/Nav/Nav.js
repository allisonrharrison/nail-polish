import React from 'react';
import "./Nav.css";
import SearchBar from "./SearchBar/SearchBar";

class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <div>HOME</div>
        <div>ALL NAIL POLISH</div>
        <div>ULTRA CHROMES</div>
        <div>ULTRA METALLICS</div>
        <div>JELLIES</div>
        <div>SHIMMERS</div>
        <div>GIFT CARDS</div>
        <SearchBar />
      </div>
    )
  }
};

export default Nav;