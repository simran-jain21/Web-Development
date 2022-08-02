import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const UserListComp = () => {
    const[UserList,setUserList] = useState([])
    useEffect(()=>{
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/users',
        })
        .then(function(res) {
            setUserList(res.data)
        })
        .catch((err)=>{
            console.log('err')
        })
    },[])
  return (
    <div>
        <div>UserList</div>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                UserList?.map((user,index)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><button><Link to={'/users/'+user.id}>View</Link></button></td>
                        </tr>
                    )
                })
            }
        </tbody>
        </Table>
    </div>
  )
}

export default UserListComp;