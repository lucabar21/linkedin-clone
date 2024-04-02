function ChatgMin() {
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
              <img src="arrowUp.svg" alt="" className="circle" />
            </div>
          </div>
        </div>
        <div className="chat-border mb-4">
          <div className="d-flex chat-searchbar">
            <img src="search.svg" alt="" width={20} />
            <input type="search" placeholder="Cerca messaggi" className="chat-remove-style-searchbar ms-2" />
            <img src="regular.svg" alt="" width={18} className="ms-auto" />
          </div>
          <div className="d-flex text-center">
            <div className="chat-section">In evidenza</div>
            <div className="chat-section">Altro</div>
          </div>
          <div className="d-flex p-2">
            <img
              src="https://www.svgrepo.com/show/382098/female-avatar-girl-face-woman-user-6.svg"
              alt=""
              width={50}
              className="me-2"
            />
            <div>
              <p className="d-inline-block">Sempronia Tizia</p>
              <p className="d-inline-block text-end">28 mar</p>
              <p className="small d-block">
                <span className="fw-bolder">Offerta di LinkedIn</span> Ciao Sempronia! Mi chiamo Caia e faccio parte
                del...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatgMin;
