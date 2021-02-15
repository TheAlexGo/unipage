import {combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import wordReducer from "./reducers/wordReducer";

const rootReducer = combineReducers({
  words: wordReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
