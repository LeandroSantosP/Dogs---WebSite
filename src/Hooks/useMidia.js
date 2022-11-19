import{ useEffect, useState } from 'react'

const useMidia = (media) => {
   const [match, setMatch] = useState(null)

   useEffect(() => {
      function changeMetch() {
         const {matches} =  window.matchMedia(media)
         setMatch(matches)
      }
      changeMetch()
      window.addEventListener('resize', changeMetch)
      return () => {
         window.removeEventListener('resize', changeMetch)
      }
   }, [media])


  return match
}

export default useMidia