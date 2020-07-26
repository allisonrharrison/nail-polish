import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
