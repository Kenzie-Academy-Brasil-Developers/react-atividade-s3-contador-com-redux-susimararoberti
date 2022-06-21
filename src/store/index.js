import { legacy_createStore as createStore, combineReducers } from "redux";

import counterReducer from "./modules/counter/reducer";

const reducers = combineReducers({ counter: counterReducer });

const store = createStore(reducers);

export default store;
