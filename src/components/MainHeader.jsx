import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/product">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
