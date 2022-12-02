import { Routes, Route } from "react-router-dom";

import RegisterScreen from "./routes/RegisterScreen/view";
import LoginScreen from "./routes/LoginScreen/view";
import Dashboard from "./routes/Dashboard/view";
import Chatbot from "./routes/Chatbot/view";
import Drawer from "./routes/Drawer/view";
import Stats from "./routes/Stats/view";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/draw" element={<Drawer />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
