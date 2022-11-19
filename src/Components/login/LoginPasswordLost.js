import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSAWORD_LOST } from '../../api'
import Erro from '../InterFaceElement/Erro'
import Head from '../InterFaceElement/Head'

const LoginPasswordLost = () => {
  const login = useForm()
  const { data, loading, error, request } = useFetch()
  console.log(data)
  async function handleSubmit(event) {
    if(login.validade()) {
      event.preventDefault()
      const { url, options } = PASSAWORD_LOST({ 
          login: login.value, 
          url: window.location.href.replace("perdeu", "resetar")
        });
        request(url, options)
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha"/>
      <h1 className='title'>Perdeu a Senhe?</h1>
      {data ? <p style={{color: '#4c1'}}>{data}</p> : 
            <form onSubmit={handleSubmit}>
            <Input label='Email / usuario' type='text' name='login' {...login} />
            {loading ? <Button disabled>Enviando</Button> : <Button>Enviar Email</Button>}
          </form> 
      }
      <Erro  error={error} />
    </section>
  )

}

export default LoginPasswordLost