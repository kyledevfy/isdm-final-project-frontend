import { BrowserRouter } from "react-router-dom";
import Main from "./pages/main";

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
