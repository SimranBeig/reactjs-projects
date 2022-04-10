import React, { Component } from "react";
import { BrowserRouter, Router } from "react-router-dom";
// import EventDetails from "./components/EventDetails";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoginForm />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
