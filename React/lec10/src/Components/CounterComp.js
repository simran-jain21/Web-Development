import React, { useState } from 'react'

const CounterComp = () => {
    const[count,setCount] = useState(0)

    const clickAdd = () =>{
        setCount(count+1)
    }
     const clickRemove = () =>{
        // setCount((count>0)?count-1:count)
        (count>0)?setCount(count-1):setCount(count)
     }
  return (
    <div>Counter <br/>
        <h1>{count}</h1>
        <button classname="btn btn-primary" onClick={clickAdd}>Add</button>
        <button classname="btn btn-primary" onClick={clickRemove}>Remove</button>
    </div>
  )
}

export default CounterComp