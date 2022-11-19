import React from 'react'
import Feed from './Feed/Feed'
import Head from './InterFaceElement/Head'

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Fotos ' description="Feed de fotos, do site Dogs"/>
      <Feed />
    </section>
  )
}

export default Home