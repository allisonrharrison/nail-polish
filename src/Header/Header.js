import React from 'react';
import './Header.css';
import { Row } from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="social-media">
          <p>icons</p>
          <p>follow us on social media</p>
        </div>
        <div id="logo">
          <h1>ILNP</h1>
          <p>Boutique Nail Polish</p>
        </div>
        <div id="user-portal">
          <p>icons</p>
          <p>Compare My Cart Account</p>
        </div>
      </div>
    )
  };
}

export default Header;