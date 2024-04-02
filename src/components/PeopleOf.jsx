function PeopleOf(props) {
  return (
    <div className="d-flex align-items-start mt-3 cp sidebar-border-bottom-people">
      <img
        className="me-2"
        src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
        alt=""
        width={50}
      />
      <div>
        <h6 className="sidebar-people">Tizio Caio</h6>
        <p className="sidebar-description-people">Sempronio presso bo'</p>
        <button className="sidebar-connections">
          <img className="me-1 opacity-75 sidebar-align" src="peopleAdd.svg" alt="add-people" />
          <span className="sidebar-align">Collegati</span>
        </button>
      </div>
    </div>
  );
}

export default PeopleOf;
