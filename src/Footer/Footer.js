import React from 'react';
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="customer-service">
          <p>CUSTOMER SERVICE</p>
          <a href="">Customer Service Home</a>
          <a href="">Shipping Information</a>
          <a href="">Tracking Orders</a>
          <a href="">Lost or Damaged Goods</a>
          <a href="">Returns & Exchanges</a>
          <a href="">Frequently Asked Questions</a>
          <a href="">Contact Us</a>
        </div>
        <div id="information">
          <p>INFORMATION</p>
        <a href="">Our Cruelty Free / Vegan Policy</a>
        <a href="">Free Shipping</a>
        <a href="">Nail & Beauty Bloggers</a>
        <a href="">Wholesale</a>
        </div>
        <div id="my-account">
          <p>MY ACCOUNT</p>
          <a href="">My Account</a>
          <a href="">My Orders</a>
          <a href="">My Address Book</a>
          <a href="">My Reward</a>
          <a href="">My Wishlist</a>
          <a href="">Check Gift Card Balance</a>
        </div>
        <div id="other">
          <p>&nbsp;</p>
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
          <a href="">Disclaimer</a>
          <a href="">Sitemap</a>
          <a href="">Cookies</a>
        </div>
        <div id="follow-us">
          <p>Follow us on</p>
          <p>icons</p>
        </div>
      </div>
    )
  }
};

export default Footer;