/*
  Master state of the given full stack's client side interface.
  Specifies all the given pages which are tied with the given web application through routes from the react-dom.
  Additionally ties the entire front end with the middlewear.
*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import HobbiesPage from "./pages/HobbiesPage";
import MiscPage from "./pages/MiscPage";
import ProjectPage from "./pages/ProjectPage";
import WorkPage from "./pages/WorkPage";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/stylesheet.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/Education" component={EducationPage} exact />
        <Route path="/Core_Skills_and_Programming_Languages" component={SkillsPage} exact />
        <Route path="/Work_and_Internship_Experiences" component={WorkPage} exact />
        <Route path="/Personal_and_Group_Endevors" component={ProjectPage} exact />
        <Route path="/Hobbies_and_Intrestes" component={HobbiesPage} exact />
        <Route path="/Miscellaneous" component={MiscPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
