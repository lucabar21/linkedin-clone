import { GET_COMMENT } from "../actions/comments";

const initialState = {
  comments: [],
};

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default:
      return state;
  }
};
export default CommentsReducer;
