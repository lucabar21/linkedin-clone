import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

import { BiRightArrowAlt } from "react-icons/bi";

const Analisi = () => {
  return (
    <>
      <div className="mt-2">
        <Card className="rounded-4">
          <Card.Body className="mx-2">
            <Card.Title>
              <h4 className="pb-2">Analisi</h4>
            </Card.Title>
            <Card.Subtitle className="mb-3">
              <img src="eye.svg" alt="" className="me-1" />
              Solo per te
            </Card.Subtitle>
            <div>
              <Row className="align-items-start">
                <Col md={12} lg="auto">
                  <img src="people.svg" alt="" />
                </Col>
                <Col>
                  <h6 className="mb-0">1 visualizzazione del profilo</h6>
                  <p>Scopri chi ha visitato il tuo profilo.</p>
                </Col>

                <Col md={12} lg="auto">
                  <img src="search.svg" alt="" />
                </Col>
                <Col>
                  <h6 className="mb-0">6 comparse nei motori di ricerca</h6>
                  <p>Vedi quante volte compari nei risultati di ricerca.</p>
                </Col>

                <Col md={12} lg="auto">
                  <img src="impression.svg" alt="" />
                </Col>
                <Col>
                  <h6 className="mb-0">Crea un post per aumentare l’interesse.</h6>
                  <p>Ultimi 7 giorni</p>
                </Col>
              </Row>
            </div>
          </Card.Body>
          <div className="component-footer-show text-center">
            <p>
              Mostra tutte le analisi <BiRightArrowAlt />
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Analisi;
