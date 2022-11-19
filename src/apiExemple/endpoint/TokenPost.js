import React, { useState } from 'react'

const TokenPost
 = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [token, setToken] = useState('')

   function handleSubmit(event) {
      event.preventDefault()
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            username,
            password
         })
      }).then(response => {
         console.log(response)
         return response.json()
      }).then(json => {
         console.log(json)
         setToken(json.token)
         return json
      })
   }

   
  return (
    <form onSubmit={handleSubmit}>
      <input 
         placeholder='Nomde de usuario'
         type="text" 
         value={username} 
         onChange={({target}) => setUsername(target.value)} 
         />

      <input 
         placeholder='senha de usuario'
         type="text" 
         value={password} 
         onChange={({target}) => setPassword(target.value)} 
         />
         <button>enviar</button>
         <p style={{wordBreak: "break-all"}}>{token}</p>
    </form>
  )
}

export default TokenPost
