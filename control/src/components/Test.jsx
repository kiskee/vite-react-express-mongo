import axios from 'axios'
import React from 'react'
import { useState } from 'react'


const prueba = () => {

  const [days, setdays] = useState('')

const dayList = ()=>{
try {
  axios.post('/api/usuario/days').then(res=>setdays(res.data))
} catch (error) {
  console.log(error)
}
}
dayList()  
console.log(days)



  return (
    <div>
      <div>
        <label>type</label>

      </div>
    </div>
  )
}

export default prueba