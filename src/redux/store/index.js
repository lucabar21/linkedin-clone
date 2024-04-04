import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfilesReducer from "../reducers/ProfileReducer";
import uploadImageReducer from "../reducers/uploadImageReducer";

const combinedReducers = combineReducers({
  profile: ProfilesReducer,
  image: uploadImageReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
