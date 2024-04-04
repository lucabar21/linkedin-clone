import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createExperience } from "../redux/actions/experience";
import { getExperience } from "../redux/actions/experience";

const ExperienceModal = (props) => {
  const dispatch = useDispatch();

  const initialData = useSelector((state) => state.exp.experience);
  const currentData = useSelector((state) => state.profile.user);

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        role: initialData.role || "",
        company: initialData.company || "",
        startDate: initialData.startDate || "",
        endDate: initialData.endDate || "",
        description: initialData.description || "",
        area: initialData.area || "",
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
    dispatch(createExperience(currentData._id, formData));
    dispatch(getExperience(currentData._id));
    props.onHide();
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Aggiungi esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Ruolo</InputGroup.Text>
              <Form.Control
                placeholder="Il tuo ruolo"
                aria-label="name"
                aria-describedby="basic-addon1"
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">Compagnia</InputGroup.Text>
              <Form.Control
                placeholder="La tua compagnia"
                aria-label="company"
                aria-describedby="basic-addon2"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">Data inizio esperienza</InputGroup.Text>
              <Form.Control
                placeholder="2022-06-16"
                aria-label="startDate"
                type="date"
                aria-describedby="basic-addon3"
                value={formData.startDate}
                onChange={(e) => handleChange("startDate", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon4">Data fine esperienza</InputGroup.Text>
              <Form.Control
                placeholder="2022-12-16"
                aria-label="endDate"
                aria-describedby="basic-addon4"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleChange("endDate", e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon5">Descrivi la tua esperienza</InputGroup.Text>
              <Form.Control
                placeholder="La tua descrizione"
                aria-label="description"
                aria-describedby="basic-addon5"
                type="textarea"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
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
export default ExperienceModal;
