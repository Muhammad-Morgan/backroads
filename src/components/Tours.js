import React from "react";
import { tours } from "../data";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title first="featured" last=" tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, date, title, city, days, price } = tour;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {city}
                  </p>
                  <p>{days} days</p>
                  <p>{price} $2100</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
