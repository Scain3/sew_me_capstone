import { fetch } from './csrf';

const GET_FABRICS = 'GET_FABRICS';

const GET_ONE_FABRIC = 'GET_ONE_FABRIC';

//POJO ACTION FOR GETTING ALL FABRICS
const getFabrics = (fabrics) => {
    return {
        type: GET_FABRICS,
        payload: fabrics
    }
}

//POJO ACTION FOR GETTING ONE FABRIC
const getOneFabric = (product) => {
    return {
        type: GET_ONE_FABRIC,
        payload: product,
    }
}

//THUNK ACTION FOR GETTING ALL OF THE FABRICS
export const fetchFabrics = () => async(dispatch) => {

    const response = await fetch(`/api/fabrics`);
    dispatch(getFabrics(response.data.allFabrics));
}

//THUNK ACTION FOR GETTING ONE FABRIC
export const fetchSingleFabric = (id) => async(dispatch) => {
    const response = await fetch(`/api/fabrics/${id}`);
    dispatch(getOneFabric(response.data.eachFabric));
}

const initialState ={};

const fabricReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_FABRICS:
            const allFabrics = {};
            action.payload.forEach((fabric) => {
                allFabrics[fabric.id] = fabric
            })
            return allFabrics;
        case GET_ONE_FABRIC:
            return{...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}

export default fabricReducer;
