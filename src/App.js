// import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Auth from "./components/auth/Auth";
// import Dash from "./components/Dash";
import "bootstrap/dist/css/bootstrap.min.css";
// import AddProd from "./components/AddProd";
import Chart from "./components/charts&graphs/chart/Chart";
import PieChartOne from "./components/charts&graphs/pieOne/PieChartOne";
import PieChartTwo from "./components/charts&graphs/pieTwo/PieChartTwo";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/addProd" element={<AddProd />} />
      </Routes> */}
      <Chart />
      <hr />
      <PieChartOne />
      <hr />
      <PieChartTwo/>
    </div>
  );
}

export default App;
