import { useDispatch, useSelector } from "react-redux";
import AddCommentResponse from "./AddCommentResponse";
import Comment from "./Comment";
import { useEffect } from "react";
import { fetchComments } from "../../redux/actions/comments";

function SectionComment({ post }) {
  const comments = useSelector((state) => state.comments.comments);

  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(fetchComments());
  }, []);

  return (
    <>
      <AddCommentResponse post={post} />
      {comments &&
        comments.map((comment, i) => comment.elementId === post._id && <Comment post={post} comt={comment} key={i} />)}
    </>
  );
}
export default SectionComment;
