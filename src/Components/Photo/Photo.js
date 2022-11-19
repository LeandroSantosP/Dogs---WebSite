import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Erro from '../InterFaceElement/Erro'
import Head from '../InterFaceElement/Head'
import Loading from '../InterFaceElement/Loading'
import PhotoContent from '../Photo/PhotoContent'

const Photo = () => {

  const {id} = useParams()
  const {data, loading, error, request} = useFetch()
  useEffect(() => {
    const {url, options} = PHOTO_GET(id)
    request(url, options)
  }, [request, id])


  if(error) return <Erro />
  if(loading) return <Loading />
  if(data) return (
  <section className='container mainContainer'>
      <Head title={data.photo.title}/>
      <PhotoContent single={true} data={data} />
  </section>
  )
  else return null
}

export default Photo