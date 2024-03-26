import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favReducers from "../reducers/favReducers";
import searchReducers from "../reducers/searchReducers";

const unifiedReducer = combineReducers({
  favorities: favReducers,
  search: searchReducers,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
