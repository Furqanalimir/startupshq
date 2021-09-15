import axios from 'axios'

export const getPosts = async (dispatch) => {
  try
  {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: 'GET_POSTS',
      payload: data
    })
  } catch (err)
  {
    dispatch({
      type: 'ERROR',
      payload: err
    })
  }
}

export const getComments = async (id, dispatch) => {
  try
  {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    dispatch({
      type: 'GET_COMMENTS',
      payload: data
    })
  } catch (err)
  {
    dispatch({
      type: 'ERROR',
      payload: err
    })
  }
}