import React from 'react'
import data from './data'
import { useState } from 'react'

const App = () => {
  const[tours , setTours]= useState(data)
  return (
    <div>
      <h2>TOUR TO INDIA</h2>
     <Tours> </Tours>
    </div>
  )
}

export default App
