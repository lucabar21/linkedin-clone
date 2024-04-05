import { useEffect, useState } from "react";
import SectionComment from "./SectionComment";
import Comment from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import ModalComment from "./ModalComment";
import { fetchComments } from "../../redux/actions/comments";
import { PiStackOverflowLogoBold } from "react-icons/pi";

function CardPost({ post, pts }) {
  const randNum = Math.floor(Math.random() * 500);
  const [counterLike, setCounterLike] = useState(randNum);
  const [counterComments, setCounterComments] = useState(0); //array lenght comments
  const [openClose, setOpenClose] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const comments = useSelector(state => state.comments.comments);
  const currentProfile = useSelector(state => state.profile.user);

  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(fetchComments());
  }, []);

  useEffect(() => {
    const onlyPostComments = comments && comments.filter(comment => comment.elementId === post._id);
    if (onlyPostComments !== undefined) {
      console.log("onlyPostComments", onlyPostComments.length);
      setCounterComments(onlyPostComments.length);
    }
  }, [comments.length, post]);

  const handleClick = () => {
    setOpenClose(!openClose);
  };

  return (
    <div className={openClose ? "sidebar-container p-3 pb-3" : "sidebar-container p-3 pb-0"}>
      <div className="border-bottom">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              className="me-2 rounded-circle object-fit-cover cp"
              src={post.user.image}
              alt="Nome Utente"
              width={45}
              height={45}
            />
            <div className="d-flex">
              <div>
                <p className="small fw-bold line-heigh-name cp">
                  {post.user.name} {post.user.surname}
                </p>
                <p className="opacity-75 line-heigh">
                  {post.user.title} <br></br>
                  {post.updatedAt}
                </p>
              </div>
            </div>
          </div>
          {currentProfile && currentProfile._id === post.user._id ? (
            <div className="d-flex follow-section" onClick={() => setModalShow(true)}>
              <img className="me-1" src="/pen.svg" alt="" width={20} height={20} />
            </div>
          ) : (
            <div className="d-flex follow-section">
              <img className="me-1" src="plus.svg" alt="" width={20} height={20} />
              <p>Segui</p>
            </div>
          )}
        </div>
        <div>
          <div className="my-3">{post.text}</div>
          {/* inserire qui il crontrollo nel caso l'immagine non sia presente nel post */}
          {post.image && (
            <div className="overflow-hidden text-center">
              <img src={post.image} alt="Immagine contenuta nel post" className="object-fit-cover w-50" />
            </div>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center my-2">
            <img src="iconsLike.png" alt="" width={15} height={15} />
            <p className="small opacity-75 ms-2">{counterLike}</p>
          </div>
          <div>
            <p className="small opacity-75">{counterComments} commenti</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around mb-1">
        <div
          className="like-section mt-1 d-flex align-items-center cp"
          onClick={() => {
            setCounterLike(counterLike + 1);
          }}
        >
          <img src="/like.svg" alt="" />
          <p className="small opacity-75 ms-1">Consiglia</p>
        </div>
        <div className="like-section mt-1 d-flex align-items-center cp" onClick={handleClick}>
          <img src="/comment.svg" alt="" />
          <p className="small opacity-75 ms-1">Commenta</p>
        </div>
        <div className="like-section mt-1 d-flex align-items-center cp">
          <img src="/sharing.svg" alt="" />
          <p className="small opacity-75 ms-1">Diffondi il post</p>
        </div>
        <div className="like-section mt-1 d-flex align-items-center cp">
          <img src="/connect.svg" alt="" />
          <p className="small opacity-75 ms-1">Invia</p>
        </div>
      </div>
      {openClose && <SectionComment post={post} pts={pts} />}

      <ModalComment show={modalShow} onHide={() => setModalShow(false)} edit={"Modifica"} post={post} />
    </div>
  );
}
export default CardPost;
