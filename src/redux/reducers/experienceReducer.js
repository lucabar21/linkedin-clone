import { GET_EXP } from "../actions/experience";

const initialState = {
  experience: null,
};

const ExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXP: {
      return {
        ...state,
        experience: action.payload,
      };
    }
    default:
      return state;
  }
};
export default ExperienceReducer;
