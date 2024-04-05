export const GET_POSTS = "GET_POSTS";

export const fetchPosts = () => {
  return (dispatch, getState) => {
    const ExperiencesEndpoint = `https://striveschool-api.herokuapp.com/api/posts/`;

    const state = getState().login.data;

    fetch(ExperiencesEndpoint, {
      headers: {
        Authorization: state.token,
      },
    })
      .then((response) => {
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .then((data) => {
        dispatch({ type: GET_POSTS, payload: data });
      })
      .catch((error) => {
      .catch((error) => {
        console.log(error);
      });
  };
};
