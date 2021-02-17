import {fetch} from './csrf.js';

const ADD_TO_CART = '/ADD_TO_CART';

const REMOVE_FROM_CART = '/REMOVE_FROM_CART';

const PURCHASE_ITEMS = '/PURCHASE_ITEMS';

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

const purchaseItems = (id) => {
    return{
        type: PURCHASE_ITEMS,
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

//Thunk action to remove items from cart
export const removeItemFromCart = (id) => async(dispatch) => {
    await fetch(`/api/cart/${id}`, {
        method: 'DELETE'

    })
    dispatch(removeFromCart(id))
}

//Thunk action for purchasing items
export const purchaseItemsFromCart = (id) => async(dispatch) => {
    await fetch(`/api/cart/${id}`, {
        method: 'DELETE'
    })

    dispatch(purchaseItems())
}

const cartReducer = (state={}, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {...state, [action.payload.id]: action.payload};
        case REMOVE_FROM_CART:
            const newState = {...state}
            delete newState[action.payload]
            return newState;
        case PURCHASE_ITEMS:
            return {};
        default:
            return state;
    }

}

export default cartReducer;
