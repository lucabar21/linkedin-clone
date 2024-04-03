import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { SlPeople } from 'react-icons/sl';
import { IoIosPodium } from "react-icons/io";


const Analisi = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="mt-2">
                    
                    <Card className="rounded-4">
                    <Card.Body className="mx-2">
                    <Card.Title>
                        <h4 className="pb-2">Analisi</h4>
                    </Card.Title>
                    <Card.Subtitle>
                        <AiFillEye /> Solo per te
                    </Card.Subtitle>
                    <div>
                        <div className="mt-2">
                        <Row className="align-items-center">
                            <Col xs="auto">
                            <SlPeople />
                            </Col>
                            <Col>
                            <h6 className="mb-0">1 visualizzazione del profilo</h6>
                            <p>Scopri chi ha visitato il tuo profilo.</p>
                            </Col>
                        </Row>
                        </div>
                        <div className="mt-2">
                        <Row className="align-items-center">
                            <Col xs="auto">
                            <BiSearch />
                            </Col>
                            <Col>
                            <h6 className="mb-0">6 comparse nei motori di ricerca</h6>
                            <p>Vedi quante volte compari nei risultati di ricerca.</p>
                            </Col>
                        </Row>
                        </div>
                        <div className="mt-2">
                        <Row className="align-items-center">
                            <Col xs="auto">
                            <IoIosPodium />
                            </Col>
                            <Col>
                            <h6 className="mb-0">Crea un post per aumentare l’interesse.</h6>
                            <p>Ultimi 7 giorni</p>
                            </Col>
                        </Row>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Analisi;
