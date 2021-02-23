import { fetch } from './csrf';

const GET_MEASUREMENTS = 'GET_MEASUREMENTS';

//ADD USER MEASUREMENTS - CREATE
const ADD_MEASUREMENTS = 'ADD_MEASUREMENTS';

//GET ALL OF THE MEASUREMENTS ACTION CREATOR
const getMeasurements = (measurements) => {
    return {
        type: GET_MEASUREMENTS,
        payload: measurements
    }
}

//CREATE USER MEASUREMENTS ACTION CREATOR
const addMeasurements = (measurements) => {
    return{
        type: ADD_MEASUREMENTS,
        payload: measurements,
    }
}


//THUNK ACTION FOR GETTING ALL MEASUREMENTS
export const fetchMeasurements = () => async(dispatch) => {
    const response = await fetch(`/api/measurements`);
    dispatch(getMeasurements(response.data))
}

//THUNK ACTION FOR CREATING MEASUREMENTS
export const fetchAddMeasurements = (measurements) => async(dispatch) => {
    const response = await fetch("/api/measurements/add-measurements", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(measurements)
    });

    dispatch(addMeasurements(response.data.measurements));
    return response.data.measurements;
}

const initialState = {};

const measurementReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_MEASUREMENTS:
            return {...state, ["byId"]: action.payload};
        case ADD_MEASUREMENTS:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}

export default measurementReducer;
