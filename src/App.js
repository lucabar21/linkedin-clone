import "bootstrap/dist/css/bootstrap.min.css";
import TopbarComponent from "./components/TopbarComponent";
import "./App.css";

// <Recommended title="Persone che potresti conoscere" subtitle="Dal tuo settore" />
// <Recommended title="Consigliati" />

function App() {
  return (
    <div className="App">
      <TopbarComponent />
    </div>
  );
}

export default App;
