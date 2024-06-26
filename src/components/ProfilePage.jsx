import Analisi from "./microcomponents-profile/Analisi";
import Attività from "./microcomponents-profile/Attività";
import Cause from "./microcomponents-profile/Cause";
import Competenze from "./microcomponents-profile/Competenze";
import Esperienza from "./microcomponents-profile/Esperienza";
import Formazione from "./microcomponents-profile/Formazione";
import Informazioni from "./microcomponents-profile/Informazioni";
import Lingue from "./microcomponents-profile/Lingue";
import Risorse from "./microcomponents-profile/Risorse";
// import Footer from "./Footer";

function Homepage({ user }) {
  return (
    <>
      <Analisi />
      <Risorse />
      <Attività />
      <Esperienza />
      <Formazione />
      <Competenze />
      <Informazioni user={user} />
      <Lingue />
      <Cause />
    </>
  );
}

export default Homepage;
