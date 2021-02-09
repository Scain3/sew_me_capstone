import {fetch} from './csrf.js';

const TAILOR_PRODUCT = 'TAILOR_PRODUCTS';

const REMOVE_PRODUCT = '/REMOVE_PRODUCT';

const tailorProducts = (tailors) => ({
    type: TAILOR_PRODUCT,
    payload: tailors
})

const removeProduct = (id) => {
    return{
        type: REMOVE_PRODUCT,
        payload: id
    }
}

export const tailorProductInfo = (id, userId) => async(dispatch) => {
    const res = await fetch(`/api/tailor/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            userId,


        })
    })
    dispatch(tailorProducts(res.data.tailorItem))
}

export const removeTailoredProduct = (id) => async(dispatch) => {
    await fetch(`/api/tailor/${id}`, {
        method: 'DELETE'
    });
    dispatch(removeProduct(id))
}
const initialState = {

}
const tailorReducer = (state=initialState, action) => {
    switch(action.type){
        case TAILOR_PRODUCT:
            return {...state, [action.payload.id]: action.payload};
        case REMOVE_PRODUCT:
            const newState = {...state}
            delete newState[action.payload]
            return newState;
        default:
            return state;
    }
}

export default tailorReducer;
