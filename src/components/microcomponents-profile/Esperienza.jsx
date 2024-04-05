import React, { useEffect } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";
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
          <Card className="rounded-4 mt-2">
            <Card.Body className="mx-2 mt-2">
              <Card.Title className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="mb-2">Esperienza</h4>
                </div>
                <div className="d-flex align-items-end">
                  <div id="buttonPlus" className="p-2">
                    <img src="/plus.svg" alt="" />
                  </div>
                </div>
              </Card.Title>
              {experiences ? (
                experiences.slice(0, 5).map((exp) => (
                  <div id="experiences" className="mb-3">
                    <Row key={exp._id}>
                      <div className="d-flex justify-content-between align-items-center ">
                        <div></div>{" "}
                        <div className="d-flex">
                          <div id="buttonPlus" className="p-2">
                            <img src="/pen.svg" alt="" />
                          </div>
                          <div id="buttonPlus" className="p-2">
                            <img src="/trash-fill.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div>
                          <img src="/companyLinkedin.png" alt="Placeholder" id="experiencesImg" />
                        </div>

                        <div className="ps-2">
                          <div className="mb-3">
                            <h6 id="titleExperiences">{exp.role}</h6>
                            <p id="companyExperiences">{exp.company}</p>
                            <div id="infoExperiences">
                              <p>
                                {exp.startDate} - {exp.endDate}
                              </p>
                              <p>{exp.area}</p>
                              <p>{exp.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
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
