import { GET_DATA } from "../actions";

const initialState = {
  content: [],
};

const ProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        content: action.payload,
      };
    }

    default:
      return state;
  }
};
export default ProfilesReducer;
