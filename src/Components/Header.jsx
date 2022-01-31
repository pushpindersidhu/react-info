import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h3 className="logo-text">React Facts</h3>
        </div>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
