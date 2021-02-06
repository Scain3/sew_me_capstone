import { fetch } from './csrf';

const GET_ONE_PATTERN = 'GET_ONE_PRODUCT';

const GET_PATTERNS = 'GET_PATTERNS';

//GET ALL THE PRODUCTS action creator
const getProducts = (products) => {
    return {
        type: GET_PATTERNS,
        payload: products
    }
}

//GET ONE PRODUCT
const getOnePattern = (product) => {
    return {
        type: GET_ONE_PATTERN,
        payload: product,
    }
}

//THUNK ACTION FOR GETTING ALL PRODUCTS;
export const fetchPatterns = () => async(dispatch) => {
    const response = await fetch('/api/patterns');
    dispatch(getProducts(response.data.allPatterns))
}


//THUNK ACTION FOR GETTING ONE PRODUCT
export const fetchSinglePattern = (id) => async(dispatch) => {
    const response = await fetch(`api/patterns/${id}`);
    dispatch(getOnePattern(response.data.eachPattern));
}

const initialState = {};

const patternReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PATTERNS:
            const allPatterns = {};
            action.payload.forEach((pattern) => {
                allPatterns[pattern.id] = pattern
            })
            return allPatterns

        case GET_ONE_PATTERN:
            return{...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}

export default patternReducer;
