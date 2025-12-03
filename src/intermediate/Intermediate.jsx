import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import "./index.css";

function Intermediate() {
  return (
    <div className="intermediate">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Intermediate;
