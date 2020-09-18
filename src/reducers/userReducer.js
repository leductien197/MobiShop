import * as ActionTypes from '../actions/actionTypes'
const initialState = {
    product: []
}

export default function peopleReducer( state = initialState, action) {
    switch (action.type) {

        case ActionTypes.ADD_CART:
           return {
               product: [ ...state.product, action.product],
           }
    
        default:
            return state;
    }
}