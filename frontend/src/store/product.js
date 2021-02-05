import { fetch } from './csrf';

const GET_ONE_PATTERN = 'GET_ONE_PRODUCT';

const GET_PRODUCTS = 'GET_PRODUCTS';

//GET ALL THE PRODUCTS
const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
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
export const fetchProducts = () => async(dispatch) => {
    const response = await fetch('/api/patterns');
    dispatch(getProducts(response.data.allPatterns))
}


//THUNK ACTION FOR GETTING ONE PRODUCT
export const fetchSinglePattern = (id) => async(dispatch) => {
    const response = await fetch(`api/patterns/${id}`);
    dispatch(getOnePattern(response.data.eachPattern));
}

const initialState = {};

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            const newProducts = {};
            action.payload.forEach((product) => {
                newProducts[product.id] = product
            })
            return {
                ...state, byId: newProducts
            }
        case GET_ONE_PATTERN:
            return{...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}

export default productReducer;
