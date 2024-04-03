function PeopleOf({ user }) {
  return (
    <>
      <div className="d-flex align-items-start mt-3 cp sidebar-border-bottom-people">
        <img className="me-2 rounded-circle" src={user.image} alt={user.username} width={50} height={50} />
        <div>
          <h6 className="sidebar-people">
            {user.name} {user.surname}
          </h6>
          <p className="sidebar-description-people">{user.title}</p>
          <button className="sidebar-connections">
            <img className="me-1 opacity-75 sidebar-align" src="peopleAdd.svg" alt="add-people" />
            <span className="sidebar-align">Collegati</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PeopleOf;
