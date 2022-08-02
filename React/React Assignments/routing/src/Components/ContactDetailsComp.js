import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import {useParams} from 'react-router-dom'

const ContactDetailsComp = () => {
    const {id} = useParams()
    const[User,setUser] = useState({})

    useEffect(() => {
      Axios({
          method:'get',
          url: 'https://jsonplaceholder.typicode.com/users/'+id,
      })
      .then(function(res) {
        setUser(res.data)
      })
      .catch((err)=>{
        console.log('err')
      })
     
    }, [id])
  return (
    <div>
        Name: {User.id} <br/>
        Username : {User.name} <br/>
        Email : {User.email} <br/>  
    </div>
  )
}

export default ContactDetailsComp