import { useState } from "react";
import ChatBig from "./ChatBig";

function ChatgMin() {
  const [openClose, setOpenClose] = useState(false);

  const handleClick = () => {
    setOpenClose(!openClose);
  };

  return (
    <>
      <div className="chat-min-position chat-container cp">
        <div className="p-2">
          <div className="d-flex align-items-center ">
            <div className="me-2">
              <div className="position-relative">
                <img
                  src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
                  alt=""
                  width={35}
                />
                <span className="position-absolute translate-middle right p-1 bg-success border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
            </div>
            <h6 className="me-5 color">Messaggistica</h6>
            <div>
              <img src="threePoints.svg" alt="" className="circle" />
              <img src="notePen.svg" alt="" className="circle" />
              <img
                src="arrowUp.svg"
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
    </>
  );
}
export default ChatgMin;
