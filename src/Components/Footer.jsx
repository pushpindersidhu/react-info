import React from "react";

function Footer(props) {
  const className = props.darkMode ? "dark" : "";
  return (
    <footer className={`footer ${className}`}>
      <small>&copy; No Rights Reserved.</small>
    </footer>
  );
}

export default Footer;
