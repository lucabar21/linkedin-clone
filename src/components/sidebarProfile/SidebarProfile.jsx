import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LanguageAndURL from "../sidebarProfile/LanguageAndURL";
import Recommended from "../sidebarProfile/Recommended";
import { getProfile, getUserByID } from "../../redux/actions";

function SidebarProfile() {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profile.list);

  const user = useSelector(state => state.profile.byId);
  console.log("user-user", user);

  const [users, setUsers] = useState([]);

  const userUs = [
    { _id: "660bc05fa281d80019a3ec4f", name: "Gianmarco" },
    { _id: "660bbf71a281d80019a3ec4c", name: "Luca" },
    { _id: "660bc0d4a281d80019a3ec50", name: "Nicole" },
    { _id: "660bb8fda281d80019a3ec40", name: "Marco" },
  ];

  useEffect(() => {
    dispatch(getProfile());
    userUs.forEach(user => {
      dispatch(getUserByID(user._id));
    });
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
