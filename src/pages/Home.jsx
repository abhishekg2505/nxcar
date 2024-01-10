import React, { useState } from 'react'

const Home = () => {
  const [number, setNumber] = useState(false)

  const changeNumber = ()=>{
    setNumber(!number)
  }
  return (
    <div className='home-section'>
      <div class="absNumber">{number ? "02" : "01"}</div>
      <h2 style={{ opacity: number ? 1 : 0 }}>Take A SPIN</h2>
      <h1 style={{ opacity: number ? 0 : 1 }}>Take A SPIN</h1>
      <button onClick={changeNumber}>Get Started</button>
    </div>
  )
}

export default Home