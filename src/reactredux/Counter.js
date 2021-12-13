import {connect} from 'react-redux'

function Counter(props){

    return(
        <div>
            <h1>React Redux</h1>
            <p>Count : {props.count}</p>
        </div>
    )
}

// it maps the state to the props of current component
function mapStateToProps(state){
    return{
        count:state.counterReducer
    }
}

// bind react and redux
export default connect(mapStateToProps)(Counter)



// Redux Terminology :

// action:
          // It is an object with two properties: type and payload
          // type : action type are constants
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