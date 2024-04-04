import { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { Spinner } from "react-bootstrap";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const randNum = Math.floor(Math.random() * 1000);

  const [numAdd, setNumAdd] = useState(10);

  const fetchPosts = () => {
    const ExperiencesEndpoint = `https://striveschool-api.herokuapp.com/api/posts/`;

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
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts ? (
        posts.slice(randNum, randNum + numAdd).map((post, i) => <CardPost key={i} post={post} />)
      ) : (
        <div className="d-flex justify-content-center my-5">
          <Spinner />{" "}
        </div>
      )}
      <div className="my-4 d-flex justify-content-center">
        <div
          onClick={() => {
            setNumAdd(numAdd + 10);
          }}
        >
          <button
            id="buttonPills2"
            className="mx-1 mt-2 p-3 rounded-pill fw-medium d-flex no-wrap justify-content-center align-items-center"
          >
            Vedi nuovi post
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
