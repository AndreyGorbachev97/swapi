import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-btns">
          <NavLink to="/">
            <span className="header-btn">Home</span>
          </NavLink>
          <NavLink to="/history">
            <span className="header-btn">History</span>
          </NavLink>
        </div>

      </div>

    </header>
  )
}

export default Header;