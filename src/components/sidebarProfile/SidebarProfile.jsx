import LanguageAndURL from "../sidebarProfile/LanguageAndURL";
import Recommended from "../sidebarProfile/Recommended";

function SidebarProfile() {
  return (
    <div className="sidebar">
      <LanguageAndURL />
      <Recommended title="Persone che potresti conoscere" subtitle="Dal tuo settore" />
      <Recommended title="Consigliati" />
    </div>
  );
}

export default SidebarProfile;
