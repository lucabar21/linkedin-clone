import React from "react";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaSatelliteDish } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

const Risorse = () => {
  return (
    <>
      <Row>
        <Col className="pb-3">
          <div className="mt-2">
            <Card className="rounded-4">
              <Card.Body className="mx-2">
                <Card.Title>
                  <h4 className="mb-2">Risorse</h4>
                </Card.Title>
                <Card.Subtitle>
                  <img src="/eye.svg" alt="" className="me-1" />
                  Solo per te
                </Card.Subtitle>
                <div>
                  <div className="mt-3">
                    <Row className="align-items-center">
                      <Col xs="auto" className="d-flex flex-nowrap">
                        <img src="/satellite.svg" alt="" className="d-flex align-self-start" />

                        <div className="ms-2">
                          <h6 className="mb-2">
                            Modalità creazione di contenuti
                            <Button className="mx-2" variant="secondary">
                              no
                            </Button>
                          </h6>

                          <p className="mb-2">
                            Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di
                            creazione
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col xs="auto" className="d-flex flex-nowrap mt-2">
                        <img src="/people.svg" alt="" className="d-flex align-self-start " />

                        <div className=" mt-1 ms-2">
                          <h6 className="mb-2">La mia rete</h6>
                          <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card.Body>
              <ListGroup.Item className="text-center">
                <div className="component-footer-show ">
                  <p>
                    {" "}
                    Mostra tutte le risorse <BiRightArrowAlt />
                  </p>
                </div>
              </ListGroup.Item>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Risorse;

// gli "p" andranno sostituiti con dei Link probabilmente
