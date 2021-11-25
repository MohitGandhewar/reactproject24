import React, { createContext } from 'react'

//context created
const ContextValue=createContext()

function UseContextDemo(){

    const value=1100

    return(
      <ContextValue.Provider value={value}>
          <h1>Context Demo</h1>
          <CheckContext/>
          <CheckContext1/>
      </ContextValue.Provider>  
        
    )

}


function CheckContext(){

    const gValue=React.useContext(ContextValue)

    return(
        // <ContextValue.Consumer>
        //     {value=><h2>Value is: {value}</h2>}
        // </ContextValue.Consumer>

        <div>
            <h2>Value is: {gValue}</h2>
        </div>
    )
}

function CheckContext1(){

    const gValue=React.useContext(ContextValue)
    return(
        // <ContextValue.Consumer>
        //     {value=><h2>Value is: {value}</h2>}
        // </ContextValue.Consumer>

        <div>
            <h2>Value is: {gValue}</h2>
        </div>
    )
}



export default UseContextDemo