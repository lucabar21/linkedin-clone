import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomepageFooter = () => {
  return (
    <footer>
      <Container className="my-4">
        <Row className="justify-content-center">
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <ul className="list-unstyled text-muted">
              <li className="d-inline px-2 homepage-footer">Informazioni</li>
              <li className="d-inline px-2 homepage-footer">Accessibilità</li>
              
            </ul>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <ul className="list-unstyled text-muted">
              <li className="d-inline px-2 homepage-footer">Centro assistenza</li>
              <li className="d-inline px-2 homepage-footer">Privacy e condizioni</li>
              <li className="d-inline px-2 homepage-footer">Opzioni per gli annunci pubblicitari</li>
              <li className="d-inline px-2 homepage-footer">Pubblicità</li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <ul className="list-unstyled text-muted">
              <li className="d-inline px-2 homepage-footer">Servizi alle aziende</li>
              <li className="d-inline px-2 homepage-footer">Scarica l’app LinkedIn</li>
              <li className="d-inline px-2 homepage-footer">Altro</li>
            </ul>
          </Col>
        </Row>
        
        <Row className="text-muted pt-3">
        <Col md className="text-center">
            <img
              className="footer-logo"
              src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
              alt="LinkedIn Logo"
              style={{ maxWidth: "75px" }}
            /> <p className="d-inline">LinkedIn Corporation © 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default HomepageFooter;
