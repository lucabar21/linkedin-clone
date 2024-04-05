import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Formazione = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className="rounded-4 mt-2">
            <Card.Body className="mx-2 ">
              <Card.Title className="d-flex justify-content-between align-items-center">
                <h4 className="mb-2">Formazione</h4>
                <div className="d-flex align-items-end">
                  <div id="buttonPlus" className="p-2">
                    <img src="/plus.svg" alt="" />
                  </div>
                  <div id="buttonPlus" className="p-2">
                    <img src="/pen.svg" alt="" />
                  </div>
                </div>
              </Card.Title>
              <div className="d-flex" id="experiences">
                <div>
                  <img src="/epicode.svg" alt="Placeholder" className="img-fluid mb-2 " id="experiencesImg" />
                </div>
                <div className="mb-3 ps-2">
                  <h6 id="titleExperiences">EPICODE </h6>
                  <p id="companyExperiences">Formazione Full-Stack Developer</p>
                  <div id="infoExperiences">
                    <p>gen 2024 - lug 2024</p>
                  </div>
                </div>
              </div>
              <div className="d-flex my-4" id="experiences">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-mON6ahtd4DlEIB9nH0lVTW6cAWiqZGej_-lHQUBAxVKS2llu-Z6gctrFD4SXUYQX0U&usqp=CAU"
                    alt="Placeholder"
                    className="img-fluid mb-2 "
                    id="experiencesImg"
                  />
                </div>
                <div className="mb-3 ps-2">
                  <h6 id="titleExperiences">Università dell'ozio </h6>
                  <p id="companyExperiences">Sfaticato professionista</p>
                  <div id="infoExperiences">
                    <p>mag 1996 - In corso</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Formazione;
