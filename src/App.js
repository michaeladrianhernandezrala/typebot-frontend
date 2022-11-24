import logo from "./logo.svg";
import "./App.css";
import RegisterScreen from "./modules/RegisterScreen/view";
import LoginScreen from "./modules/LoginScreen/view";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
