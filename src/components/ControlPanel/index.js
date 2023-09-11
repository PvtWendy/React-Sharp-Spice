import { useState } from "react";
import "./style.css";
export default function ControlPanel() {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const style = (state) => {
    if (state) {
      return {
        animation: "inAnimation 200ms ease-in",
      };
    } else {
      return {
        animation: "outAnimation 500ms ease-out",
        animationFillMode: "forwards",
      };
    }
  };
  const playAnimation = (state) => {
    if (state) {
      setPlay(state);
      setOpen(state);
    } else {
      setPlay(state);
      setTimeout(() => {
        setOpen(state);
      }, 200);
    }
  };
  if (open == true) {
    return (
      <section className="ControlPanel" style={style(play)}>
        <div>
          <button
            className="closeControlPanel"
            onClick={() => playAnimation(false)}
          >
            Close
          </button>
        </div>
      </section>
    );
  } else {
    return (
      <button
        className="openControlPanel"
        style={style(!play)}
        onClick={() => playAnimation(true)}
      >
        Control Panel
      </button>
    );
  }
}
