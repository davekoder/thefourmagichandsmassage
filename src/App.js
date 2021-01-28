import React from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import Contact from "./pages/contact/contact.page";
import Appointment from "./pages/appointment/appointment.page";
import Services from "./pages/services/services.page";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => (
  <div className='App'>
    <Header />
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={400} className='fade'>
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/appointment' component={Appointment} />
              <Route exact path='/services' component={Services} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </div>
);

export default App;
