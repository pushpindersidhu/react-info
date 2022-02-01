import React from "react";
import logo from "../logo.svg";

function Header(props) {
  const className = props.darkMode ? "dark" : "";
  return (
    <header>
      <nav className={`nav ${className}`}>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h3 className="logo-text">React Facts</h3>
        </div>

        <div className="toggler">
          <p className="toggler-light">Light</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={props.darkMode}
              onChange={props.toggleDarkMode}
            />
            <span className="slider round"></span>
          </label>
          <p className="toggler-dark">Dark</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
