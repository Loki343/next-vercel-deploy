import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(0)
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>INC</button>
      <button onClick={()=>setCounter(counter-1)}>DEC</button>
    </div>
  )
}

export default Counter
