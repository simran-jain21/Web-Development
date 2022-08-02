import React, { useState } from 'react'

const TodoComp = () => {
  const[inp,setInput] = useState()
  const[store,setStore] = useState([])

  const inF=(e)=>{
      setInput(e.target.value)
  }

  const Add=()=>{
    if(inp == ''){

    }else{
      setStore((oldList)=>{
        return [...oldList,inp]
      })
    }
    setInput('')
  }

  const removal=()=>{

  }
  return (
    <div>
        <input onChange={inF} value={inp}></input>
        <button className='btn btn-primary' onClick={Add}>Add</button>
        <ul>
          {store.map((lists,index)=>{
            // key={index}
            return <li>{lists}<button className='btn btn-warning ms-2 mb-2' onClick={removal(index)}>X</button></li>
          })}
        </ul>
    </div>
  )
}

export default TodoComp