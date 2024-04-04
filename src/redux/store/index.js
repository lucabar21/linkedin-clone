import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfilesReducer from "../reducers/ProfileReducer";
import uploadImageReducer from "../reducers/uploadImageReducer";
import ExperienceReducer from "../reducers/experienceReducer";
import PostReducer from "../reducers/postsReducer";

const combinedReducers = combineReducers({
  profile: ProfilesReducer,
  image: uploadImageReducer,
  exp: ExperienceReducer,
  posts: PostReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
