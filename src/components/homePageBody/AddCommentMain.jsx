import { useDispatch, useSelector } from "react-redux";
import ModalComment from "./ModalComment";
import { useState } from "react";
import { useEffect } from "react";
import { getAccount } from "../../redux/actions";

function AddCommentMain() {
  const currentProfile = useSelector(state => state.profile.user);
  console.log(currentProfile);

  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(getAccount());
  }, []);

  return (
    <div className="sidebar-container pt-2 pb-1 px-3">
      <div className="d-flex align-items-center">
        <img
          className="me-2 rounded-circle object-fit-cover cp"
          src={
            currentProfile !== null
              ? currentProfile.image
              : "https://openclipart.org/download/247319/abstract-user-flat-3.svg"
          }
          alt={currentProfile !== null ? currentProfile.username : "Nome Utente"}
          width={45}
          height={45}
        />
        <div className="add-comm-search-input w-100" onClick={() => setModalShow(true)}>
          <input type="text" placeholder="Avvia un post" className="textarea-focus small" />
        </div>
      </div>
      <div className="d-flex justify-content-around py-1">
        <div className="d-flex align-items-center like-section">
          <img src="multimedia.svg" alt="" />
          <p className="small ms-2 opacity-75">Contenuti multimediali</p>
        </div>
        <div className="d-flex align-items-center like-section">
          <img src="calendar.svg" alt="" />
          <p className="small ms-2 opacity-75">Evento</p>
        </div>
        <div className="d-flex align-items-center like-section">
          <img src="article.svg" alt="" />
          <p className="small ms-2 opacity-75">Scrivi un articolo</p>
        </div>
      </div>
      <ModalComment show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default AddCommentMain;
