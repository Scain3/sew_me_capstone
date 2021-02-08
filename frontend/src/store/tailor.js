const TAILOR_PRODUCT = 'TAILOR_PRODUCTS';

const tailorProducts = (tailors) => ({
    type: TAILOR_PRODUCT,
    payload: tailors
})

export const tailorProductInfo = (id, userId) => async(dispatch) => {
    const res = await fetch(`api/tailor/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            userId,

        })
    })
    dispatch(tailorProducts(res.data.tailorItem))
}

const tailorReducer = (state={}, action) => {
    switch(action.type){
        case TAILOR_PRODUCT:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}

export default tailorReducer;
