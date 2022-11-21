import logo from "./logo.svg";
import "./App.css";
import RegisterScreen from "./modules/RegisterScreen/view";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
}

export default App;
