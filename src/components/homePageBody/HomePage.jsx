import { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/posts";

function HomePage() {
  const posts = useSelector(state => state.posts.posts);
  const randNum = Math.floor(Math.random() * 1000);

  const [numAdd, setNumAdd] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // randNum, randNum + numAdd da rimettere nel map
  return (
    <>
      {posts ? (
        posts
          .sort()
          .slice(posts.length - numAdd, posts.length)
          .map((post, i) => <CardPost key={i} post={post} pts={posts} />)
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
