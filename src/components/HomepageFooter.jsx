import { Container, Row, Col } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaCog } from "react-icons/fa";

const HomepageFooter = () => {
return (
        <footer>
        <Container className="mt-4">
        <Row>
            <Col md={3}>
            <ul className="list-unstyled text-muted">
                <li className="pb-2">Informazioni</li>
                <li className="pb-2">Linee guida della community</li>
                <li className="pb-2">Privacy e condizioni</li>
                <li className="pb-2">Sales Solutions</li>
                <li className="pb-2">Centro sicurezza</li>
            </ul>
            </Col>
            <Col md={2}>
            <ul className="list-unstyled text-muted">
                <li className="pb-2">Accessibilità</li>
                <li className="pb-2">Carriera</li>
                <li className="pb-2">Opzioni per gli annunci pubblicitari</li>
                <li className="pb-2">Mobile</li>
            </ul>
            </Col>
            <Col md={3}>
            <ul className="list-unstyled text-muted">
                <li className="pb-2">Talent Solutions</li>
                <li className="pb-2">Soluzioni di marketing</li>
                <li className="pb-2">Pubblicità</li>
                <li className="pb-2">Piccole imprese</li>
            </ul>
            </Col>
            <Col md={3}>
            <ul className="list-unstyled text-muted">
                <li>
                <Container>
                    <Row>
                    <Col md={2}>
                    <span><AiFillQuestionCircle /></span>
                    </Col>
                    <Col md={9} className="pb-2">
                        Domande?
                        <br />
                        Visita il nostro centro assistenza.
                    </Col>
                    </Row>
                </Container>
                </li>
                <li>
                <Container>
                    <Row>
                    <Col md={2}>
                        <span><FaCog /></span>
                    </Col>
                    <Col md={9} className="pb-2">
                        Gestisci il tuo account e la tua privacy
                        <br />
                        Vai alle impostazioni
                    </Col>
                    </Row>
                </Container>
                </li>
            </ul>
            </Col>
        </Row>
        <Row style={{ marginLeft: "-2px" }} className="text-muted pb-2">LinkedIn Corporation © 2024</Row>
        </Container>
        </footer>
    );
};

export default HomepageFooter;