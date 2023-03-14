import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "We serve some great soothing cocktails on our hotel, some of them are Old Fashioned, Margarita Cosmopolitan"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Our hotel is located in a close by hiking trails, So you all can enjoy morning walk"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "We provide Free Travel so you all can enjoy a ready to go ride!!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "We also searve in room beers and beverages so you all can enjoy late night parties"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
