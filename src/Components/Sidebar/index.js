import "./style.css";

import { NavLink, useLocation } from "react-router-dom";

import React from "react";
import elonmusk from "../../assets/images/elonmusk.jpg";

function SideBar() {
  const location = useLocation();
  return (
    <>
      <div className="dummy"></div>
      <div className="sideBar">
        <div className="linkContainer">
          <h1 className="logo">LOGO HERE</h1>
          <div>
            <NavLink to="/overview">Overview</NavLink>
            <NavLink to="/onboarding">Onboarding</NavLink>
            <NavLink
              to="/monitoring"
              className={location?.pathname === "/" ? "active" : ""}
            >
              Monitoring
            </NavLink>
            <NavLink to="/flagging">Flagging</NavLink>
            <NavLink to="/sourceofincome">Source of Income</NavLink>
            <NavLink to="/uar">UAR</NavLink>
          </div>
        </div>

        <div className="user">
          <img src={elonmusk} alt="user" />
          <div className="userNameContainer">
            <h4>Elon Musk</h4>
            <p>elon@twitter.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
