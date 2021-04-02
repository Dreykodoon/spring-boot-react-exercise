import { combineReducers , createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import elementsReducer from "./elements/elementsReducer";
import viewsReducer from "./views/viewsReducer";


const rootReducer = combineReducers({
  views: viewsReducer,
  elements: elementsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;