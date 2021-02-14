import {fetch} from './csrf.js';

const ADD_TO_CART = '/ADD_TO_CART';

const REMOVE_FROM_CART = '/REMOVE_FROM_CART';

const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

const removeFromCart = (id) => {
    return{
        type: REMOVE_FROM_CART,
        payload: id
    }
}

//body must include the cartId and must be an object
//ex. {cartId: 1, tailorId: 3}
export const addItemToCart = (body) => async(dispatch) => {
    const res = await fetch(`/api/cart/`, {
        method: 'POST',
        body: JSON.stringify(
            body
        )
    })
    dispatch(addToCart(res.data.cartItem))
}

export const removeItemFromCart = (cartId) => async(dispatch) => {
    await fetch(`/api/cart/${cartId}`, {
        method: 'DELETE'
    })
    dispatch(removeFromCart(cartId))
}

const cartReducer = (state={}, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {...state, [action.payload.id]: action.payload};
        case REMOVE_FROM_CART:
            const newState = {...state}
            delete newState[action.payload]
            return newState;
        default:
            return state;
    }

}

export default cartReducer;
