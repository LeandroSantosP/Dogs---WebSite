
import React, { createContext, useEffect, useState } from 'react'
import { TOKEN_POST, USER_GET } from './api'
import { TOKEN_VALIDATE_POST } from './api'
import { useNavigate } from 'react-router-dom'

export const userContext = createContext()



export const UserStorege = ({ children }) => {
   const [data, setData] = useState(null)
   const [login, setLogin] = useState(false)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const navigate = useNavigate()

   const userLoginOut = React.useCallback(
      async function () {
         setData(null)
         setError(null)
         setLoading(false)
         setLogin(false)
         window.localStorage.removeItem('token')
         navigate('/login')
      }, [navigate],)


   async function getUser(token) {
      const { url, options } = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLogin(true);
   }

   async function userLogin(username, password) {
      try {
         setError(null);
         setLoading(true);
         const { url, options } = TOKEN_POST({ username, password });
         const tokenRes = await fetch(url, options);
         if (!tokenRes.ok) throw new Error(`Error: Usuario ou senha invalido`);
         const { token } = await tokenRes.json();
         window.localStorage.setItem('token', token);
         await getUser(token);
         navigate('/conta');
      } catch (err) {
         setError(err.message);
         setLogin(false);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      async function autoLogin() {
         const token = window.localStorage.getItem('token');
         if (token) {
            try {
               setError(null);
               setLoading(true);
               const { url, options } = TOKEN_VALIDATE_POST(token);
               const response = await fetch(url, options);
               if (!response.ok) throw new Error('Token inválido');
               await getUser(token);
            } catch (err) {
               userLoginOut();
            } finally {
               setLoading(false);
            }
         } else {
            setLogin(false)
         }
      }
      autoLogin();
   }, [userLoginOut]);


   return (
      <userContext.Provider value={{ userLogin, data, userLoginOut, error, loading, login }}>
         {children}
      </userContext.Provider>
   )
}
