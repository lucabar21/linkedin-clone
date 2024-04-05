import React, { useEffect } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getExperience } from "../../redux/actions/experience";
import { useState } from "react";
import ExperienceModal from "../ExperienceModal";
import SingleExperince from "../singleExperience";

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
                <div className="d-flex align-items-end" onClick={handleCreate}>
                  <div id="buttonPlus" className="p-2">
                    <img src="/plus.svg" alt="" />
                  </div>
                </div>
              </Card.Title>
              {experiences ? (
                experiences.slice(0, 5).map((exp) => <SingleExperince exp={exp} key={exp._id} />)
              ) : (
                <Spinner variant="primary" />
              )}
            </Card.Body>
          </Card>
        </Col>
        <ExperienceModal modalShow={modalShow} onHide={() => setModalShow(false)} />
      </Row>
    </>
  );
};

export default Esperienza;
