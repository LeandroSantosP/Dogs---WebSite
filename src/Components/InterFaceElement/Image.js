import React, { useState } from 'react'
import styles from './Image.module.css'
const Image = ({alt, ...props}) => {

   const [skeleton, setSkeleton] = useState(true)


   function handleLoad({target}) {
      target.style.opacity = 1
      setSkeleton(false)
   }

  return (
    <div className={styles.whapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props}/>
    </div>
  )
}

export default Image