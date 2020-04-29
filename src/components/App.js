import React from "react";
import HopePage from "./HomePage.js";
import AboutPage from "./AboutPage.js";

function App() {
  const route = window.location.pathname;

  if (route === "/about") {
    return <AboutPage />;
  }

  return <HopePage />;
}

export default App;
