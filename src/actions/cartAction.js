import * as ActionTypes from './actionTypes'

export const addCart = (product) => {
    return {
        type: ActionTypes.ADD_CART,
        product
    }
}

export const changeQuantity = (product) => {
    return {
        type: ActionTypes.CHANGE_QUANTITY,
        product
    }
}

export const removeProduct = (product) => {
    return {
        type:  ActionTypes.REMOVE_PRODUCT,
        product
    }
}

export const addWistLish = (product) => {
    return {
        type: ActionTypes.ADD_WIST_LISH,
        product
    }
}