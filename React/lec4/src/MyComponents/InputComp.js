import React,{useState} from 'react'

const InputComp = () => {
    const [name,setName] = useState();                              //const [state,statename] = Hooks
    const [name1,setName1] = useState();
    // const onHandlerChange = (e) => {         //part1
    //     setName(e.target.value)
    // }

    const onInputChange = (e) =>{
       setName(e.target.value);
    }
    
    const click = () => {
       setName1(name)
    }

  return (
    <div>
        {/*part1*/}
        {/* <input type='text' placeholder='Enter a value' onChange={onHandlerChange}></input>              
        <h5>Input value : {name} </h5> */}

        {/*part2*/}
        <input type='text' placeholder='Enter a value' onChange={onInputChange}></input>        
        <button onClick={click}>Click me</button>
        <h5>Input value : {name1} </h5>


    </div>
    
  )
}

export default InputComp