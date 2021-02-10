import { fetch } from './csrf';

const GET_FABRICS = 'GET_FABRICS';

//POJO ACTION FOR GETTING ALL FABRICS
const getFabrics = (fabrics) => {
    return {
        type: GET_FABRICS,
        payload: fabrics
    }
}

//THUNK ACTION FOR GETTING ALL OF THE FABRICS
export const fetchFabrics = () => async(dispatch) => {
    
    const response = await fetch(`/api/fabrics`);
    dispatch(getFabrics(response.data.allFabrics));
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
        default:
            return state;
    }
}

export default fabricReducer;
