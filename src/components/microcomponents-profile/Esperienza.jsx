import React, { useEffect } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getExperience } from "../../redux/actions/experience";
import { useState } from "react";
import ExperienceModal from "../ExperienceModal";

const Esperienza = () => {
  const [modalShow, setModalShow] = useState(false);

  const experiences = useSelector((state) => state.exp.experience);
  console.log(experiences);
  const currentAccount = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentAccount) {
      dispatch(getExperience(currentAccount._id));
    }
  }, [currentAccount]);

  return (
    <>
      <Row>
        <Col>
          <Card className="rounded-4">
            <Card.Body className="mx-2 mt-2">
              <Card.Title className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="mb-2">Esperienza</h4>
                </div>
                <div className="d-flex align-items-end">
                  <div className="mr-3">
                    <AiOutlinePlus />
                  </div>
                  <div onClick={() => setModalShow(true)}>
                    <BiPencil />
                  </div>
                </div>
              </Card.Title>
              {experiences ? (
                experiences.slice(0, 5).map((exp) => (
                  <Row key={exp._id}>
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
        <ExperienceModal show={modalShow} onHide={() => setModalShow(false)} />
      </Row>
    </>
  );
};

export default Esperienza;
