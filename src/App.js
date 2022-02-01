import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import React from "react";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    console.log('toogle')
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="app">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
