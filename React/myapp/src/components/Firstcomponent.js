import React,{useState} from 'react'
import './Mystyle.css'
import Secondcomponent from './Secondcomponent'

var obj={
    name:"simmi",
    email:"simmi@gmail.com",
    mob:"893465"
}


const Firstcomponent = () => {
  const[cityname, setcity] = useState('Mumbai')
 
  const changeCity = () => {
    setcity('Goa')
  }


  return (
    <div>
      <h1>{cityname}</h1>
    <div>Firstcomponent</div>
    <button className="button btn btn-primary" style={{'fontSize':'30px'}}>Click me</button>
    <Secondcomponent name="Simran" surname="Jain"/>
    <Secondcomponent data={obj}/>

    <button className='button btn btn-warning' style={{'fontSize':'30px'}} onClick={changeCity}>Change value</button>
    </div>
    
  )
}



export default Firstcomponent