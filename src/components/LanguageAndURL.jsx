function LanguageAndURL() {
  return (
    <div className="sidebar-container">
      <div className="p-3">
        <div className="sidebar-border-bottom">
          <div className="d-flex justify-content-between">
            <h6 className="sidebar-title">Lingua del profilo</h6>
            <img src="penEdit.svg" alt="edit" />
          </div>
          <p className="sidebar-paragraph">Italiano</p>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h6 className="sidebar-title">Profilo pubblico e URL</h6>
            <img src="penEdit.svg" alt="edit" />
          </div>
          <p className="sidebar-paragraph">www.linkedin.com/</p>
        </div>
      </div>
    </div>
  );
}

export default LanguageAndURL;
