import React, { useState } from 'react'


const PhotoPost = () => {
   const [token, setToken] = useState('')
   const [nome, setNome] = useState('')
   const [peso, setPeso] = useState('')
   const [idade, setIdade] = useState('')
   const [img, setImg] = useState('')

   const formData = new FormData()
   formData.append('img', img)
   formData.append('nome', nome)
   formData.append('peso', peso)
   formData.append('idade', idade)



   function handleSubmit(event) {
      event.preventDefault()
      fetch("https://dogsapi.origamid.dev/json/api/photo", {
         method: "POST",
         headers: {
            Authorization: 'Bearer ' + token
         },
         body: formData,
      }).then(response => {
         console.log(response)
         return response.json()
      }).then(json => {
         console.log(json)
         return json
      })
   }
   return (
      <form onSubmit={handleSubmit}>
         <input
            placeholder='token'
            type="text"
            value={token}
            onChange={({ target }) => setToken(target.value)}
         />
         <input
            placeholder='nome'
            type="text"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
         />
         <input
            placeholder='peso'
            type="text"
            value={peso}
            onChange={({ target }) => setPeso(target.value)}
         />
         <input
            placeholder='idade'
            type="text"
            value={idade}
            onChange={({ target }) => setIdade(target.value)}
         />
         <input
            type="file"
            onChange={({ target }) => setImg(target.files[0])}
         />
         <button>enviar</button>
      </form>
   )
}

export default PhotoPost