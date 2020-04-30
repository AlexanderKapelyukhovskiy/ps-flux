import React from "react";
import HopePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HopePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
