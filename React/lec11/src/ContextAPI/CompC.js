import React from 'react'
import {NameContext} from '../App'

const CompC = () => {
  return (
    <div>
        {/* This is component C <br/>
        Name : {props.name} */}

        <NameContext.Consumer>
          {
            (name)=>{
              return(
                <p>Name:{name}</p>
              )
            }
          }
        </NameContext.Consumer>
    </div>
  )
}

export default CompC