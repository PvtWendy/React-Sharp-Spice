import { forwardRef, useEffect, useRef, useState } from "react";
import { posts } from "../../posts";
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

  const mountedStyle = {
    animation: "inAnimation 500ms ease-in",
  };
  const unmountedStyle = {
    animation: "outAnimation 500ms ease-out",
    animationFillMode: "forwards",
  };
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" }, true);
    }
  });
  const closeBtn = () => {
    setClose(true);
    setTimeout(() => {
      setOpen(true);
    }, 500);
  };

  if (props.state === "left" && open == false) {
    return (
      <article id={props.key} style={close ? unmountedStyle : null}>
        <img src={props.image} />
        <div>
          {props.text}
          <button onClick={() => closeBtn()}>Read More</button>
        </div>
      </article>
    );
  } else if (props.state === "right" && open == false) {
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
      <div ref={scrollRef} style={open && mountedStyle}>
        {props.full}
      </div>
    );
  }
}
