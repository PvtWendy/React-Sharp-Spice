import "./style.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { usePosts } from "../../postsContext";
export default function Carousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { posts } = usePosts();

  //Defines slide to navigate to
  const navigateSlides = (offset) => {
    const slides = document.querySelectorAll(".slide");
    const newCurrentSlide = (currentSlide + offset + slides.length) % slides.length;
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
//TODO:Fix carousel breaking whenever there's less than 3 posts
  return (
    <article class="slider">
      
      <section class="slide" style={{ transform: `translateX(0%)` }}>
        <a onClick={props.first}>
          <img src={posts[0].image} alt="Red Kitchen" />
          <p>{posts[0].title}</p>
        </a>
      </section>
      <section class="slide" style={{ transform: `translateX(100%)` }}>
        <a onClick={props.second}>
          <img src={posts[1].image} alt="Red Kitchen" />
          <p>{posts[1].title}</p>
        </a>
      </section>
      <section class="slide" style={{ transform: `translateX(200%)` }}>
        <a onClick={props.third}>
          <img src={posts[2].image} alt="Red Kitchen" />
          <p>{posts[2].title}</p>
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
