import { useDispatch, useSelector } from "react-redux";

import { getProfile } from "../../redux/actions";
import { useEffect, useState } from "react";

function Comment({ post, comt }) {
  const currentProfile = useSelector(state => state.profile.user);
  const users = useSelector(state => state.profile.list);
  const [user, setUser] = useState("");
  const [isClikced, setIsClikced] = useState(false);

  console.log(comt);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const ExperiencesEndpoint = "https://striveschool-api.herokuapp.com/api/comments/" + comt._id;
  const BearerLuca =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";
  const BearerNicole =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY";
  const BearerGianmarco =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM";
  const BearerMarco =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY";

  // useEffect(() => {
  //   getComment();
  // }, []);

  const handleClickDelete = () => {
    fetch(ExperiencesEndpoint, {
      method: "DELETE",
      headers: {
        Authorization: BearerLuca,
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        if (resp.ok) {
          console.log("commento eliminato comment");
          return resp.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
    setIsClikced(!isClikced);
  };

  useEffect(() => {
    const user = users && users.filter(user => user.username === comt.author);
    if (user !== undefined) {
      setUser(user[0]);
    }
  }, [comt]);

  return (
    <div className="d-flex mt-2 px-2  ">
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
        <div className="d-flex cp p-2 bg-comment">
          <div>
            <p className="small fw-bold line-heigh-name cp">
              {user && user.name} {user && user.surname}
            </p>
            <p className="opacity-75 line-heigh">{user && user.title}</p>
            <p className="mt-2 small">{comt.comment}</p>
          </div>
        </div>
        {user && user.username === currentProfile.username && (
          <div className="opacity-75 mt-2 line-heigh fw-bold d-flex">
            <p className="cp over">Modifica |</p>
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
