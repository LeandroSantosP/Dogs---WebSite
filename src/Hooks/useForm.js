import { useState } from 'react'

const types = {
   email: {
      regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ,
      message: 'Prencha um email valido'
   },
   password: {
      regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Mininu 8 caracteres, pelo menos uma letra e um numero"
   },
   number: {
      regex: /^\d+$/,
      message: 'Utilize apenas numeros'
   }
}

const useForm = (type) => {
   const [value, setValue] = useState('')
   const [error, setError] = useState(null)

   function validade(value) {
      if(type === false) return true
      if( value.length === 0) {
         setError("Prencha o valor")
         return false
      } else if(types[type] && !types[type].regex.test(value)) {
         setError(types[type].message)
         return false 
      } else {
         setError(null)
         return true
      }
   }

   function onChange({target}) {
      if(error)validade(target.value)
      setValue(target.value)
   }


   return { 
      value,
      setValue, 
      onChange,
      error,
      validade:() => validade(value),
      onBlur:() => validade(value),
   }
}

export default useForm