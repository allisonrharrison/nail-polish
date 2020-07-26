import React from "react";
import "./HoverMenu.css";

class HoverMenu extends React.Component {

  render() {
    return (
      <div className="hover-menu">
        <ul>
          <li>
            <h2>{this.props.title}</h2>
          </li>
          <li>&nbsp;</li>
          <li>{this.props.firstLink}</li>
          <li>{this.props.secondLink}</li>
          <li>&nbsp;</li>
          <li>VIEW FULL COLLECTION</li>
        </ul>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default HoverMenu;
