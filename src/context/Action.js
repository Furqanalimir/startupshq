export const GetPosts = (variables) => ({
  type: 'GET_POSTS',
  payload: variables
});


export const Error = (error) => ({
  type: 'ERROR',
  payload: error
});

export const GetComments = (comments) => ({
  type: 'GET_COMMENTS',
  payoad: comments
})
