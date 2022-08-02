import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import {Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Contact = () => {
  const[User,setUser] = useState([])

  useEffect(() => {
    Axios({
        method:'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
    .then(function(res) {
      setUser(res.data)
    })
    .catch((err)=>{
      console.log('err')
    })
   
  }, [])
  return (
    <div className='text-center'>
      {
        User?.map((user,index)=>{
          return(
            <div className='d-inline-block m-3 text-start' key={user.id}>
              <Card style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Title >ID- {user.id}</Card.Title>
              <Card.Text>
                Name:- {user.name} <br/>
                Email:- {user.email}
              </Card.Text>
              <Button className='btn btn-warning'><Link to={'/contact/'+user.id} className='text-white text-decoration-none'>View</Link></Button>
                </Card.Body>
              </Card>
            </div>
          )
        })
      }
    </div>
  )
}

export default Contact