import { useDispatch, useSelector } from "react-redux";

import { getProfile } from "../../redux/actions";
import { useEffect, useState } from "react";

function Comment({ post, comt }) {
  const currentProfile = useSelector((state) => state.profile.user);
  const users = useSelector((state) => state.profile.list);
  const [user, setUser] = useState("");
  const [isClikced, setIsClikced] = useState(false);
  const [isMod, setIsMod] = useState(false);
  const [hiddenChange, setHiddenChange] = useState("d-flex");

  const [text, setText] = useState(comt.comment);

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [elementId, setElementId] = useState(post._id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const ExperiencesEndpoint = "https://striveschool-api.herokuapp.com/api/comments/" + comt._id;

  const currentLogin = useSelector((state) => state.login.data.token);

  const handleClickDelete = () => {
    fetch(ExperiencesEndpoint, {
      method: "DELETE",
      headers: {
        Authorization: currentLogin,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          setHiddenChange("d-none");
          return resp.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
    setIsClikced(!isClikced);
  };

  useEffect(() => {
    const user = users && users.filter((user) => user.username === comt.author);
    if (user !== undefined) {
      setUser(user[0]);
    }
  }, [comt]);

  const handleClickEdit = () => {
    fetch(ExperiencesEndpoint, {
      method: "PUT",
      body: JSON.stringify({ comment, rate, elementId }),
      headers: {
        Authorization: currentLogin,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          setText(comment);
          setComment("");
          setRate(1);
          setElementId(post._id); // qui sto resettando il form
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });

    setIsMod(false);
  };

  return (
    <div className={`${hiddenChange} mt-2 px-2`}>
      <div className="pt-2">
        {}
        <img
          src={user && user.image}
          alt=""
          width={30}
          height={30}
          className="cp me-2 rounded-circle object-fit-cover"
        />
      </div>
      <div className=" w-100">
        <div className="d-flex cp p-2 bg-comment ">
          <div className="w-100">
            <p className="small fw-bold line-heigh-name cp">
              {user && user.name} {user && user.surname}
            </p>
            <p className="opacity-75 line-heigh">{user && user.title}</p>
            <p className="mt-2 small">
              {isMod ? (
                <input
                  type="text"
                  placeholder="Modifica"
                  className="textarea-focus bg-color-text-comment"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleClickEdit();
                    }
                  }}
                />
              ) : (
                text
              )}
            </p>
          </div>
        </div>
        {user && user.username === currentProfile.username && (
          <div className="opacity-75 mt-2 line-heigh fw-bold d-flex">
            <p
              className="cp over"
              onClick={() => {
                setIsMod(true);
                setComment(comt.comment);
              }}
            >
              Modifica |
            </p>
            <p className="ms-1 cp over" onClick={handleClickDelete}>
              Elimina
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Comment;
