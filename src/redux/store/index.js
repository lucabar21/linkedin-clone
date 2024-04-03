import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfilesReducer from "../reducers/ProfileReducer";

const combinedReducers = combineReducers({
  profile: ProfilesReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
