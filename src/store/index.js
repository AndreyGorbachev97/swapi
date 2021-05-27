import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thank from "redux-thunk";
import peopleReducer from "./peopleReduser";
import historyReducer from "./historyReducer";

const rootReducer = combineReducers({
  people: peopleReducer,
  history: historyReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thank)))