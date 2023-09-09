import { useEffect, useRef, useState } from "react";
import "./style.css";

import Crostini from "../../images/Crostini.png";
import Kitchen from "../../images/Kitchen.png";
import Nutrition from "../..//images/Nutrition.png";
import Presentation from "../../images/Presentation.png";
import Airfryer from "../../images/Airfryer.png";

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
  if (props.state === "left" && articleOpen == false) {
    return (
      <article id={props.key} style={close ? unmountedStyle : null}>
        <img src={props.image} />
        <div>
          {props.text}
          <button onClick={() => closeBtn()}>Read More</button>
        </div>
      </article>
    );
  } else if (props.state === "right" && articleOpen == false) {
    return (
      <article id={props.key} style={close ? unmountedStyle : null}>
        <div>
          {props.text}
          <button onClick={() => closeBtn()}>Read More</button>
        </div>
        <img src={props.image} />
      </article>
    );
  } else {
    return (
      <div ref={scrollRef} style={articleOpen && mountedStyle}>
        {props.full}
      </div>
    );
  }
}
