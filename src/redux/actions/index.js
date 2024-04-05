export const GET_DATA = "GET_DATA";
export const GET_ACCOUNT = "GET_ACCOUNT";
export const PUT_ACCOUNT = "PUT_ACCOUNT";
export const GET_USER = "GET_USER";
export const UPLOAD_IMG = "UPLOAD_IMG";
export const GET_CLICKED = "GET_CLICKED";

export const getUserClicked = (data) => {
  return {
    type: GET_CLICKED,
    payload: data,
  };
};

export const getProfile = () => {
  return (dispatch, getState) => {
    const ProfilesEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";

    const state = getState().login.data;

    console.log("stato", state);
    fetch(ProfilesEndpoint, {
      headers: {
        Authorization: state.token,
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

    const state = getState().login.data;

    fetch(ProfilesEndpoint, {
      headers: {
        Authorization: state.token,
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

    const state = getState().login.data;

    fetch(ProfilesEndpoint, {
      headers: {
        Authorization: state.token,
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

    const state = getState().login.data;

    fetch(ProfilesEndpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: state.token,
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

    const state = getState().login.data;

    const formData = new FormData();
    formData.append("profile", imageFile);

    fetch(ImageEndpoint, {
      method: "POST",
      headers: {
        Authorization: state.token,
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
