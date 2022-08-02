import React, { useState } from 'react'

    const ValidationComp = () => {
        const[data,setData] = useState({
            name: '',
            emailid : '',
            password :'',
            contact :''
        })

        const [dataErr, setDataerr] = useState({
            nameErr:'',
            emailidErr:'',
            passwordErr:'',
            contactErr:''
        })

    const onChangeHandler=(e)=>{
        const {name,value} = e.target;
        setData({...data,name:value})
    }   
    
    const Submit =() =>{
        if(data.name == ''){
            setDataerr()
        }else if(data.name != ''){
            console.log('not blank')
        }
    }

  return (
    <div>
        <label>Name:- <input type='text'name='name' onChange={onChangeHandler}></input></label>
        <p>{dataErr.nameErr}</p>
        <label>Enter email id:- <input type='email' name='emailid' onChange={onChangeHandler}></input></label>
        <p></p>
        <label>Enter password:- <input type='password' name='password' onChange={onChangeHandler} ></input></label>
        <p></p>
        <label>Contact:- <input type='number' name='contact' onChange={onChangeHandler}></input></label> <br/> <br/>
        <button className='btn btn-primary' onClick={Submit}>Validate</button>
    </div>
  )
}

export default ValidationComp;