import React, { createContext } from 'react'

//context created
const ContextValue=createContext()

function UseContextDemo(){

    //const value=1100

    const[value,setValue]=React.useState(1000)
    const[value1,setValue1]=React.useState(2000)
    const changeValue=()=>{
        setValue(value+100)
    }

    return(
      <ContextValue.Provider value={{value,value1,changeValue}}>
          <h1>Context Demo</h1>
          <CheckContext/>
           <CheckContext1/> 
      </ContextValue.Provider>  
        
    )
}

function CheckContext(){

    const {value,value1,changeValue}=React.useContext(ContextValue)
    console.log(value);
    return(
        // <ContextValue.Consumer>
        //     {value=><h2>Value is: {value}</h2>}
        // </ContextValue.Consumer>

        <div>
            <h2>Value is: {value}</h2>
            <h2>Value1 is: {value1}</h2>
            <button type='button' onClick={changeValue}>Component1</button>
        </div>
    )
}

function CheckContext1(){

    const {value,value1,changeValue}=React.useContext(ContextValue)
    return(
        // <ContextValue.Consumer>
        //     {value=><h2>Value is: {value}</h2>}
        // </ContextValue.Consumer>

        <div>
            <h2>Value is: {value}</h2>
            <h2>Value1 is: {value1}</h2>
            <button type='button' onClick={changeValue}>Component2</button>

        </div>
    )
}



export default UseContextDemo