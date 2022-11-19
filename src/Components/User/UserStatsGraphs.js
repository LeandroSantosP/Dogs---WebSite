import React, { useEffect, useState } from 'react'
import styles from './UserStatsGraphs.module.css'
import {VictoryBar, VictoryChart, VictoryPie} from 'victory'

const UserStatsGraphs = ({data}) => {
   const [graph, setGraph] = useState([])
   const [total, setTotal] = useState(0) 

   useEffect(() => {
      const GraphData = data.map(item => {
         return {
            x: item.title,
            y: Number(item.acessos)
         }
      })
      setGraph(GraphData)
      if(data.length > 0)
      setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b))
   },[data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
         <p className=''>Acessos: {total}</p>
      </div>

      <div className={styles.graphItem}>
         <VictoryPie
            innerRadius={50}
            padding={{top: 20, bottom: 20, left: 80, right: 80}}
            style={{
               data:{
                  fillOpacity: 0.9,
                  stroke: '#fff',
                  strokeWidth: 2
               },
               labels: {
                  fontSize: 14,
                  fill: '#333'
               }
            }}
            data={graph}
         />

      </div>
         <div className={styles.graphItem}>
            <VictoryChart>
               <VictoryBar alignment='start' data={graph}/>
            </VictoryChart>
         </div>
    </section>
  )

}

export default UserStatsGraphs