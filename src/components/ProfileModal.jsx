import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putAccount } from "../redux/actions";

const ProfileModal = (props) => {
  const dispatch = useDispatch();

  const initialData = useSelector((state) => state.profile.user);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    title: "",
    bio: "",
    area: "",
  });
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        surname: initialData.surname,
        email: initialData.email,
        username: initialData.username,
        title: initialData.title,
        bio: initialData.bio,
        area: initialData.area,
      });
    }
  }, [initialData]);

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putAccount(formData));
    props.onHide();
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modifica Profilo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
              <Form.Control
                placeholder="Il tuo nome"
                aria-label="name"
                aria-describedby="basic-addon1"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">Cognome</InputGroup.Text>
              <Form.Control
                placeholder="Il tuo Cognome"
                aria-label="surname"
                aria-describedby="basic-addon2"
                value={formData.surname}
                onChange={(e) => handleChange("surname", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Email</InputGroup.Text>
              <Form.Control
                placeholder="name@example.com"
                aria-label="email"
                type="email"
                aria-describedby="basic-addon3"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon4">Username</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="username"
                aria-describedby="basic-addon4"
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon5">Titolo</InputGroup.Text>
              <Form.Control
                placeholder="Il tuo titolo"
                aria-label="title"
                aria-describedby="basic-addon5"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon6">Bio</InputGroup.Text>
              <Form.Control
                placeholder="Qualcosa su di te"
                aria-label="bio"
                aria-describedby="basic-addon6"
                value={formData.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon7">Località</InputGroup.Text>
              <Form.Control
                placeholder="Città, (Provincia)"
                aria-label="area"
                aria-describedby="basic-addon7"
                value={formData.area}
                onChange={(e) => handleChange("area", e.target.value)}
              />
            </InputGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                Chiudi
              </Button>
              <Button variant="primary" type="submit">
                Salva
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ProfileModal;
