import { UPLOAD_IMG } from "../actions";

const initialState = {
  uploadedImage: null,
};

const imageUploaded = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMG:
      return {
        ...state,
        uploadedImage: action.payload,
      };
    default:
      return state;
  }
};

export default imageUploaded;
