import PeopleOf from "../PeopleOf";

function Recommended(props) {
  return (
    <div className="sidebar-container">
      <div className="p-4 pb-0">
        <h6>{props.title}</h6>
        <p className="sidebar-paragraph">{props.subtitle}</p>
        <PeopleOf />
        <PeopleOf />
        <PeopleOf />
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-footer-show">Mostra tutto</div>
      </div>
    </div>
  );
}

export default Recommended;
