import React, {useState} from 'react'
import '../Components/Style.css'

const Calculator = () => {
    const[value,setValue] = useState(0)

    const onClickEvent=(e)=>{
        console.log(e.target.value);
        setValue(value+e.target.value)
    }

    const Submit=()=>{
        setValue(eval(value));
    }

    const clear=()=>{
        setValue('')
    }

  return (
    <div className='container box text-center'>
        <div className='row'>
            <div className='col-12'>
                <input type='text' className='my-4 py-1 text-end w-100 fs-3' defaultValue={value}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-3 p-0'>
                <button className='but' value='7' onClick={onClickEvent}>7</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but' value='8' onClick={onClickEvent}>8</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but' value='9' onClick={onClickEvent}>9</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but1' value='/' onClick={onClickEvent}>/</button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3 p-0'>
                <button className='but' value='4' onClick={onClickEvent}>4</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but' value='5' onClick={onClickEvent}>5</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but' value='6' onClick={onClickEvent}>6</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but1' value='*' onClick={onClickEvent}>X</button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3 p-0'>
                <button className='but' value='1' onClick={onClickEvent}>1</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but' value='2' onClick={onClickEvent}>2</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but' value='3' onClick={onClickEvent}>3</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but1' value='+' onClick={onClickEvent}>+</button>
            </div>
        </div>
        <div className='row'>
            <div className='col-3 p-0'>
                <button className='but' value='0' onClick={onClickEvent}>0</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but1' value='.' onClick={onClickEvent}>.</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but1' value='=' onClick={Submit}>=</button>
            </div>
            <div className='col-3 p-0'>
                <button className='but1' value='-' onClick={onClickEvent}>-</button>
            </div>
        </div>
        <div className='row mt-1'>
            <button className='btn btn-primary w-100 py-2 fs-5 clear' onClick={clear}>CLEAR</button>
        </div>
    </div>
  )
}

export default Calculator