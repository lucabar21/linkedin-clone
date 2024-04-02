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
        <span className="sidebar-connections">Collegati</span>
      </div>
    </div>
  );
}

export default PeopleOf;
