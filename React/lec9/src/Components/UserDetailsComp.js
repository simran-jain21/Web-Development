import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'


const UserDetailsComp = () => {
    const{id} = useParams();
    const[UserList,setUserList] = useState({})
    useEffect(()=>{
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/users/'+id,
        })
        .then(function(res) {
            setUserList(res.data)
        })
        .catch((err)=>{
            console.log('err')
        })
    },[id])
  return (
    <div>
        Name: {UserList.name} <br/>
        Username : {UserList.username} <br/>
        Email : {UserList.email} <br/>  
    </div>
  )
}
  export default UserDetailsComp
