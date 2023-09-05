import Kitchen from "../../images/Kitchen.png";
import Crostini from "../../images/Crostini.png";
import Nutrition from "../../images/Nutrition.png";
import "./style.css";
import React from "react";
import { useState } from "react";
export default function Carousel(props) {
  const [currentSlide, setCurrentSlide] = useState(1);
  let thisSlide = currentSlide
  //Carousel function
  const navigateSlides = (offset) => {
    const slides = document.querySelectorAll(".slide");
    setCurrentSlide((currentSlide + offset + slides.length) % slides.length);
    
    console.log(currentSlide)
    
    slides.forEach((slide, index) => {
      const translateValue = (index - currentSlide) * 100;
      slide.style.transform = `translateX(${translateValue}%)`;
    });
  };

  return (
    <article class="slider">
      <section class="slide" style={{ transform: `translateX(0%)` }}>
        <a onClick={key => props.first(key)}>
          <img src={Kitchen} alt="Red Kitchen" />
          <p>
            Unlocking Flavor with Every Hue: Discover the Magic of Color Theory in Culinary
            Delights!
          </p>
        </a>
      </section>
      <section class="slide" style={{ transform: `translateX(100%)` }}>
        <a onClick={key => props.second(key)}>
          <img src={Crostini} alt="Red Kitchen" />
          <p>Tomato Crostini: A Bite of Pure Delight!</p>
        </a>
      </section>
      <section class="slide" style={{ transform: `translateX(200%)` }}>
        <a onClick={key => props.third(key)}>
          <img src={Nutrition} alt="Red Kitchen" />
          <p>Savoring Health: Unveiling the Easiest and Most Flavorful Path to Eating Well.</p>
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
