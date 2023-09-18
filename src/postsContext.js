import { createContext, useContext, useReducer } from "react";
import { initialPosts } from "./initialPosts";
//Creates Context and calls initialStates
const PostsContext = createContext();
const initialState = initialPosts;
//Function to be able to call posts anywhere
export const usePosts = () => {
  return useContext(PostsContext);
};

//Anything wrapped in this can use the Posts Context
export const PostsProvider = ({ children }) => {
  //Handles Actions related  to state
  const reducer = (state, action) => {
    switch (action.type) {
      case "DeletePost":
        const prevstate = state;
        const newState = prevstate.filter((a) => a.title != action.key);
        return newState;
        break;
      case "AddPost":
        console.log("post added");
        break;
      case "ResetPosts":
        state = initialPosts;
      default:
        break;
    }
    //TODO: action handlers
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostsContext.Provider value={{ posts: state, dispatch }}>{children}</PostsContext.Provider>
  );
};
