export const GET_DATA = "GET_DATA";
export const GET_ACCOUNT = "GET_ACCOUNT";
export const PUT_ACCOUNT = "PUT_ACCOUNT";
export const GET_USER = "GET_USER";
export const UPLOAD_IMG = "UPLOAD_IMG";

export const getProfile = () => {
  return (dispatch, getState) => {
    const ProfilesEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

    const BearerLuca =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";
    const BearerNicole =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY";
    const BearerGianmarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM";
    const BearerMarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY";

    fetch(ProfilesEndpoint, {
      headers: {
        Authorization: BearerLuca,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: GET_DATA, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const getAccount = () => {
  return (dispatch, getState) => {
    const ProfilesEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";

    const BearerLuca =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";
    const BearerNicole =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY";
    const BearerGianmarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM";
    const BearerMarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY";

    fetch(ProfilesEndpoint, {
      headers: {
        Authorization: BearerMarco,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: GET_ACCOUNT, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getUserByID = (userID) => {
  return (dispatch, getState) => {
    const ProfilesEndpoint = "https://striveschool-api.herokuapp.com/api/profile/" + userID;

    const BearerLuca =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";
    const BearerNicole =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY";
    const BearerGianmarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM";
    const BearerMarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY";

    fetch(ProfilesEndpoint, {
      headers: {
        Authorization: BearerGianmarco,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: GET_USER, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const putAccount = (updatedData) => {
  return (dispatch, getState) => {
    const ProfilesEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

    const requestBody = {
      name: updatedData.name,
      surname: updatedData.surname,
      email: updatedData.email,
      username: updatedData.username,
      title: updatedData.title,
      bio: updatedData.bio,
      area: updatedData.area,
      image: updatedData.image,
    };

    const BearerLuca =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";
    const BearerNicole =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY";
    const BearerGianmarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM";
    const BearerMarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY";

    fetch(ProfilesEndpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: BearerMarco,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .then((data) => {
        dispatch({ type: PUT_ACCOUNT, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// UPLOAD IMAGE FETCH

export const uploadImage = (userID, imageFile) => {
  return (dispatch, getState) => {
    const ImageEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/picture`;

    const BearerLuca =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";
    const BearerNicole =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY";
    const BearerGianmarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM";
    const BearerMarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY";

    const formData = new FormData();
    formData.append("profile", imageFile);

    fetch(ImageEndpoint, {
      method: "POST",
      headers: {
        Authorization: BearerMarco,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .then((data) => {
        dispatch({ type: UPLOAD_IMG, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
