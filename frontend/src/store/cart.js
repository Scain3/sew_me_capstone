import {fetch} from './csrf.js';

const ADD_TO_CART = '/ADD_TO_CART';

const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
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
    dispatch(addToCart(res.data))
}

const cartReducer = (state={}, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }

}

export default cartReducer;
