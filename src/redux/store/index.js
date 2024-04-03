import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfilesReducer from "../reducers/ProfileReducer";
import currentAccount from "../reducers/currentAccount";

const combinedReducers = combineReducers({
  list: ProfilesReducer,
  current: currentAccount,
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
