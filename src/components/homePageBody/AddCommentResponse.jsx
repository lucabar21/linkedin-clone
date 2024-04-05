import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../redux/actions/comments";

function AddCommentResponse({ post, comt }) {
  const currentProfile = useSelector(state => state.profile.user);
  console.log(post._id);
  const randNum = Math.floor(Math.random() * 5);

  const distpatch = useDispatch();

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(`${randNum}`);
  const [elementId, setElementId] = useState(post._id);

  const currentLogin = useSelector(state => state.login.data.token);

  const postComment = () => {
    const ExperiencesEndpoint = "https://striveschool-api.herokuapp.com/api/comments/";

    fetch(ExperiencesEndpoint, {
      method: "POST",
      body: JSON.stringify({ comment, rate, elementId }),
      headers: {
        Authorization: currentLogin,
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        if (resp.ok) {
          console.log("Commento pubblicato");
          setComment("");
          setRate(`${randNum}`);
          setElementId(post._id); // qui sto resettando il form
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  const hendleclick = () => {
    console.log("Enter press");
    postComment();
    distpatch(fetchComments());
  };

  return (
    <div>
      <div className="d-flex align-items-center pb-2">
        <img
          className="me-2 rounded-circle object-fit-cover cp"
          src={
            currentProfile !== null
              ? currentProfile.image
              : "https://openclipart.org/download/247319/abstract-user-flat-3.svg"
          }
          alt="Nome Utente"
          width={40}
          height={40}
        />
        <div className="d-flex justify-content-between align-items-center add-comm-search-input w-100">
          <input
            type="text"
            placeholder="Aggiungi un commento..."
            className="textarea-focus w-50"
            onChange={e => setComment(e.target.value)}
            value={comment}
            onKeyDown={e => {
              if (e.key === "Enter") {
                hendleclick();
              }
            }}
          />
          <div>
            {/* <input type="text" placeholder="rate" className="text-focus" /> */}
            <img src="smile.svg" alt="" className="me-3" />
            <img src="multimedia.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCommentResponse;
