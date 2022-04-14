import React, { Component } from "react";

export default class LogOut extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="card">
          <div className="card-header">LOG OUT SCREEN</div>
          <div className="card-body">
            <h5 className="card-title">You are logged out</h5>
            <p className="card-text">
              To login again please click the button below
            </p>
            <a href="/" className="btn btn-dark">
              Go to Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}
