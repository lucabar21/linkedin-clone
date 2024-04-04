import React, { useEffect } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getExperience } from "../../redux/actions/experience";
import { useState } from "react";
import ExperienceModal from "../ExperienceModal";
import { updateExperience } from "../../redux/actions/experience";
import { createExperience } from "../../redux/actions/experience";

const Esperienza = () => {
  const [modalShow, setModalShow] = useState(false);

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const experiences = useSelector((state) => state.exp.experience);
  const currentAccount = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentAccount) {
      dispatch(getExperience(currentAccount._id));
    }
  }, [currentAccount]);

  const handleChange = (e, fieldName) => {
    if (e.target) {
      const { value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
    }
  };

  const handleCreate = () => {
    setFormData({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
    setModalShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    experiences.filter((exp) =>
      exp.role === formData.role
        ? dispatch(updateExperience(currentAccount._id, exp._id, formData))
        : dispatch(createExperience(currentAccount._id, formData))
    );
    dispatch(getExperience(currentAccount._id));
    setModalShow(false);
  };

  return (
    <>
      <Row>
        <Col>
          <Card className="rounded-4">
            <div className="d-flex align-items-end">
              <div className="mr-3" onClick={handleCreate}>
                <AiOutlinePlus />
              </div>
            </div>
            <Card.Body className="mx-2 mt-2">
              <Card.Title className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="mb-2">Esperienze</h4>
                </div>
              </Card.Title>
              {experiences ? (
                experiences.slice(0, 5).map((exp) => (
                  <Row key={exp._id}>
                    <div className="d-flex align-items-end">
                      <div
                        onClick={() => {
                          const { role, company, startDate, endDate, description, area } = exp;
                          setFormData({ role, company, startDate, endDate, description, area });
                          setModalShow(true);
                        }}
                      >
                        <BiPencil />
                      </div>
                    </div>
                    <Col xs={12} md={3}>
                      <img src="https://via.placeholder.com/70" alt="Placeholder" className="img-fluid mb-2" />
                    </Col>
                    <Col xs={12}>
                      <div>
                        <h6 className="mb-2">{exp.role}</h6>
                        <p>{exp.company}</p>
                        <p>
                          {exp.startDate} - {exp.endDate}
                        </p>
                        <p>{exp.area}</p>
                        <p>{exp.description}</p>
                      </div>
                    </Col>
                  </Row>
                ))
              ) : (
                <Spinner variant="primary" />
              )}
            </Card.Body>
          </Card>
        </Col>
        <ExperienceModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Row>
    </>
  );
};

export default Esperienza;
