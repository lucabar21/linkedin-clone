import { useState } from "react";
import ChatBig from "./ChatBig";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function ChatgMin() {
  const [openClose, setOpenClose] = useState(false);

  const currentProfile = useSelector(state => state.profile.user);

  const location = useLocation();

  const handleClick = () => {
    setOpenClose(!openClose);
  };

  return (
    <>
      {location.pathname === `/` ? (
        <div></div>
      ) : (
        <div className="chat-min-position chat-container cp" id="chatIndex">
          <div className="p-2">
            <div className="d-flex align-items-center ">
              <div className="me-2">
                <div className="position-relative">
                  <img
                    src={
                      currentProfile !== null
                        ? currentProfile.image
                        : "https://openclipart.org/download/247319/abstract-user-flat-3.svg"
                    }
                    alt={currentProfile !== null ? currentProfile.username : "Nome Utente"}
                    width={35}
                    height={36}
                    className="rounded-circle"
                  />
                  <span className="position-absolute translate-middle right p-1 bg-success border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </div>
              </div>
              <h6 className="me-5 color">Messaggistica</h6>
              <div>
                <img src="/threePoints.svg" alt="" className="circle" />
                <img src="/notePen.svg" alt="" className="circle" />
                <img
                  src="/arrowUp.svg"
                  alt=""
                  className={openClose ? "circle rotate" : "circle"}
                  onClick={handleClick}
                  aria-controls="example-collapse-text"
                  aria-expanded={openClose}
                />
              </div>
            </div>
          </div>
          {openClose && <ChatBig />}
        </div>
      )}
    </>
  );
}
export default ChatgMin;
