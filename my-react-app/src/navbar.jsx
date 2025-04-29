import { NavLink } from "react-router";
import {
  HomeIcon,
  ArrowLeftEndOnRectangleIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <>
      <nav className="">
        <img src="./Wagner-logo.jpg" alt="" />
        <ul className="nav-List">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              <HomeIcon className="homeIcon" />
            </NavLink>
          </li>
          <br />
          <li className="LoginItem">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? undefined : "notActive")}
            >
              <ArrowLeftEndOnRectangleIcon className="logout" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              <MapPinIcon className="Mappin" />
            </NavLink>
          </li>
          <NavLink
            to="/ApplyNow"
            className={({ isActive }) => (isActive ? "active" : "notActive")}
          >
            <span className="applyNow">apply</span>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
