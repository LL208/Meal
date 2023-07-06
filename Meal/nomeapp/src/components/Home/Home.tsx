import React, { useEffect, useState } from "react";
import { Meal } from "../Menu";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className="container-fluid p-5" style={{backgroundColor:"wheat"}}>
      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up">Enjoy Your Healthy Delicious Food</h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <Link to="/menu">Sfoglia il menu</Link>
              <Link to="/about">About Us</Link>
              
            </div>
            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img
                src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
                className="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
