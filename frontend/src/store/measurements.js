import { fetch } from './csrf';

const GET_MEASUREMENTS = 'GET_MEASUREMENTS';

//GET ALL OF THE MEASUREMENTS ACTION CREATOR
const getMeasurements = (measurements) => {
    return {
        type: GET_MEASUREMENTS,
        payload: measurements
    }
}

//THUNK ACTION FOR GETTING ALL MEASUREMENTS
export const fetchMeasurements = () => async(dispatch) => {
    const response = await fetch(`/api/measurements`);
    dispatch(getMeasurements(response.data.measurements))
}

const initialState = {};

const measurementReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_MEASUREMENTS:
            return {...state, ["byId"]: action.payload};
        default:
            return state;
    }
}

export default measurementReducer;
