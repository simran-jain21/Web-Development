import React,{useState,useEffect} from 'react'

const UseEffectComponent = () => {
    const [data, setData] = useState("Javascript")
    const  [isclicked, setIsclicked] = useState(false)

    useEffect(() => {
    //   console.log('hello');     //value(hello) was coming twice but when removed strictmode from index.js will give value once
        setData('ReactJs')
       
    })

    const clickHandler =()=>{
        setIsclicked(true);
        console.log(isclicked);
    }

    return (
    <div>
        {data}
        <button className='btn btn-primary ms-5' onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default UseEffectComponent
