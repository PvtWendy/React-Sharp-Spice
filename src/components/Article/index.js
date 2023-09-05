import { useEffect, useRef, useState } from "react";
import "./style.css";

import Crostini from "../../images/Crostini.png";
import Kitchen from "../../images/Kitchen.png";
import Nutrition from "../..//images/Nutrition.png";
import Presentation from "../../images/Presentation.png";
import Airfryer from "../../images/Airfryer.png";
import userEvent from "@testing-library/user-event";

export default function Article(props) {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  //Fadein Fadeout Animation
  const fadeIn = {
    animation: "inAnimation 500ms ease-in",
  };
  const fadeOut = {
    animation: "outAnimation 500ms ease-out",
    animationFillMode: "forwards",
  };
  const scrollRef = useRef(null);
  //Effect to scroll to ref when component changes
  useEffect(() => {
    if (open != true) {
      setOpen(props.open)  
    }
    
    if (scrollRef.current) {
      console.log(scrollRef.current)
      scrollRef.current.scrollIntoView({ behavior: "smooth" }, true);
    }
  });
  //Function to play Fadeout animation and setup Fadein
  const closeBtn = () => {
    setClose(true);
    setTimeout(() => {
      setOpen(true);
    }, 500);
  };

  /*
  Conditionally rendered component, only renders when the button wasn't pressed
  And renders left and right variants based on props.state property
  */
  if (props.state === "left" && open == false) {
    return (
      <article id={props.key} style={close ? fadeOut : null}>
        <img src={props.image} />
        <div>
          {props.text}
          <button onClick={() => closeBtn()}>Read More</button>
        </div>
      </article>
    );
  } else if (props.state === "right" && open == false) {
    return (
      <article id={props.key} style={close ? fadeOut : null}>
        <div>
          {props.text}
          <button onClick={() => closeBtn()}>Read More</button>
        </div>
        <img src={props.image} />
      </article>
    );
  } else {
    return (
      <div ref={scrollRef} style={open && fadeIn}>
        {props.full}
      </div>
    );
  }
}
