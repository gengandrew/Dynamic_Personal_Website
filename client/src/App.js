/*
  Main page for the given full stack webapp.
  The main page extends to the following classes:
    1. Components classes found in the components folder.
    2. All other providers and stores for the middlewear.
*/
import React, { Component } from "react";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import HobbiesPage from "./pages/HobbiesPage";
import MiscPage from "./pages/MiscPage";
import ProjectPage from "./pages/ProjectPage";
import ResearchPage from "./pages/ResearchPage";
import WorkPage from "./pages/WorkPage";
import HomePage from "./pages/HomePage";
import CausalPage from "./pages/CausalPage";
import store from "./store";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/stylesheet.css";

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/Education" component={EducationPage} exact />
          <Route path="/Core_Skills_and_Programming_Languages" component={SkillsPage} exact />
          <Route path="/Work_and_Internship_Experiences" component={WorkPage} exact />
          <Route path="/Research_Experiences" component={ResearchPage} exact />
          <Route path="/Personal_and_Group_Endeavors" component={ProjectPage} exact />
          <Route path="/Hobbies_and_Interests" component={HobbiesPage} exact />
          <Route path="/Miscellaneous" component={MiscPage} exact />
          
          <Route path="/Math888_Causal_Inference" component={CausalPage} exact />

          <Route path="/*" component={ErrorPage} exact />
        </Switch>
      </HashRouter>
    </Provider>
    );
  }
}

/*
    <Route path="/Miscellaneous" render={(props) => <MiscPage />} exact/>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/~ageng/Education" component={EducationPage} exact />
        <Route path="/~ageng/Core_Skills_and_Programming_Languages" component={SkillsPage} exact />
        <Route path="/~ageng/Work_and_Internship_Experiences" component={WorkPage} exact />
        <Route path="/~ageng/Personal_and_Group_Endevors" component={ProjectPage} exact />
        <Route path="/~ageng/Hobbies_and_Intrestes" component={HobbiesPage} exact />
        <Route path="/~ageng/Miscellaneous" component={MiscPage} exact />
        <Route component={App} />
      </Switch>
    </BrowserRouter>
*/

export default App;
