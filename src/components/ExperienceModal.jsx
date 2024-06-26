import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateExperience } from "../redux/actions/experience";
import { createExperience } from "../redux/actions/experience";
import { getExperience } from "../redux/actions/experience";

const ExperienceModal = (props) => {
  const { experience, modalShow } = props;

  const currentAccount = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();

  const handleChange = (e, fieldName) => {
    if (e.target) {
      const { value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (experience) {
      dispatch(updateExperience(currentAccount._id, experience._id, formData));
    } else {
      dispatch(createExperience(currentAccount._id, formData));
    }

    dispatch(getExperience(currentAccount._id));
    props.onHide();
  };

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  useEffect(() => {
    if (experience) {
      setFormData({
        role: experience.role,
        company: experience.company,
        startDate: experience.startDate,
        endDate: experience.endDate,
        description: experience.description,
        area: experience.area,
      });
    }
  }, [experience]);

  return (
    <>
      <Modal show={modalShow} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
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
                onChange={(e) => handleChange(e, "role")}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">Compagnia</InputGroup.Text>
              <Form.Control
                placeholder="La tua compagnia"
                aria-label="company"
                aria-describedby="basic-addon2"
                value={formData.company}
                onChange={(e) => handleChange(e, "company")}
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
                onChange={(e) => handleChange(e, "startDate")}
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
                onChange={(e) => handleChange(e, "endDate")}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon5">Descrivi la tua esperienza</InputGroup.Text>
              <Form.Control
                placeholder="La tua descrizione"
                aria-label="description"
                aria-describedby="basic-addon5"
                value={formData.description}
                onChange={(e) => handleChange(e, "description")}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon7">Località</InputGroup.Text>
              <Form.Control
                placeholder="Città, (Provincia)"
                aria-label="area"
                aria-describedby="basic-addon7"
                value={formData.area}
                onChange={(e) => handleChange(e, "area")}
              />
            </InputGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                Chiudi
              </Button>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
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
