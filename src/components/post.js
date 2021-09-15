import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import { Link } from 'react-router-dom';
import { getComments } from '../apiCals'

function Post({ id, title, body }) {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    getComments(id, dispatch)
  }, [])

  return (
    <div className='post'>
      <div className='post-body'>
        <h1 className='title'>{title}</h1>
        <p className='body'>{body}</p>
      </div>
      <div className='post-btn'>
        <Link to='/comments' className='btn link'>Click here to see comments</Link>
      </div>
    </div>
  )
}

export default Post;