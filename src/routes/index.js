import { Route, Routes } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";

import Paths from "./routesPath";

const routes = () => {
  return (
    <Routes>
      {/* <Route path={Paths.AUHT_REGISTER} element={<RegisterScreen />} /> */}
      <Route path={Paths.AUTH_LOGIN} element={<LoginScreen />} />
      {/* <Route path={Paths.DASHBOARD} elemet={<Dashboard />} /> */}
    </Routes>
  );
};

export default routes;
