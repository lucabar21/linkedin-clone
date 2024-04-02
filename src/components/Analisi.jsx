import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { SlPeople } from 'react-icons/sl';
import { IoIosPodium } from "react-icons/io";


const Analisi = () => {
    return (
        <div className="mt-2">
        <Card>
            <Card.Body>
            <Card.Title>
                <h2 className="mb-0">Analisi</h2>
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
                    <h3 className="mb-0">1 visualizzazione del profilo</h3>
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
                    <h3 className="mb-0">6 comparse nei motori di ricerca</h3>
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
                    <h3 className="mb-0">Crea un post per aumentare l’interesse.</h3>
                    <p>Ultimi 7 giorni</p>
                    </Col>
                </Row>
                </div>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Analisi;
