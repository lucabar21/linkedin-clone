import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ExperienceModal = (props) => {
  const { formData, handleChange, handleSubmit } = props;

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
