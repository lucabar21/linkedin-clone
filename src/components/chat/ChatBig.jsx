function ChatBig() {
  return (
    <>
      <div className="chat-border chat-space" id="chatIndex">
        <div className="d-flex chat-searchbar">
          <img src="/search.svg" alt="" width={20} />
          <input type="search" placeholder="Cerca messaggi" className="chat-remove-style-searchbar ms-2" />
          <img src="/regular.svg" alt="" width={18} className="ms-auto" />
        </div>
        <div className="d-flex text-center">
          <div className="chat-section chat-section-active">In evidenza</div>
          <div className="chat-section">Altro</div>
        </div>
        <div className="d-flex align-items-center p-2">
          <img
            src="https://www.svgrepo.com/show/382098/female-avatar-girl-face-woman-user-6.svg"
            alt=""
            width={55}
            className="me-2"
          />
          <div className="d-flex flex-column w-100 chat-bottom">
            <div className="d-flex justify-content-between">
              <p className="small">Sempronia Tizia</p>
              <p className="chat-font-mess">28 mar</p>
            </div>
            <p className="small d-block chat-font-mess mt-1">
              <span className="fw-bold">Offerta di LinkedIn</span> Ciao Sempronia! <br></br> Mi chiamo Caia e faccio
              parte del...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatBig;
