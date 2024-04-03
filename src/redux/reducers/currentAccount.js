import { GET_ACCOUNT } from "../actions";

const initialState = {
  data: null,
};

const currentAccount = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
export default currentAccount;
