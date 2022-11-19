import React, { useEffect } from 'react'
import UserHeaderNav from './UserHeaderNav'

import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

export const UserHeader = () => {
  const [tittle, setTitle] = React.useState('')
  const location = useLocation()

  useEffect(() => {
    setTitle(location.pathname)
    if("/conta" === location.pathname) setTitle('Minha Conta')
    else if("/conta/postar" === location.pathname) setTitle('Postagem')
    else if("/conta/estatisticas" === location.pathname) setTitle('Estatisticas')
  },[location])

  return (
    <header className={styles.header}>
      <h1 className='title'>{tittle}</h1>
      <UserHeaderNav />
    </header>
  )
}
