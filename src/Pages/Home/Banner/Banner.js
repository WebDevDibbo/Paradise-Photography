import React from "react";
import img1 from "../../../assets/slider1.jpg";
import img2 from "../../../assets/slider2.jpg";
import img3 from "../../../assets/slider3.jpg";
import img4 from "../../../assets/slider4.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="slider-img">
            <img src={img1} className="w-full banner rounded-lg" alt="" />
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h1 className="md:text-3xl lg:text-4xl font-bold text-white ">
              I Specialize in Wedding Photography and <br /> also love
              photographing couples and families
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="slider-img">
            <img src={img2} className="w-full banner rounded-lg" alt="" />
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h1 className="md:text-3xl lg:text-4xl  font-bold text-white ">
              I Specialize in Wedding Photography and <br /> also love
              photographing couples and families
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="slider-img">
            <img src={img3} className="w-full banner rounded-lg" alt="" />
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h1 className="md:text-3xl lg:text-4xl font-bold text-white ">
              I Specialize in Wedding Photography and <br /> also love
              photographing couples and families
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="slider-img">
            <img src={img4} className="w-full banner rounded-lg" alt="" />
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h1 className="md:text-3xl lg:text-4xl font-bold text-white ">
              I Specialize in Wedding Photography and <br /> also love
              photographing couples and families
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
