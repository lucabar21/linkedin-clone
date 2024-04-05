export const GET_EXP = "GET_EXP";
export const GET_EXP_DETAIL = "GET_EXP_DETAIL";
export const PUT_EXP = "PUT_EXP";
export const POST_EXP = "POST_EXP";
export const DELETE_EXP = "DELETE_EXP";

export const getExperience = (userID) => {
  return (dispatch, getState) => {
    const ExperiencesEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`;

    const state = getState().login.data;

    fetch(ExperiencesEndpoint, {
      headers: {
        Authorization: state.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .then((data) => {
        dispatch({ type: GET_EXP, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const createExperience = (userID, experienceData) => {
  return (dispatch, getState) => {
    const ExperiencesEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`;

    const state = getState().login.data;

    fetch(ExperiencesEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: state.token,
      },
      body: JSON.stringify(experienceData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Qualcosa è andato storto durante la creazione dell'esperienza!");
        }
      })
      .then((data) => {
        // dispatch({ type: POST_EXP, payload: data });
        dispatch(getExperience(userID));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateExperience = (userID, expID, updatedExperienceData) => {
  return (dispatch, getState) => {
    const ExperienceEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`;

    const state = getState().login.data;

    fetch(ExperienceEndpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: state.token,
      },
      body: JSON.stringify(updatedExperienceData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Qualcosa è andato storto durante l'aggiornamento dell'esperienza!");
        }
      })
      .then((data) => {
        dispatch({ type: PUT_EXP, payload: data });
        dispatch(getExperience(userID));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteExperience = (userID, expID) => {
  return (dispatch, getState) => {
    const ExperienceEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`;

    const state = getState().login.data;

    fetch(ExperienceEndpoint, {
      method: "DELETE",
      headers: {
        Authorization: state.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(expID);
          dispatch(getExperience(userID));
          dispatch({ type: DELETE_EXP, payload: expID });
        } else {
          throw new Error("Qualcosa è andato storto durante l'eliminazione dell'esperienza!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
