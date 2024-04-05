export const GET_POSTS = "GET_POSTS";
export const POST_IMG_POSTS = "POST_IMG_POSTS";

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
        console.log(error);
      });
  };
};

// const postId = getState().posts.posts._id DA FARE ALTROVE!!

export const uploadImagePost = (postId, imageFile) => {
  return (dispatch, getState) => {
    const ImageEndpoint = ` https://striveschool-api.herokuapp.com/api/posts/${postId}`;

    const state = getState().login.data;

    const formData = new FormData();
    formData.append("post", imageFile);

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
        dispatch({ type: POST_IMG_POSTS, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
