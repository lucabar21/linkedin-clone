import { GET_DATA, GET_USER } from "../actions";
import { GET_ACCOUNT } from "../actions";
import { PUT_ACCOUNT } from "../actions";

const initialState = {
  list: [] /* Prende la lista di utenti */,
  user: null /* Prende il singolo utente loggato (proprietario Token) */,
  byId: [] /* Prende il singolo utente da un ID*/,
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
    case PUT_ACCOUNT: {
      return {
        ...state,
        user: action.payload /* Aggiorna il singolo utente loggato con i dati modificati */,
      };
    }
    case GET_USER: {
      return {
        ...state,
        byId: state.byId.concat(action.payload) /* Modifica il singolo utente utente da un ID */,
      };
    }
    default:
      return state;
  }
};
export default ProfilesReducer;
