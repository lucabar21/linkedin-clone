import { useDispatch, useSelector } from "react-redux";
import { deleteExperience } from "../redux/actions/experience";
import { useState } from "react";
import { Row } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";

const SingleExperince = ({ exp }) => {
  const [editModalShow, setEditModalShow] = useState(false);
  const currentAccount = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();

  return (
    <div id="experiences" className="mb-3" key={exp._id}>
      <Row>
        <div className="d-flex justify-content-between align-items-center">
          <div
            id="buttonPlus"
            className="p-2"
            onClick={() => {
              dispatch(deleteExperience(currentAccount._id, exp._id));
            }}
          >
            <img src="/trash-fill.svg" alt="" />
          </div>
          <div
            id="buttonPlus"
            className="p-2"
            onClick={() => {
              setEditModalShow(true);
            }}
          >
            <img src="/pen.svg" alt="" />
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
        <ExperienceModal modalShow={editModalShow} onHide={() => setEditModalShow(false)} experience={exp} />
      </Row>
    </div>
  );
};
export default SingleExperince;
