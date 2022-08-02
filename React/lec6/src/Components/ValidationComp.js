import React,{useState} from 'react'

const ValidationComp = () => {
    const [value,setValue] = useState(''); 

    const setEmailId = (e) =>{
        setValue(e.target.value);
    }

    const click = () =>{
       if(value == '' || value == undefined){
            alert()
       }
    }


  return (
    <div>
        <label> Email id <input type='email' onChange={setEmailId} ></input> </label> <br/>
        <p> </p> <br/>
        <label>Password <input type='password'></input></label> <br/>
        <p> </p><br/>
        <button type='button' onClick={click}>Validate</button>
    </div>
  )
}

export default ValidationComp