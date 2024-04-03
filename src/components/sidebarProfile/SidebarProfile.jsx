import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LanguageAndURL from "../sidebarProfile/LanguageAndURL";
import Recommended from "../sidebarProfile/Recommended";
import { getProfile } from "../../redux/actions";

function SidebarProfile() {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.list.content);
  console.log("Profili", profiles);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div className="sidebar">
      <LanguageAndURL />
      <Recommended title="Persone che potresti conoscere" subtitle="Dal tuo settore" />
      <Recommended title="Consigliati" users={profiles} />
    </div>
  );
}

export default SidebarProfile;
