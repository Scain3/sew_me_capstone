import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import patternReducer from './pattern';
import searchReducer from './search';
import fabricReducer from './fabric';
import tailorReducer from './tailor';
import cartReducer from './cart';
import measurementReducer from './measurements';

const rootReducer = combineReducers({
  session,
  patterns: patternReducer,
  search: searchReducer,
  fabrics: fabricReducer,
  tailor: tailorReducer,
  cart: cartReducer,
  measurements: measurementReducer

});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
