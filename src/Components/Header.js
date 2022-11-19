import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'
import { userContext } from '../UserContext'

const Header = () => {
  const { data } = React.useContext(userContext);


  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/"  aria-label='Dogs | Home'>
        <Dogs />
        </Link>
        {data ? (
                <Link className={styles.login} to="/conta ">
                  {data.nome}
                </Link>
        ): (
                <Link className={styles.login} to="/login">
                  Login / Criar
                </Link>
        )}
      </nav>

    </header>
  )
}

export default Header