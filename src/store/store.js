import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";

import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  auth: authReducer
});


export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
); 