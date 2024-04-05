import { useEffect } from "react";
import { useSelector } from "react-redux";

function Comment({ post, comt }) {
  const currentProfile = useSelector(state => state.profile.user);

  console.log("currentPRPRPRPRR", currentProfile);
  console.log("POSITTTTIT", post);
  console.log("COMMMEME", comt);
  // const getComment = () => {
  //   const ExperiencesEndpoint = "https://striveschool-api.herokuapp.com/api/comments/" + post;
  //   const BearerLuca =
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYmY3MWEyODFkODAwMTlhM2VjNGMiLCJpYXQiOjE3MTIwNDU5MzcsImV4cCI6MTcxMzI1NTUzN30.hmJKIzkyLuUnHRSgl7aIoiEUzVYkWjsw30SWCcApqpw";
  //   const BearerNicole =
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzBkNGEyODFkODAwMTlhM2VjNTAiLCJpYXQiOjE3MTIwNDYyOTIsImV4cCI6MTcxMzI1NTg5Mn0.xBtMmk_mwc9nbIKbU3G9nYXBHFKgy3RjAB0nQS4tCJY";
  //   const BearerGianmarco =
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzA1ZmEyODFkODAwMTlhM2VjNGYiLCJpYXQiOjE3MTIwNDYxODIsImV4cCI6MTcxMzI1NTc4Mn0.hB0fH0MLwLZaP_II1wg4hLStxwhbtsHKeZhQ8jf2DfM";
  //   const BearerMarco =
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYjhmZGEyODFkODAwMTlhM2VjNDAiLCJpYXQiOjE3MTIwNDQzMTUsImV4cCI6MTcxMzI1MzkxNX0.5M62SNzOSA7J8tw38IKZhtmYcf6JwWgcVMRzeUSoHRY";

  //   fetch(ExperiencesEndpoint, {
  //     headers: {
  //       Authorization: BearerLuca,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(resp => {
  //       if (resp.ok) {
  //         return resp.json();
  //       } else {
  //         throw new Error("Quacosa è andato storto!");
  //       }
  //     })
  //     .then(obj => {
  //       console.log(obj);
  //     })
  //     .catch(error => {
  //       console.log("Error", error);
  //     });
  // };

  // useEffect(() => {
  //   getComment();
  // }, []);

  return (
    <div className="d-flex mt-2 px-2">
      <div className="pt-2">
        <div width={30} height={30} className="cp me-2 rounded-circle object-fit-cover">
          {comt.rate}{" "}
        </div>
      </div>
      <div className=" w-100">
        <div className="d-flex cp p-2 bg-comment">
          <div>
            <p className="small fw-bold line-heigh-name cp">{comt.author}</p>
            <p className="opacity-75 line-heigh">{comt.createdAt}</p>
            <p className="mt-2 small">{comt.comment}</p>
          </div>
        </div>
        <div className="opacity-75 cp mt-2 line-heigh fw-bold">Consiglia | Rispondi</div>
      </div>
    </div>
  );
}
export default Comment;
