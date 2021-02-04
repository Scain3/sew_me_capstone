import { fetch } from './csrf';

const GET_ONE_PATTERN = 'GET_ONE_PRODUCT';


//GET ONE PRODUCT
const getOnePattern = (product) => {
    return {
        type: GET_ONE_PATTERN,
        payload: product,
    }
}

//THUNK ACTION FOR GETTING ONE PRODUCT
export const fetchSinglePattern = (id) => async(dispatch) => {
    const response = await fetch(`api/patterns/${id}`);
    dispatch(getOnePattern(response.data.eachPattern));
}

const initialState = {};

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ONE_PATTERN:
            return{...state, [action.payload.id]: action.payload};
    }
}

export default productReducer;
