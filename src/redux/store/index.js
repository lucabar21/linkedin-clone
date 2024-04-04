import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProfilesReducer from "../reducers/ProfileReducer";
import uploadImageReducer from "../reducers/uploadImageReducer";
import ExperienceReducer from "../reducers/experienceReducer";
import PostReducer from "../reducers/postsReducer";
import CommentsReducer from "../reducers/commentsReducer";

const combinedReducers = combineReducers({
  profile: ProfilesReducer,
  image: uploadImageReducer,
  exp: ExperienceReducer,
  posts: PostReducer,
  comments: CommentsReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
