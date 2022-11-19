import React, { useEffect, useState } from 'react'
import Head from '../InterFaceElement/Head'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'


const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  const [ifinity, setIfinity] = useState(true)

useEffect(() => {
    let wait = false;
    function ifinityScroll() {
      if(ifinity) {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if(scroll > height * .75 && !wait) {
      setPages((pages) => [...pages, pages.length + 1]);
      wait = true
      setTimeout(() => {
        wait = false
        }, 500)
      }
    }
  }
    window.addEventListener('wheel', ifinityScroll)
    window.addEventListener('sroll', ifinityScroll)
    return () => {
      window.removeEventListener('wheel', ifinityScroll)
      window.removeEventListener('sroll', ifinityScroll)
    }
  },[ifinity])

  return (
    <div >
 
      {modalPhoto && (
        <FeedModal  photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map(page => 
      <FeedPhotos 
        setIfinity={setIfinity} 
        key={page} 
        user={user} 
        page={page} 
        setModalPhoto={setModalPhoto} />)}
    </div>
  )
}

export default Feed