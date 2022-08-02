import React,{useState,useEffect} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
      console.log(`button clicked ${count}  times`)
    })
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click me!!!!!</button>
    </div>
  )
}

export default Counter