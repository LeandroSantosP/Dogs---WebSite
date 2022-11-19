import React, { useContext, useEffect, useState } from 'react'
import styles from './PhotoComments.module.css'
import {userContext} from '../../UserContext'
import PhotoCommentForm from './PhotoCommentForm'

 const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments)
  const AutoScroll = React.useRef(null)
  const  {login} = useContext(userContext)
  
  useEffect(() => {
    AutoScroll.current.scrollTop = AutoScroll.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={AutoScroll} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentForm single={props.single} setComments={setComments} id={props.id}/>}
    </>
  )
}

export default PhotoComments
