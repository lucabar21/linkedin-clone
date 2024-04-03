import { Spinner } from "react-bootstrap";
import PeopleOf from "./PeopleOf";
import { useState } from "react";

function Recommended({ title, subtitle, users }) {
  const [numAdd, setNumAdd] = useState(3);

  const randNum = users !== undefined && Math.floor(Math.random() * users.length);

  return (
    <div className="sidebar-container">
      <div className="p-4 pb-0">
        <h6>{title}</h6>
        <p className="sidebar-paragraph">{subtitle}</p>
        {users === undefined && (
          <div className="d-flex justify-content-center">
            <Spinner variant="" />
          </div>
        )}
        {users !== undefined &&
          users.slice(randNum, randNum + numAdd).map((user, i) => <PeopleOf key={i} user={user} />)}
      </div>
      <div
        className="sidebar-footer"
        onClick={() => {
          numAdd !== 10 ? setNumAdd(10) : setNumAdd(3);
        }}
      >
        <div className="sidebar-footer-show">{numAdd === 3 ? "Mostra tutto" : "Mostra meno"}</div>
      </div>
    </div>
  );
}

export default Recommended;
