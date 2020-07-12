import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  handleRemoveTour = (id) => {
    const { tours } = this.state;
    const sortedTour = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTour,
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tour-list">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              tour={tour}
              handleRemoveTour={this.handleRemoveTour}
            />
          );
        })}
      </section>
    );
  }
}
