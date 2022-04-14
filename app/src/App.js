import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllEvents from "./components/AllEvents";
import LoginForm from "./components/LoginForm";
import LogOut from "./components/LogOut";
import Navbar from "./components/Navbar";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route exact path="/AllEvents">
            <AllEvents />
          </Route>
          <Route exact path="/EventsDetails">
            <AllEvents />
          </Route>
          <Route exact path="/logout">
            <LogOut />
          </Route>

        </BrowserRouter>
      </>
    );
  }
}

export default App;
