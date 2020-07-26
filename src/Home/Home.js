import React from "react";
import "./Home.css";
import CarouselComponent from "./Carousel/Carousel";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <CarouselComponent />
      </div>
    );
  }
}

export default Home;
