import React from 'react'

function CheckComponent(){

    const[number,setNumber]=React.useState(0)
    const[message,setMessage]=React.useState('')

    const onChange=event=>{
        console.log(event.target.value);
        setMessage(event.target.value)
    }

    const incrementValue=()=>{
        setNumber(number+1)
    }

    return(
        <div>
            <p>Number is: {number}</p>
            <p>{message}</p>
            <input type='text' onChange={onChange}/>
            <button type='button' onClick={incrementValue}>Add</button>
        </div>
    )
}

export default CheckComponent