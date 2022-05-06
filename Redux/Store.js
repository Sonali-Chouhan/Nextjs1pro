import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";
import rootReducer from './Reducer/index';
export const store = legacy_createStore(rootReducer,(applyMiddleware(thunk)));
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);