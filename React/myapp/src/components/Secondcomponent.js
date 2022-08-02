import React from 'react'

const Secondcomponent = (props) => {
    console.log(props);
  return (
    <div>
        This is the second component
        <div>Full Name:{props.name} {props.surname}</div>
        Name:{props?.data?.name} <br/>
        email:{props?.data?.email}
    </div>
    
  )
}

export default Secondcomponent