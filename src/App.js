import { HashRouter } from "react-router-dom";
import Main from "./pages/main";
import "./assets/css/index.css";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
