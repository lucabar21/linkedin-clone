export const GET_EXP = "GET_EXP";
export const GET_EXP_DETAIL = "GET_EXP_DETAIL";
export const PUT_EXP = "PUT_EXP";
export const POST_EXP = "POST_EXP";
export const DELETE_EXP = "DELETE_EXP";

export const getExperience = (userID) => {
  return (dispatch, getState) => {
    const ExperiencesEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`;

    const BearerLuca =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";
    const BearerNicole =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY";
    const BearerGianmarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM";
    const BearerMarco =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY";

    fetch(ExperiencesEndpoint, {
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

    const BearerLuca =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";

    fetch(ExperiencesEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: BearerLuca,
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
        dispatch({ type: POST_EXP, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// export const getExperienceDetail = (userID, expID) => {
//   return (dispatch, getState) => {
//     const ExperienceDetailEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`;

//     const BearerLuca =
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";

//     fetch(ExperienceDetailEndpoint, {
//       headers: {
//         Authorization: BearerLuca,
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Qualcosa è andato storto durante il recupero dei dettagli dell'esperienza!");
//         }
//       })
//       .then((data) => {
//         dispatch({ type: GET_EXP_DETAIL, payload: data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const updateExperience = (userID, expID, updatedExperienceData) => {
  return (dispatch, getState) => {
    const ExperienceEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`;

    const BearerLuca =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";

    fetch(ExperienceEndpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: BearerLuca,
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// export const deleteExperience = (userID, expID) => {
//   return (dispatch, getState) => {
//     const ExperienceEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`;

//     const BearerLuca =
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";

//     fetch(ExperienceEndpoint, {
//       method: "DELETE",
//       headers: {
//         Authorization: BearerLuca,
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           dispatch({ type: DELETE_EXP, payload: expID });
//         } else {
//           throw new Error("Qualcosa è andato storto durante l'eliminazione dell'esperienza!");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
