import { GET_DATA } from "../actions";
import { GET_ACCOUNT } from "../actions";

const initialState = {
  list: [] /* Prende la lista di utenti */,
  user: null /* Prende il singolo utente loggato (proprietario Token) */,
};

const ProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        list: action.payload /* Modifica la lista di utenti */,
      };
    }
    case GET_ACCOUNT: {
      return {
        ...state,
        user: action.payload /* Modifica il singolo utente loggato (proprietario Token) */,
      };
    }
    default:
      return state;
  }
};
export default ProfilesReducer;
