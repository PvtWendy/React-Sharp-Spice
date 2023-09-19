import { useState } from "react";
import { usePosts } from "../../postsContext";
import "./style.css";
export default function ControlPanel() {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [option, setOption] = useState();
  const { posts, dispatch } = usePosts();
  const [imageUrl, setImageUrl] = useState();

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

  //Reducer fuction to delete post that holds the same title as index
  const deleteHandler = (index) => {
    dispatch({ type: "DeletePost", key: posts[index].title });
  };

  //State to receive Data from the form
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    shortPost: null,
    longPost: null,
  });

  //Reducer function to create a post
  const addHandler = event => {
    event.preventDefault()
    //Creates shortPost JSX from formData
    const shortPost = (
      <div>
        <h1>{formData.title}</h1>
        <p>{formData.largeText}</p>
      </div>
    );

    //Dispatches a reducer function to add Data from Form
    dispatch({
      type: "AddPost",
      data: {
        title: formData.title,
        image: imageUrl,
        shortPost: shortPost,
      },
    });

    //Resets formData after a dispatch
    setFormData({ title: "", image: null, shortPost: null, longPost: null });
    setImageUrl(null)
    //Closes Form after upload
    playAnimation(false);
  };

  //Reducer function to reset post
  const resetHandler = () => {
    alert("Posts returned to original state");
    dispatch({ type: "ResetPosts" });
  };

  //Returns a list of posts with return function
  const deletePostList = posts.map((props, index) => (
    <article>
      <p>{posts[index].title}</p>
      <button onClick={() => deleteHandler(index)}>X</button>
    </article>
  ));

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const newImageUrl = event.target.result;
      setImageUrl(newImageUrl);
      console.log(newImageUrl.data)
    };

    reader.readAsDataURL(file);
  };

  // Function to handle text input change
  const handleTitleChange = (e) => {
    // Set the title in the form data
    setFormData({
      ...formData,
      title: e.target.value,
    });
  };

  // Function to handle large text input change
  const handleShortPostChange = (e) => {
    // Set the large text in the form data
    setFormData({
      ...formData,
      largeText: e.target.value,
    });
  };
  //Function to render the Control option that the user selects
  const optionRenderer = () => {
    switch (option) {
      case "delete":
        return (
          <div>
            <div className="deleteContainer">
            {deletePostList}
            </div>
            
            <button
              className="closeControlPanel"
              onClick={() => playAnimation(false)}
            >
              Close
            </button>
            <button
              className="backControlPanel"
              onClick={() => setOption("default")}
            >
              Back
            </button>
          </div>
        );
      case "add":
        return (
          <div>
            <form onSubmit={addHandler}>
              {imageUrl ? (
                <section>
                  <h1>Image Preview</h1>
                  <img src={imageUrl} alt="Uploaded" />
                </section>
              ) : (
                <section>
                  {" "}
                  <label htmlFor="imageUpload" id="UploadButton"> Click here to upload image</label><br/>
                  <input
                  style={{visibility: "hidden", height: 0}}
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </section>
              )}
              <section>
                <label>Title:</label><br/>
                <input
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  required
                />
              </section>
              <section>
                <label>Short Post:</label><br/>
                <textarea
                  value={formData.largeText}
                  onChange={handleShortPostChange}
                  required
                />
              </section>
              <button type="submit">Create Post</button>
            </form>
            <button
              className="closeControlPanel"
              onClick={() => playAnimation(false)}
            >
              Close
            </button>
            <button
              className="backControlPanel"
              onClick={() => setOption("default")}
            >
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
            <button
              className="closeControlPanel"
              onClick={() => playAnimation(false)}
            >
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
