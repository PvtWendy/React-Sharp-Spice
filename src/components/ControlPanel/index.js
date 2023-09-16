import { useState } from "react";
import { usePosts } from "../../postsContext";
import "./style.css";
export default function ControlPanel() {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [option, setOption] = useState();
  const { posts, dispatch } = usePosts();

  //Defines animation to play
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

  //Reducer fuction to delete post that holds the same title as index
  const deleteHandler = (index) => {
    dispatch({ type: "DeletePost", key: posts[index].title });
  };
  //Reducer function to create a post
  const addHandler = () => {
    dispatch({ type: "AddPost" });
  };
  //Reducer function to reset post
  const resetHandler = () => {
    alert("Posts returned to original state");
    dispatch({ type: "ResetPosts" });
  };
  //Makes animation play
  const playAnimation = (state) => {
    if (state) {
      setPlay(state);
      setOpen(state);
    } else {
      setPlay(state);
      setTimeout(() => {
        setOpen(state);
        setOption(null);
      }, 200);
    }
  };
  //Returns a list of posts with return function
  const deletePostList = posts.map((props, index) => (
    <article>
      <p>{posts[index].title}</p>
      <button onClick={() => deleteHandler(index)}>X</button>
    </article>
  ));
  //Function to render the Control option that the user selects
  const optionRenderer = () => {
    switch (option) {
      case "delete":
        return (
          <div>
            {deletePostList}
            <button className="closeControlPanel" onClick={() => playAnimation(false)}>
              Close
            </button>
            <button className="backControlPanel" onClick={() => setOption("default")}>
              Back
            </button>
          </div>
        );
      case "add":
        return (
          <div>
            <button className="closeControlPanel" onClick={() => playAnimation(false)}>
              Close
            </button>
            <button className="backControlPanel" onClick={() => setOption("default")}>
              Back
            </button>
          </div>
        );
      default:
        return (
          <div>
            <button onClick={() => setOption("delete")}>Delete Post</button>
            <button onClick={() => setOption("add")}>Add Post</button>
            <button onClick={() => resetHandler()}>Reset Posts</button>
            <button className="closeControlPanel" onClick={() => playAnimation(false)}>
              Close
            </button>
          </div>
        );
    }
  };
  //Conditional rendering of control panel
  if (open == true) {
    return (
      <section className="ControlPanel" style={style(play)}>
        {optionRenderer()}
      </section>
    );
  } else {
    return (
      <button className="openControlPanel" style={style(!play)} onClick={() => playAnimation(true)}>
        Control Panel
      </button>
    );
  }
}
