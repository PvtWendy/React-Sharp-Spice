import { useEffect, useRef, useState } from "react";
import { usePosts } from "../../postsContext";
import "./style.css";
export default function Article(props) {
  const [articleOpen, setArticleOpen] = useState(props.open);
  const [close, setClose] = useState(false);
  //Fadein Fadeout Animation
  const mountedStyle = {
    animation: "inAnimation 500ms ease-in",
  };
  const unmountedStyle = {
    animation: "outAnimation 500ms ease-out",
    animationFillMode: "forwards",
  };
  const scrollRef = useRef(null);

  //Effect to scroll to ref when component changes
  useEffect(() => {
    if (props.open != null && props.open == true) {
      setArticleOpen(props.open);
    }
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" }, true);
    }
  });
  //Function to play Fadeout animation and setup Fadein
  const closeBtn = () => {
    setClose(true);
    setTimeout(() => {
      //Only allows one setOpen to update, or else ref becomes latest instance
      if (props.setOpen != null) {
        props.setOpen(true);
      } else {
        setArticleOpen(true);
      }
    }, 500);
  };

  /*
  Conditionally rendered component, only renders when the button wasn't pressed
  And renders left and right variants based on props.state property
  */
  if (articleOpen == false) {
    return (
      <article className={props.state == "left" ? "left" : "right"} style={close ? unmountedStyle : null}>
        <img src={props.image} />
        <div>
          {props.text}
          <button onClick={() => closeBtn()}>Read More</button>
        </div>
      </article>
    );
  }else {
    return (
      <div ref={scrollRef} style={articleOpen && mountedStyle}>
        <article className="articlePosts">
          <img src={props.image}></img>
          <h1>{props.title}</h1>
          {props.full}
        </article>
      </div>
    );
  }
}
