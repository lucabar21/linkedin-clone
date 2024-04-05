import { Col, Row } from "react-bootstrap";

const FooterLogin = () => {
  return (
    <div id="footerLogin">
      <div>
        <Row>
          <Col xs={12} lg={5} className="my-5">
            <p id="loginTitle" className="text-black">
              Trova il lavoro o lo stage giusto per te
            </p>
          </Col>

          <Col md={12} lg={6} className=" my-5">
            <h6 className="mb-3 fw-medium">RICERCHE SUGGERITE</h6>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Ingegneria
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Business Development
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Finanza
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Assistente amministrativo
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Addetto alle vendite
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Servizio clienti
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Operazioni
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Informatica
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Marketing
            </button>
            <button id="buttonLoginFooter" className="p-3 px-4 m-1 rounded-pill fw-medium">
              Risorse umaneVisualizza altro{" "}
            </button>
          </Col>
        </Row>
      </div>
      <div id="footerLogin">
        <Row>
          <Col xs={12} md={4} className="my-5">
            <img
              className="footer-logo"
              src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
              alt="LinkedIn Logo"
              style={{ maxWidth: "120px" }}
            />
          </Col>
          <Col xs={6} sm={3} md={2} className="my-5">
            <p className="fw-bold mb-2">Generale</p>

            <p className="small">Iscriviti</p>
            <p className="small">Centro assistenza</p>
            <p className="small">Informazioni</p>
            <p className="small">Stampa</p>
            <p className="small">Blog</p>
            <p className="small">Opportunità di carriera</p>
            <p className="small">Sviluppatori</p>
          </Col>

          <Col xs={6} sm={3} md={2} className="my-5">
            <p className="fw-bold mb-2">Sfoglia LinkedIn</p>

            <p className="small">Learning</p>
            <p className="small">Lavoro</p>
            <p className="small">Retribuzione</p>
            <p className="small">Mobile</p>
            <p className="small">Servizi</p>
            <p className="small">Prodotti</p>
            <p className="small">Hub Top Companies</p>
          </Col>

          <Col xs={6} sm={3} md={2} className="my-5">
            <p className="fw-bold mb-2">Soluzioni Business</p>

            <p className="small">Talent</p>
            <p className="small">Marketing</p>
            <p className="small">Vendite</p>
            <p className="small">Learning</p>
          </Col>

          <Col xs={6} sm={3} md={2} className="my-5">
            <p className="fw-bold mb-2">Elenchi</p>

            <p className="small">Membri</p>
            <p className="small">Lavoro</p>
            <p className="small">Aziende</p>
            <p className="small">In primo piano</p>
            <p className="small">Post</p>
            <p className="small">Articoli</p>
            <p className="small">Scuole o università</p>
            <p className="small">Notizie</p>
            <p className="small">Newsletter</p>
            <p className="small">Servizi</p>
            <p className="small">Prodotti</p>
            <p className="small">Consigli</p>
            <p className="small">Ricerca persone</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterLogin;
