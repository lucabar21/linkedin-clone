import { Card, Row, Col } from "react-bootstrap";
import { TbPointFilled } from "react-icons/tb";
import HomepageFooter from "./HomepageFooter";

const Rightbar = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className=" mb-4 rounded-4">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="fw-bold pt-3 px-3">Linkedin Notizie</h6>
                <img src="/info.svg" alt="" className="mt-3 me-3" />
              </div>
              <div className="mt-3">
                <div>
                  <div className="homepage-news py-1 d-flex">
                    <TbPointFilled className="mt-1 ms-3" />
                    <div>
                      <p className="fw-bold px-2">Quali confini tra vita e lavoro</p>
                      <p className="mb-2 text-muted  px-2">Notizie principali</p>
                    </div>
                  </div>

                  <div className="homepage-news py-1 d-flex">
                    <TbPointFilled className="mt-1 ms-3" />
                    <div>
                      <p className="fw-bold  px-2">Lamborghini ritocca il logo</p>
                      <p className="mb-2 text-muted px-2">1 giorno fa</p>
                    </div>
                  </div>

                  <div className="homepage-news py-1 d-flex">
                    <TbPointFilled className="mt-1 ms-3" />
                    <div>
                      <p className="fw-bold px-2">Worldpay integra Satispay</p>
                      <p className="mb-2 text-muted px-2">1 giorno fa</p>
                    </div>
                  </div>

                  <div className="homepage-news py-1 d-flex">
                    <TbPointFilled className="mt-1 ms-3" />
                    <div>
                      <p className="fw-bold px-2">Private equity in frenata</p>
                      <p className="mb-2 text-muted px-2">5 giorni fa</p>
                    </div>
                  </div>
                  <div className="homepage-news py-1 d-flex">
                    <TbPointFilled className="mt-1 ms-3" />
                    <div>
                      <p className="fw-bold px-2">Esercizi per collaborare meglio</p>
                      <p className="mb-2 text-muted px-2">22 ore fa</p>
                    </div>
                  </div>
                  <div className="my-3"></div>
                </div>
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
