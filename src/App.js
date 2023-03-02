import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/auth/Auth";
import Dash from "./components/Dash";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
