import React, { useEffect, useState } from 'react'
import { PHOTOS_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Erro from '../InterFaceElement/Erro'
import Loading from '../InterFaceElement/Loading'
import FeedPhotosItem from './FeedPhotosItem'

import styles from './FeedPhotos.module.css'
import Button from '../Forms/Button'
import { useNavigate } from 'react-router-dom'

const FeedPhotos = ({setModalPhoto, user, page, setIfinity}) => {
  const { data, loading, error, request } = useFetch()
  const [nopic, setNopic] = useState(false)
  const nativage = useNavigate()

  useEffect(() => {
    async function fecthPhotos() {
      let total = 6
      const { url, options } = PHOTOS_GET({ page, total, user});
      const { json, response } = await request(url, options)
      if(response && response.ok && json.length < total) setIfinity(false)
      if(json.length === 0) setNopic(true)
    }
    fecthPhotos()
  }, [request, user,page,setIfinity])


  function handlePost() {
    nativage('/conta/postar')
  }
  if (error) return <Erro error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
            {nopic && 
            <div className={styles.nopic}>
              <p className={styles.feedback}>Voçẽ Ainda não tem fotos.</p>
              <p className={styles.btn}><Button onClick={handlePost}>Potar!</Button></p>
            </div>}
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
            />
            ))}
        </ul>
      </>
    );
  else return null;
}

export default FeedPhotos