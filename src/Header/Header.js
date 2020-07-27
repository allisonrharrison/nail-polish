import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="social-media">
          <div className="social-icons">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <FontAwesomeIcon icon={['fab', 'facebook']} />
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <FontAwesomeIcon icon={['fab', 'youtube']} />
          <FontAwesomeIcon icon={['fab', 'pinterest']} />
          </div>
          <div id="follow-us">
          <p>connect with us on social media</p>
          </div>
        </div>
        <div id="logo">
          <div>
          <h3 id="ilnp">ILNP</h3>
          </div>
          <div>
          <p id="boutique">Boutique Cosmetics</p>
          </div>
        </div>
        <div id="user-portal">
          <div id="compare">
          <FontAwesomeIcon icon="balance-scale" />
          <p>Compare</p>
          </div>
          <div id="cart">
          <FontAwesomeIcon icon="shopping-cart" />
          <p>My Cart</p>
          </div>
          <div id="account">
          <FontAwesomeIcon icon="user" />
          <p>Account <FontAwesomeIcon icon="angle-down" /> </p>
          </div>
          </div>
        </div>
    );
  }
}

export default Header;
