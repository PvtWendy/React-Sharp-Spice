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
        const prevState = state;
        const newState = [...prevState].filter((a) => a.title !== action.key);
        return newState;
      case "OpenPost":
        const invertedState = state.map((post, index) => {
          if (index === action.index) {
            return { ...post, state: true };
          } else {
            return post;
          }
        });
        return invertedState;
      case "AddPost":
        return [...state, action.data]
        break;
      case "ResetPosts":
        console.log(initialPosts);
        return initialPosts;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostsContext.Provider value={{ posts: state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
