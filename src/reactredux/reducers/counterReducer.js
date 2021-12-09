import * as actionType from '../actions/ActionTypes'

const counterReducer=(state = 100,action)=>{

    let newState

    switch (action.type) {
        case actionType.ADD_COUNTER:
            newState=state + action.payload
            return newState

        case actionType.REDUCE_COUNTER:
            newState=state + action.REDUCE_COUNTER
            return newState

        default:
            return state
    }
}

export default counterReducer