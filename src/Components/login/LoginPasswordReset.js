import React, { useEffect, useState } from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFecth from '../../Hooks/useFetch'
import { PASSAWORD_RESET } from '../../api'
import Erro from '../InterFaceElement/Erro'
import { useNavigate } from 'react-router-dom'

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm()
  const {error, request, loading} = useFecth()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
  }, [])


  async function handleSubmit(event) {
    event.preventDefault()
    if(password.validade()) {
    const {url, options} = PASSAWORD_RESET({
      login,
      key,
      password: password.value
    })
    const {response} = await request(url, options)
    if(response.ok) navigate('/login')
  }
  }

  return (
    <section className='animeLeft'>
      <form onSubmit={handleSubmit}>
        <h1 className='title'>Reset a senha</h1>
        <Input 
          label='Nova senha' 
          type="password" 
          name="password" 
          {...password}
        />
        <Erro error={error}/>
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
    </section>
  )
}

export default LoginPasswordReset