function LanguageAndURL() {
  return (
    <div className="sidebar-container">
      <div className="p-3">
        <div className="sidebar-border-bottom">
          <div>
            <h6 className="sidebar-title">Lingua del profilo</h6>
            <div>{}</div>
          </div>
          <p className="sidebar-paragraph">Italiano</p>
        </div>
        <div>
          <div>
            <h6 className="sidebar-title">Profilo pubblico e URL</h6>
            <div>{}</div>
          </div>
          <p className="sidebar-paragraph">www.linkedin.com/</p>
        </div>
      </div>
    </div>
  );
}

export default LanguageAndURL;
