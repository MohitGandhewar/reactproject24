
function Counter(props){

    return(
        <div>
            <h1>React Redux</h1>
            <p>Count : {props.count}</p>
        </div>
    )
}

export default Counter



// Redux Terminology :

// action:
          // It is an object with two properties: type and payload
          // type : action type are contants
          // payload : it is the value or data passed               

// reducer:
          // it is a function which consists of state and action
          // it consists of switch case to handle the different cases.

// store:
          // React/redux application state resides in the store. 
          // It is initialized with the use of reducer.

// dispatch:
         // it is a method available on the store.
         // It accepts object which is used to update the state.

// connect:
        // it is a function to connect React to redux.