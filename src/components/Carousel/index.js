import "./style.css";
import React, { useEffect } from "react";
import { useState } from "react";
export default function Carousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  //Defines slide to navigate to
  const navigateSlides = (offset) => {
    const slides = document.querySelectorAll(".slide");
    const newCurrentSlide =
      (currentSlide + offset + slides.length) % slides.length;
    setCurrentSlide(newCurrentSlide);
  };
  //Updates slide after the async useState update
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      const translateValue = (index - currentSlide) * 100;
      slide.style.transform = `translateX(${translateValue}%)`;
    });
  }, [currentSlide]);

  return (
    <article class="slider">
      <section class="slide" style={{ transform: `translateX(0%)` }}>
        <a onClick={props.first}>
          <img src={"/images/Kitchen.png"} alt="Red Kitchen" />
          <p>
            Unlocking Flavor with Every Hue: Discover the Magic of Color Theory
            in Culinary Delights!
          </p>
        </a>
      </section>
      <section class="slide" style={{ transform: `translateX(100%)` }}>
        <a onClick={props.second}>
          <img src={"/images/Crostini.png"} alt="Red Kitchen" />
          <p>Tomato Crostini: A Bite of Pure Delight!</p>
        </a>
      </section>
      <section class="slide" style={{ transform: `translateX(200%)` }}>
        <a onClick={props.third}>
          <img src={"/images/Nutrition.png"} alt="Red Kitchen" />
          <p>
            Savoring Health: Unveiling the Easiest and Most Flavorful Path to
            Eating Well.
          </p>
        </a>
      </section>
      <button class="btn btn-next" onClick={() => navigateSlides(1)}>
        {">"}
      </button>
      <button class="btn btn-prev" onClick={() => navigateSlides(-1)}>
        {"<"}
      </button>
    </article>
  );
}
