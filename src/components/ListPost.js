import React, { Fragment, useEffect, useContext } from 'react'
import { Context } from '../context/Context';
import { getPosts } from '../apiCals';
import Post from './post';

function ListPost() {

  const { posts, dispatch } = useContext(Context);

  useEffect(() => {
    getPosts(dispatch)
  }, [ dispatch ])

  return (
    <Fragment>
      <h1 className="head"> Posts </h1>
      <div className="list">
        {
          posts === null ? <h1 className='no-id'> Reload</h1> :
            posts.map((item) => (<Post key={item.id}  {...item} />))
        }
      </div>
    </Fragment>
  )
}

export default ListPost;