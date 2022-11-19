import React, { useEffect, useState } from 'react'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Erro from '../InterFaceElement/Erro'
import {USER_POST}from '../../api'
import { userContext } from '../../UserContext'
import { Link } from 'react-router-dom'
import stylesBtn from '../Forms/Button.module.css'
import useFetch from '../../Hooks/useFetch'
import Head from '../InterFaceElement/Head'

const LoginCreate = () => {
  const username = useForm() 
  const email = useForm('email') 
  const password = useForm() 
  const {loading, error, request} = useFetch()

  const {userLogin} = React.useContext(userContext)

  let requests = {
    username: username.value,
    email: email.value,
    password : password.value,
  }

  async function handleSubmit(event) {
    event.preventDefault()
      const {url, options} = USER_POST(requests)
      const {response} = await request(url, options)
      if(response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <Head title="Criar "/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type='text' name="username" {...username}/>
        <Input label="Email" type='email' name="useremail" {...email}/>
        <Input label="Senha" type='text' name="userpassword" {...password}/>
        {loading ? <Button disabled>Carregando...</Button> : 
          <div style={{display: 'flex'}}>
            <Button  style={{marginRight: '2rem'}}>Cadastrar-se</Button>
            <Link className={stylesBtn.button} style={{maxWidth: '4rem'}} to='/login'>Voltar</Link> 
          </div>}
        <Erro error={error} />
      </form>
    </section>
  )
}

export default LoginCreate