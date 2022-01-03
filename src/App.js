import { BrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import "./assets/css/index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
