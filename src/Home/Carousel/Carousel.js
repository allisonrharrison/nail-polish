import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class CarouselComponent extends React.Component {
  render() {
    return (
      <Carousel
        arrowLeft={<button>PREVIOUS</button>}
        arrowRight={<button>NEXT</button>}
        autoPlay={4000}
        animationSpeed={1000}
        infinite={true}
        stopAutoPlayOnHover={true}
        addArrowClickHandler={true}
      >
        <img src={"https://i.imgur.com/Y59LSyH.png"} alt="Snowed In Collection"/>
        <img src={"https://i.imgur.com/NCdzliy.png"} alt="Monarchy Collection"/>
        <img src={"https://i.imgur.com/jrNebZg.png"} alt="Nine to Five Collection"/>
      </Carousel>
    );
  }
}

export default CarouselComponent;
