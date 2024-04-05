import { useDispatch, useSelector } from "react-redux";
import { BiPencil } from "react-icons/bi";
import { deleteExperience } from "../redux/actions/experience";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";

const SingleExperince = ({ exp }) => {
  const [editModalShow, setEditModalShow] = useState(false);
  const currentAccount = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();

  return (
    <Row key={exp._id}>
      <div className="d-flex align-items-end">
        <div
          onClick={() => {
            dispatch(deleteExperience(currentAccount._id, exp._id));
          }}
        >
          <BiPencil />
        </div>
        <div
          onClick={() => {
            setEditModalShow(true);
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
      <ExperienceModal modalShow={editModalShow} onHide={() => setEditModalShow(false)} experience={exp} />
    </Row>
  );
};
export default SingleExperince;
