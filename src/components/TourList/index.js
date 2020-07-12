import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";

export default class TourList extends Component {
  render() {
    return (
      <section className="tour-list">
        <Tour />
      </section>
    );
  }
}
