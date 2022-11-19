import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { userContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdionarFotos } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import useMidia from '../../Hooks/useMidia'


import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
   const { userLoginOut } = React.useContext(userContext)
   const mobile = useMidia('(max-width: 40rem')
   const [mobileMenu, setMobileMenu] = useState(false)

   const {pathname} = useLocation()
   useEffect(() => {
      setMobileMenu(false)
   },[pathname])


   return (
      <>
         {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}></button>}

         <nav className={` ${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive} `}>
            <NavLink to='/conta' end > <MinhasFotos /> {mobile && 'Minhas Fotos'}</ NavLink>
            <NavLink to='/conta/postar'> <AdionarFotos /> {mobile && 'Adicionar Fotos'}</NavLink>
            <NavLink to='/conta/estatisticas'><Estatisticas /> {mobile && 'Estatisticas'}</NavLink>
            <button onClick={userLoginOut}><Sair />{mobile && 'Sair'}</button>
         </nav>
      </>
   )
}

export default UserHeaderNav