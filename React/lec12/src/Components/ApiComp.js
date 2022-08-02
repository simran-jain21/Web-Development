import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AddDataComp from './AddDataComp'


const ApiComp = () => {
    const[UserList,setUserList] = useState([])
    useEffect(()=>{
        axios({
            method:'get',
            url:'https://62e4c03a20afdf238d717e82.mockapi.io/Users',
        })
        .then(function(res) {
            console.log(res)
            setUserList(res.data)
        })
        .catch((err)=>{
            console.log('err')
        })
    },[])
  return (
    <div>
        <div className='d-flex justify-content-between mx-5'>
            <div>UserList</div>
            <Link to = {'/add-data'}><button>Add data</button></Link>
        </div>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            </tr>
        </thead>
        <tbody>
            {
                UserList?.map((user,index)=>{
                    return(
                        <tr key={user.Id}>
                            <td>{user.Id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            
                            {/* <td><button><Link to={'/users/'+user.id}>View</Link></button></td> */}
                        </tr>
                    )
                })
            }
        </tbody>
        </Table>
    </div>
  )
}

export default ApiComp
