import React from 'react'

function Check2Component(){

  //  const[number,setNumber]=React.useState(0)
  //  const[message,setMessage]=React.useState('')

    // const onChange=event=>{
    //     console.log(event.target.value);
    //     setMessage(event.target.value)
    // }

    // const incrementValue=()=>{
    //     setNumber(number+1)
    // }

    const inputRef=React.useRef()
    const[message,setMessage]=React.useState('') 
    
    const display=()=>{
        console.log(inputRef.current.value);
        setMessage(inputRef.current.value)
    }
    
    return(
        <div>
            {message}
            <input type='text' ref={inputRef}/>
            <button type='button' onClick={display}>Display</button>
        </div>
    )
}

export default Check2Component