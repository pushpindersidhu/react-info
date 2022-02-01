import React from "react";
import logo from "../logo.svg";

function MainContent(props) {
  const className = props.darkMode ? "dark" : "";
  return (
    <main className={`main ${className}`}>
      <img src={logo} className="bg-logo" alt="" />
      <div className="main-content">
        <h1 className="h1">Fun Facts about React</h1>
        <ul className="list">
          <li>Was Released in 2013</li>
          <li>Was origionally released in 2013</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
