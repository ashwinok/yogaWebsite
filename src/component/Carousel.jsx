import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import "../cssStyling/carousel.css"


const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return (
        <section >
        <h1 className="car-heading">Recommended Courses for You</h1>
        <div className="carousel-container">
            <div>
                <Slider {...settings}>
                    {Sdata.map((d) => (
                        <div className="carousel-card-container">
                            <div className="card">
                                <img src={d.source} alt="pic" className="card-image"/>
                                <div className="card-body">
                                    <h5 className="card-title">{d.title}</h5>
                                    <p className="card-description">{d.description}</p>
                                    <p className="card-price">{d.price}</p>
                                    <a href="hh" className="buy-now-link">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>    
            </div>
        </div>
        </section>
    )
}
export default Carousel;