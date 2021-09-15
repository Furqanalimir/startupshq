const GlobalReducer = (state, action) => {

  const { type, payload } = action;
  switch (type)
  {
    case 'GET_POSTS':
      return {
        ...state,
        loading: false,
        posts: payload
      };
    case 'GET_COMMENTS':
      return {
        ...state,
        loading: false,
        comments: payload
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default GlobalReducer;