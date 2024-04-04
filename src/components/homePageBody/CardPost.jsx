import { useState } from "react";
import SectionComment from "./SectionComment";
import Comment from "./Comment";

function CardPost() {
  const [counterLike, setCounterLike] = useState(0);
  const [counterComments, setCounterComments] = useState(0); //array lenght
  const [openClose, setOpenClose] = useState(false);

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
              src="https://openclipart.org/download/247319/abstract-user-flat-3.svg"
              alt="Nome Utente"
              width={45}
              height={45}
            />
            <div className="d-flex">
              <div>
                <p className="small fw-bold line-heigh-name cp">Name</p>
                <p className="opacity-75 line-heigh">
                  Professione <br></br>Pubblicato
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex follow-section">
            <img className="me-1" src="plus.svg" alt="" width={20} height={20} />
            <p>Segui</p>
          </div>
        </div>
        <div>
          <div className="my-3">
            Contenuto Post <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odio tempora
            suscipit assumenda eaque est ex natus quasi at nostrum, porro, quibusdam, amet reiciendis autem numquam quos
            laborum maxime animi.
          </div>
          {/* inserire qui il crontrollo nel caso l'immagine non sia presente nel post */}
          <img src="" alt="Immagine contenuta nel post" />
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
          <img src="like.svg" alt="" />
          <p className="small opacity-75 ms-1">Consiglia</p>
        </div>
        <div className="like-section mt-1 d-flex align-items-center cp" onClick={handleClick}>
          <img src="comment.svg" alt="" />
          <p className="small opacity-75 ms-1">Commenta</p>
        </div>
        <div className="like-section mt-1 d-flex align-items-center cp">
          <img src="sharing.svg" alt="" />
          <p className="small opacity-75 ms-1">Diffondi il post</p>
        </div>
        <div className="like-section mt-1 d-flex align-items-center cp">
          <img src="connect.svg" alt="" />
          <p className="small opacity-75 ms-1">Invia</p>
        </div>
      </div>
      {openClose && <SectionComment />}
      {openClose && <Comment />}
    </div>
  );
}
export default CardPost;
