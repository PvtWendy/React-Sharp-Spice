import { useEffect, useRef, useState } from "react";
import { usePosts } from "../../postsContext";
import "./style.css";
export default function Article(props) {
  const { posts, dispatch } = usePosts();

  //Fadein Fadeout Animation
  const mountedStyle = {
    animation: "inAnimation 500ms ease-in",
  };
  const unmountedStyle = {
    animation: "outAnimation 500ms ease-out",
    animationFillMode: "forwards",
  };
  const scrollRef = useRef(null);

  //Effect to scroll to ref when the state of the current post changes
  useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" }, true);
      }
  },[posts[props.index].state]);

  //Function to open the current post
  const closeBtn = () => {
    dispatch({ type: "OpenPost", index:props.index});
  };

  /*
  Conditionally rendered component, only renders when the button wasn't pressed
  And renders left and right variants based on props.state property
  */

  if (!posts[props.index].state) {
    return (
      <article className={props.state == "left" ? "left" : "right"} style={posts[props.index].state ? unmountedStyle : null}>
        <img src={props.image} />
        <div>
          {props.text}
          <button onClick={() => closeBtn()}>Read More</button>
        </div>
      </article>
    );
  }else {
    return (
      <div ref={scrollRef} style={posts[props.index].state ? mountedStyle : null}>
        <article className="articlePosts">
          <img src={props.image}></img>
          <h1>{props.title}</h1>
          {props.full}
        </article>
      </div>
    );
  }
}
