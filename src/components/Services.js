import React from "react";
import { services } from "../data";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="our" last=" services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
