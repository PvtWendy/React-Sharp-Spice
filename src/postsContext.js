import { createContext, useContext, useReducer } from "react";
import { initialPosts } from "./initialPosts";

const PostsContext = createContext();
const initialState = initialPosts
export const usePosts = () => {
  return useContext(PostsContext);
};

export const PostsProvider = ({ children }) => {
  const reducer = (state, action) => {
    //TODO: action handlers
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return(
    <PostsContext.Provider value={{posts:state, dispatch}}>
        {children}
    </PostsContext.Provider>
  )
};
