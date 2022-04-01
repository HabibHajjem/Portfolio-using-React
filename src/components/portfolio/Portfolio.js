import React from "react";
import "./Portfolio.css";
import IMG from "../../asssets/myProject.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG} alt="portfolio title"></img>
          </div>
          <h3>Web application for house rental ads using MERN stack </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/HabibHajjem/MERN-App-for-property-rental-ads" 
            className="btn" target='_blank'>
              GitHub
            </a>
            <a href="https://hungry-nobel-f450ba.netlify.app/" 
            className="btn btn-primary" target='_blank'>
              Deploy Link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
