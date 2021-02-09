import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import Contact from "./pages/contact/contact.page";
import Appointment from "./pages/appointment/appointment.page";
import Services from "./pages/services/services.page";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <ToastContainer closeOnClick autoClose={7000} />
      <Route>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/appointment' component={Appointment} />
          <Route exact path='/services' component={Services} />
        </Switch>
      </Route>
    </div>
  );
};

export default App;
