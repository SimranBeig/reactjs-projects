import React, { Component } from "react";
import {Redirect} from "react-router-dom";

export class Navbar extends Component {
  logOut = () =>{
    console.log('Hi')
    localStorage.clear()
    window.location.href = '/logout'
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className=" btn btn-outline-light text-left" href="/">
              Login
            </a>
            <a className="btn btn-outline-light text-right" onClick={this.logOut}>
              Logout
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
