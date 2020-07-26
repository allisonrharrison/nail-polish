import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar/SearchBar";
import HoverMenu from "./HoverMenu/HoverMenu";
import { menus } from "./menus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
      id: "",
      title: "",
      firstLink: "",
      secondLink: "",
      image: "",
    };
    this.displayMenu = this.displayMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.passPropsToMenu = this.passPropsToMenu.bind(this);
  }

  // Determine Which Menu to Display Based on Nav Item ID
  passPropsToMenu(event) {
    let id = event.target.id;
    switch (id) {
      case "nav-holographics":
        this.displayMenu(
          menus[0].id,
          menus[0].title,
          menus[0].firstLink,
          menus[0].secondLink,
          menus[0].image
        );
        break;
      case "nav-chromes":
        this.displayMenu(
          menus[1].id,
          menus[1].title,
          menus[1].firstLink,
          menus[1].secondLink,
          menus[1].image
        );
        break;
      case "nav-metallics":
        this.displayMenu(
          menus[2].id,
          menus[2].title,
          menus[2].firstLink,
          menus[2].secondLink,
          menus[2].image
        );
        break;
      case "nav-jellies":
        this.displayMenu(
          menus[3].id,
          menus[3].title,
          menus[3].firstLink,
          menus[3].secondLink,
          menus[0].image
        );
        break;
      case "nav-shimmers":
        this.displayMenu(
          menus[4].id,
          menus[4].title,
          menus[4].firstLink,
          menus[4].secondLink,
          menus[4].image
        );
        break;
      default:
        console.log("default");
    }
  }

  // Display Menu
  displayMenu(id, title, firstLink, secondLink, image) {
    this.setState({
      isDisplayed: true,
      id: id,
      title: title,
      firstLink: firstLink,
      secondLink: secondLink,
      image: image,
    });
    console.log(this.state.id);
  }

  // Hide Menu
  hideMenu() {
    this.setState({
      isDisplayed: false,
      id: "",
      title: "",
      firstLink: "",
      secondLink: "",
      image: "",
    });
    console.log(this.state.id);
  }

  render() {
    return (
      <div id="nav" onMouseLeave={this.hideMenu}>
        <div id="main-nav">
          <div id="nav-home">HOME</div>
          <div id="nav-all">ALL NAIL POLISH</div>
          <div id="nav-holographics" onMouseEnter={this.passPropsToMenu}>
            HOLOGRAPHICS
          </div>
          <div id="nav-chromes" onMouseEnter={this.passPropsToMenu}>
            ULTRA CHROMES
          </div>
          <div id="nav-metallics" onMouseEnter={this.passPropsToMenu}>
            ULTRA METALLICS
          </div>
          <div id="nav-jellies" onMouseEnter={this.passPropsToMenu}>
            JELLIES
          </div>
          <div id="nav-shimmers" onMouseEnter={this.passPropsToMenu}>
            SHIMMERS
          </div>
          <div id="nav-giftcards">GIFT CARDS</div>
          <SearchBar />
        </div>
        <div
          className="hover-menu"
          style={{ display: this.state.isDisplayed ? "block" : "none" }}
          onMouseLeave={this.hideMenu}
        >
          <HoverMenu
            id={this.state.id}
            title={this.state.title}
            firstLink={this.state.firstLink}
            secondLink={this.state.secondLink}
            image={this.state.image}
          />
        </div>
      </div>
    );
  }
}

export default Nav;
