import React, { Fragment, useContext } from 'react'
import { Context } from '../context/Context'
import Comment from './comment';


const ListComment = () => {
  const { comments } = useContext(Context);

  return (
    <Fragment>
      <h1 className='head'>Comments</h1>
      <Comment />
      <div className="list">
        {
          comments === undefined || comments === null || comments === [] ? (
            <h1 className="no-id">
              Select a post first
            </h1>
          ) : (comments.map(comment => <Comment key={comment.id}
            {...comment}
            name={comment.name}
            body={comment.body}
          />))
        }
      </div>
    </Fragment>
  )
}
export default ListComment;