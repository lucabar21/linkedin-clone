import React, { useState } from "react";
import { Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import FooterLogin from "./FooterLogin";

const LoginPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [savePassword, setSavePassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      console.log("Accesso eseguito");
      if (savePassword) {
        console.log("Password salvata");
      }
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div>
      <Row className=" align-items-center">
        <div className="d-flex flex-wrap justify-content-center">
          <Col md={12} lg={6}>
            <Card className="p-1" id="loginCard">
              <div className="text-center">
                <img
                  className="footer-logo mb-4"
                  src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
                  alt="LinkedIn Logo"
                  style={{ maxWidth: "120px" }}
                />
                <p id="loginTitle">Ti diamo il benvenuto nella tua community professionale</p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo username"
                      required
                      className="p-3 rounded-3"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Inserisci la tua password"
                      required
                      className="p-3 rounded-3"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex align-items-start" controlId="formSavePassword">
                    <Form.Check
                      type="checkbox"
                      label="Ricordami"
                      checked={savePassword}
                      onChange={(e) => setSavePassword(e.target.checked)}
                      inline
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 p-3 rounded-pill mt-4">
                    Accedi
                  </Button>
                </Form>
                {showAlert && (
                  <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    Compila tutti i campi prima di effettuare il login.
                  </Alert>
                )}
              </div>
            </Card>
          </Col>
          <Col md={12} lg={6} id="loginImgContainer">
            {" "}
            <img id="loginImg" src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"></img>
          </Col>
        </div>
      </Row>
      <FooterLogin />
    </div>
  );
};

export default LoginPage;
