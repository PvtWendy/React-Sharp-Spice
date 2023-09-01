import { useState } from "react";
import { posts } from "../../posts";
import "./style.css"

import Crostini from "../../images/Crostini.png";
import Kitchen from "../../images/Kitchen.png";
import Nutrition from "../..//images/Nutrition.png";
import Presentation from "../../images/Presentation.png";
import Airfryer from "../../images/Airfryer.png";
export default function Article(props) {
  const [open, setOpen] = useState(false);
  if (props.state === "left" && open == false) {
    return (
      <article id={props.key}>
        <img src={props.image} />
        <div>
          {props.text}
          <button onClick={() => setOpen(true)}>Read More</button>
        </div>
      </article>
    );
  } else if (props.state === "right" && open == false) {
    return (
      <article id={props.key}>
        <div>
          {props.text}
          <button onClick={() => setOpen(true)}>Read More</button>
        </div>
        <img src={props.image} />
      </article>
    );
  } else {
    return(props.full)
  }
}
