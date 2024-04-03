import React from "react";
import { Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaSatelliteDish } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { BiRightArrowAlt } from "react-icons/bi";

const Risorse = () => {
    return (
        <Container>
            <Row>
                <Col className="pb-3">
                    <div className="mt-2">
                        <Card className="rounded-4">
                            <Card.Body>
                            <Card.Title>
                                <h4 className="mb-2">Risorse</h4>
                            </Card.Title>
                            <Card.Subtitle>
                                <AiFillEye /> Solo per te
                            </Card.Subtitle>
                            <div>
                                <div className="mt-2">
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                    <FaSatelliteDish />
                                    </Col>
                                    <Col>
                                    <h6 className="mb-0">Modalità creazione di contenuti<Button variant="secondary">no</Button></h6>
                                    <p>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</p>
                                    </Col>
                                </Row>
                                <Row className="align-items-center">
                                    <Col xs="auto">
                                    <SlPeople className="sidebar-align" />
                                    </Col>
                                    <Col>
                                    <h6 className="mb-0">La mia rete</h6>
                                    <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
                                    </Col>
                                </Row>
                                </div>
                            </div>
                            </Card.Body>
                            <ListGroup.Item className="text-center">
                            <p>
                                Mostra tutte le risorse
                                <BiRightArrowAlt />
                            </p>
                            </ListGroup.Item>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Risorse;

// gli "p" andranno sostituiti con dei Link probabilmente
