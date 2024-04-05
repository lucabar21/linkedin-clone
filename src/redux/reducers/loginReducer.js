import { SET_USER } from "../actions/login";

const initialState = {
  data: [],
};

const userArray = [
  {
    name: "Luca",
    _id: "660bbf71a281d80019a3ec4c",
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw",
  },
  {
    name: "Nicole",
    _id: "660bc0d4a281d80019a3ec50",
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY",
  },
  {
    name: "Marco",
    _id: "660bb8fda281d80019a3ec40",
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY",
  },
  {
    name: "Gianmarco",
    _id: "660bc05fa281d80019a3ec4f",
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM",
  },
];

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const foundUser = userArray.find((user) => user.name === action.payload.name);
      return {
        ...state,
        data: foundUser ? foundUser : state.data,
      };
    default:
      return state;
  }
};
export default loginReducer;
