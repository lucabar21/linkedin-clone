function ChatBig() {
  return (
    <>
      <div className="chat-border chat-space " id="chatIndex">
        <div className="d-flex chat-searchbar">
          <img src="/search.svg" alt="" width={20} />
          <input type="search" placeholder="Cerca messaggi" className="chat-remove-style-searchbar ms-2" />
          <img src="/regular.svg" alt="" width={18} className="ms-auto" />
        </div>
        <div className="d-flex text-center">
          <div className="chat-section chat-section-active">In evidenza</div>
          <div className="chat-section">Altro</div>
        </div>
        <div className="d-flex align-items-start p-2">
          <img
            src="https://attaccodeigiganti.wordpress.com/wp-content/uploads/2017/05/commander_erwin_smith.png"
            alt=""
            width={55}
            className="me-2 rounded-circle"
          />
          <div className="d-flex flex-column w-100 chat-bottom">
            <div className="d-flex justify-content-between">
              <p className="small">Capitano Erwin</p>
              <p className="chat-font-mess">05 apr</p>
            </div>
            <p className="small d-block chat-font-mess mt-1">
              <span className="fw-bold">Offerta di LinkedIn</span> Ciao! <br></br> Mi chiamo Erwin e sono il capitano del corpo di ricer...
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start p-2">
          <img
            src="https://diariodipensieripersi.it/wp-content/uploads/2014/08/Gandalf-21.jpg"
            alt=""
            width={55}
            height={55}
            className="me-2 rounded-circle"
          />
          <div className="d-flex flex-column w-100 chat-bottom">
            <div className="d-flex justify-content-between">
              <p className="small">Gandalf the Grey</p>
              <p className="chat-font-mess">04 apr</p>
            </div>
            <p className="small d-block chat-font-mess mt-1">
              <span className="fw-bold">Offerta di LinkedIn</span> Salve <br></br> Mi chiamo Gandalf e sono uno stregone molto poten...
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start p-2">
          <img
            src="https://images.everyeye.it/img-notizie/dragon-ball-origini-mr-satan-toriyama-svela-segreto-v3-498265.jpg"
            alt=""
            width={55}
            height={55}
            className="me-2 rounded-circle"
          />
          <div className="d-flex flex-column w-100 chat-bottom">
            <div className="d-flex justify-content-between">
              <p className="small">Mr Satan</p>
              <p className="chat-font-mess">03 apr</p>
            </div>
            <p className="small d-block chat-font-mess mt-1">
              <span className="fw-bold">Offerta di LinkedIn</span> Hey! <br></br> Mi chiamo MR-Satan e sono il campione del mond...
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start p-2">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/spongebob-rainbow-meme-video-16x9-0-1543415942.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"
            alt=""
            width={55}
            height={55}
            className="me-2 rounded-circle"
          />
          <div className="d-flex flex-column w-100 chat-bottom">
            <div className="d-flex justify-content-between">
              <p className="small">Spongebob</p>
              <p className="chat-font-mess">03 apr</p>
            </div>
            <p className="small d-block chat-font-mess mt-1">
              <span className="fw-bold">Offerta di LinkedIn</span> Heheheh! <br></br> Mi chiamo Spongebob e vivo sotto il mar..
            </p>
          </div>
        </div>
        <div className="d-flex align-items-start p-2">
          <img
            src="https://avatarfiles.alphacoders.com/370/370439.jpg"
            alt=""
            width={55}
            height={55}
            className="me-2 rounded-circle"
          />
          <div className="d-flex flex-column w-100 chat-bottom">
            <div className="d-flex justify-content-between">
              <p className="small">Darth Vader</p>
              <p className="chat-font-mess">03 apr</p>
            </div>
            <p className="small d-block chat-font-mess mt-1">
              <span className="fw-bold">Offerta di LinkedIn</span> C I A O <br></br> Mi chiamo Darth Vader e sono un sith...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatBig;
