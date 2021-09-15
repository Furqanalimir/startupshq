import { createContext, useReducer } from 'react';
import GlobalReducer from './Reducer';

const initialState = {
  posts: null,
  postId: 1,
  comments: null,
  isLoading: false,
  errors: null
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(GlobalReducer, initialState);

  return (
    <Context.Provider value={{
      posts: state.posts,
      comments: state.comments,
      isLoading: state.isLoading,
      errors: state.errors,
      postId: state.postId,
      dispatch
    }}
    >
      {children}
    </Context.Provider>
  )
}
