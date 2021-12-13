import * as actionType from '../actions/ActionTypes'

const counterReducer=(state = 1000,action)=>{

    let newState

    switch (action.type) {
        case actionType.ADD_COUNTER:
            console.log(action.type);
            newState=state + action.payload
            return newState

        case actionType.REDUCE_COUNTER:
            console.log(action.type);
            newState=state + action.payload
            return newState

        default:
            return state
    }
}

export default counterReducer