import { Card, Row, Col } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";
import HomepageFooter from "./HomepageFooter";

const Rightbar = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className=" mb-4 rounded-4">
            <div className="p-3">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold mb-0">Linkedin Notizie</h6>
                <BsFillInfoSquareFill className="fs-6 color-secondary" />
              </div>
              <div className="mt-3">
                <ul className="ps-3">
                  <div className="homepage-news">
                    <li className="fw-bold">Quali confini tra vita e lavoro</li>
                    <p className="mb-2 text-muted">Notizie principali</p>
                  </div>

                  <div className="homepage-news">
                    <li className="fw-bold">Lamborghini ritocca il logo</li>
                    <p className="mb-2 text-muted">1 giorno fa</p>
                  </div>

                  <div className="homepage-news">
                    <li className="fw-bold">Worldpay integra Satispay</li>
                    <p className="mb-2 text-muted">1 giorno fa</p>
                  </div>

                  <div className="homepage-news">
                    <li className="fw-bold">Private equity in frenata</li>
                    <p className="mb-2 text-muted">5 giorni fa</p>
                  </div>
                  <div className="homepage-news">
                    <li className="fw-bold">Esercizi per collaborare meglio</li>
                    <p className="mb-2 text-muted">22 ore fa</p>
                  </div>
                </ul>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <HomepageFooter />
    </>
  );
};

export default Rightbar;
