import React, { useState } from "react";
import { Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/actions/login";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [savePassword, setSavePassword] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      console.log("Accesso eseguito");
      if (savePassword) {
        console.log("Password salvata");
      }
      dispatch({ type: SET_USER, payload: { name: username } });
      navigate(`/`);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Row className="justify-content-center">
      <Col md={9} lg={6}>
        <Card className="p-4">
          <div className="text-center">
            <img
              className="footer-logo mb-4"
              src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
              alt="LinkedIn Logo"
              style={{ maxWidth: "150px" }}
            />
            <h2>Accedi a LinkedIn</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Inserisci la tua password" required />
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
              <Button variant="primary" type="submit" className="w-100">
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
    </Row>
  );
};

export default LoginPage;
