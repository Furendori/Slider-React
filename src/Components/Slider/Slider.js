import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setslideIndex] = useState(1);
  const [slideTimeOut, setSlideTimeOut] = useState(false);

  const nextSlide = () => {
    if (slideTimeOut === false) {
      setSlideTimeOut(true);
      if (slideIndex !== dataSlider.length) {
        setslideIndex(slideIndex + 1);
      } else if (slideIndex === dataSlider.length) {
        setslideIndex(1);
      }
      setTimeout(() => {
        setSlideTimeOut(false);
      }, "2000");
    }
  };

  const prevSlide = () => {
    if (slideTimeOut === false) {
      setSlideTimeOut(true);
      if (slideIndex !== 1) {
        setslideIndex(slideIndex - 1);
      } else if (slideIndex === 1) {
        setslideIndex(dataSlider.length);
      }
      setTimeout(() => {
        setSlideTimeOut(false);
      }, "2000");
    }
  };

  const moveDot = (index) => {
    setslideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={obj.id}
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt=""
            />
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
