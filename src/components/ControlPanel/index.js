import { useState } from "react";
import { usePosts } from "../../postsContext";
import "./style.css";
export default function ControlPanel() {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const {posts,dispatch} = usePosts();
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
  const clickHandler = index=>{dispatch({type: "DeletePost", key: posts[index].title})}
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
  const postList = posts.map((props, index)=>(  
    <article>
      <p>{posts[index].title}</p>
      <button onClick={()=>clickHandler(index)}>X</button>
    </article>
  ))

  if (open == true) {
    return (
      <section className="ControlPanel" style={style(play)}>
        <div>
          {postList}
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
