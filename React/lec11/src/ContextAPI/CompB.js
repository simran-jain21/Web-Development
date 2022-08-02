import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div>
        <CompC name={props.name}/>
    </div>
  )
}

export default CompB