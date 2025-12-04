import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import "./index.css";

function Hooks() {
  return (
    <div className="hooks">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Hooks;
