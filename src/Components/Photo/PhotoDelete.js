import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({id}) => {
   const {request, loading} = useFetch()


   async function handleClick() {
      const confirm = window.confirm('Tem certeza que deseja deletar?')
      if(confirm) {
         const {url, options} = PHOTO_DELETE(id)
         const {response} = await request(url, options)
         if(response.ok) window.location.reload() 
         console.log(response)
      }
   }

  return (
    <>
      {loading ?  ( <button disabled className={styles.delete}>Deletando...</button>) : (
      <button onClick={handleClick} className={styles.delete}>Deletar</button>
      )}
    </>
  )
}

export default PhotoDelete