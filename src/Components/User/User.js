import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { userContext } from '../../UserContext'
import Feed from '../Feed/Feed';
import Head from '../InterFaceElement/Head';
import NotFound from '../NotFound';
import { UserHeader } from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {

    const { login, data } = useContext(userContext)
 
  if (login === false) return <Navigate to="/login" />;
  else 
  return (
    <section className='container'>
      <Head title="Minha Conta "/>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='/postar' element={<UserPhotoPost />}/>
        <Route path='/estatisticas' element={<UserStats />}/>
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </section>
  )
}

export default User