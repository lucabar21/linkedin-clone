import ProfileModal from "../components/ProfileModal";
import ProfilePage from "../components/ProfilePage";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

const MainSectionComponent = () => {
  const clickedAccount = (state) => state.profile.clicked;

  return (
    <>
      <Link to={`/profile/` + clickedAccount._id}>
        <HeroSection user={clickedAccount} />
        <ProfilePage user={clickedAccount} />
        <ProfileModal user={clickedAccount} />
      </Link>
    </>
  );
};
export default MainSectionComponent;
