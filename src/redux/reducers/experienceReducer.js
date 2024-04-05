import { GET_EXP, PUT_EXP, POST_EXP, DELETE_EXP } from "../actions/experience";

const initialState = {
  experience: [],
};

const ExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXP: {
      return {
        ...state,
        experience: action.payload,
      };
    }

    case PUT_EXP:
      const updatedExperiences = state.experiences.map((exp) => {
        if (exp._id === action.payload._id) {
          return action.payload;
        } else {
          return exp;
        }
      });
      return {
        ...state,
        experiences: updatedExperiences,
      };

    case POST_EXP:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };

    case DELETE_EXP:
      const filteredExperiences = state.experiences.filter((exp) => exp._id !== action.payload);
      return {
        ...state,
        experiences: filteredExperiences,
      };

    default:
      return state;
  }
};
export default ExperienceReducer;
