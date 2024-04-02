function ChatgMin() {
  return (
    <>
      <div className="chat-min-position p-2 chat-container cp">
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
            <img src="arrowUp.svg" alt="" className="circle" />
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatgMin;
