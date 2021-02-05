//Action Types
const SEARCH_PATTERNS = 'SEARCH_PATTERNS';
const SEARCH_FABRICS = 'SEARCH_FABRICS';

//POJO ACTIONS
const searchPatterns = (patterns) => ({
    type: SEARCH_PATTERNS,
    payload: patterns
})

const searchFabrics = (fabrics) => ({
    type: SEARCH_FABRICS,
    payload: fabrics
})

//THUNK ACTION
export const fetchProductInfo = (term) => async(dispatch) => {
    const res = await fetch(`/api/search?term=${encodeURIComponent(term)}`)

    //destructure res
    const data = await res.json();
    const pattern = data.patterns;
    const fabric = data.fabrics;

    //make dispatch actions below
    dispatch(searchPatterns(pattern));
    dispatch(searchFabrics(fabric));
}

const initialState = {pattern: null, fabric: null};

const searchReducer = (state=initialState, action) => {
    switch(action.type){
        case SEARCH_PATTERNS:
            return { ...state, pattern: action.payload }
        case SEARCH_FABRICS:
            return { ...state, fabric:action.payload }
        default:
            return state;
    }
}

export default searchReducer;
