import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import Contact from "./pages/contact/contact.page";
import Appointment from "./pages/appointment/appointment.page";
import Team from "./pages/team/team.page";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/appointment' component={Appointment} />
        <Route exact path='/team' component={Team} />
      </Switch>
    </div>
  );
};

export default App;
