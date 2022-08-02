import React, { useReducer } from 'react'

const initialState = {count:0}

const reducer =(state,action) =>{
    switch(action.type){
        case 'increment':
            return{count:state.count + 1}
        case 'decrement':
            return{count:(state.count>0)?state.count-1:state.count}
        default:
            return{count:state.count}
    }
}

const ReducerComp = () => {
    const[state, dispatch] = useReducer(reducer,initialState)
    return (
    <>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </>
  )
}

export default ReducerComp