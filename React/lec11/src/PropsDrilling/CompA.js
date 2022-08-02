import React from 'react'
import CompB from './CompB'

const CompA = (props) => {
  return (
    <div>
        <CompB name={props.name}/>
    </div>
  )
}

export default CompA