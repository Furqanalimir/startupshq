import React from 'react'

const Comment = ({ postId, name, body }) => {

  return (
    name === undefined ? '' :
      <div className='comment'>
        <h1 className='comment-name'>{name}</h1>
        <p className='comment-body'>{body}</p>
      </div>
  )
}

export default Comment;