import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { TbPointFilled } from "react-icons/tb";

function HeroSection() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="rounded-4 mt-3">
              <Card.Img
                id="heroImg"
                className="rounded-top-4"
                variant="top"
                src="https://sb.ecobnb.net/app/uploads/sites/2/2018/04/shoot-n-design-71270-unsplash.jpg"
              />{" "}
              <Card.Img id="profileImg" src="https://www.corrierenerd.it/wp-content/uploads/2023/04/spongebob.jpg" />
              <Card.Body id="cardBody" className="p-4">
                <div className="d-flex justify-content-end">
                  {" "}
                  <Card.Img id="profilePen" src="pen.svg" className="ml-auto" />
                </div>

                <Card.Text className="mt-4 ">
                  <Row>
                    {" "}
                    <Col className="d-flex flex-wrap  justify-content-start align-items-center">
                      <h2 id="titleName">Spongebob</h2>{" "}
                      <button
                        className="ms-3 fw-medium d-flex no-wrap justify-content-center align-items-center"
                        id="buttonVerify"
                      >
                        {" "}
                        <img src="verify.svg" alt="verifyShield" className="me-1" />
                        Verifica ora
                      </button>
                    </Col>
                    <Col className="d-flex me-5 justify-content-end align-items-center">
                      <span id="education" className="ps-2 fw-medium">
                        <img id="epicodLogo" src="epicode.svg" alt="" />
                        Epicode
                      </span>
                    </Col>
                  </Row>
                </Card.Text>
                <Card.Text>
                  <button className="ps-0 me-1" id="education2">
                    Epicode
                  </button>
                </Card.Text>
                <Card.Text>
                  <span id="location" className="me-1">
                    {" "}
                    Bikini Bottom,Oceano ·{" "}
                  </span>
                  <a href="#" id="information" className="fw-medium">
                    Informazioni di contatto
                  </a>
                </Card.Text>
                <div className="d-flex flex-wrap mb-3">
                  <button
                    id="buttonPills1"
                    className="me-1 mt-2 p-3 btn btn-primary rounded-pill fw-bolder d-flex no-wrap justify-content-center align-items-center"
                  >
                    Disponibile per
                  </button>
                  <button
                    id="buttonPills2"
                    className="mx-1 mt-2 p-3 rounded-pill fw-medium d-flex no-wrap justify-content-center align-items-center"
                  >
                    Aggiungi sezione del profilo
                  </button>
                  <button
                    id="buttonPills3"
                    className="mx-1 mt-2 p-3 rounded-pill fw-medium d-flex no-wrap justify-content-center align-items-center"
                  >
                    Altro
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSection;
