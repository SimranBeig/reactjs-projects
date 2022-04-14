import React, { Component } from "react";

export default class EventDetails extends Component {
  render() {
    let { cn, en, d } = this.props;
    return (
      <div className="container my-3">
        <div className="my-3">
          <h2>ClubName: {cn}</h2>
          <h2>EventName: {en}</h2>
          <h2>Date: {d}</h2>
        </div>
      </div>
    );
  }
}
