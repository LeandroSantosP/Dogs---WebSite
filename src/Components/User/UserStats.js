import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import Head from '../InterFaceElement/Head'
import Loading from '../InterFaceElement/Loading'
import Erro from '../InterFaceElement/Erro'
import { GET_STATS } from '../../api'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const {data, loading, error, request} =  useFetch()

  useEffect(() => {
    async function getData() {
      const {url, options} = GET_STATS()
      const { response, json } = await request(url, options)
    }
    getData()
  },[request])
  

  if(data) 
  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <Head title="Stats "/>
        <UserStatsGraphs data={data} />
      </React.Suspense>

      {error && <Erro erro={error} />}
      {loading && <Loading />}
    </div>
  )
  else return null
}

export default UserStats