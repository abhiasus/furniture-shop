import React from "react";
import "../assets/style/style.css";

import heroImage from "../assets/images/hero.jpg";
import sofaImage from "../assets/images/sofa.jpg";
import bedImage from "../assets/images/bed.jpg";
import tableImage from "../assets/images/table.jpg";
import chairImage from "../assets/images/chair.jpg";
import cabinetImage from "../assets/images/cabinet.jpg";
import deskImage from "../assets/images/desk.jpg";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">

          <a className="navbar-brand" href="#home">
            LuxeWood Living
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#collection">
                  Collection
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>

        </div>
      </nav>


      <section className="hero" id="home">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1>Luxury Furniture For Modern Homes</h1>

              <p>
                Transform your living space with premium furniture
                crafted for comfort, style and timeless beauty.
              </p>

              <a href="#collection" className="btn btn-main">
                View Collection
              </a>

            </div>


            <div className="col-md-6">

              <img
                src={heroImage}
                className="img-fluid rounded"
                alt="Luxury Furniture"
              />

            </div>

          </div>

        </div>

      </section>


      <section className="collection" id="collection">

        <div className="container">

          <h2>Luxury Collection</h2>

          <div className="row">


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={sofaImage}
                  alt="Velvet Sofa"
                />

                <h3>Velvet Sofa</h3>

                <p>₹42,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={bedImage}
                  alt="Premium Bed"
                />

                <h3>Premium Bed</h3>

                <p>₹55,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={tableImage}
                  alt="Marble Dining Table"
                />

                <h3>Marble Dining Table</h3>

                <p>₹48,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={chairImage}
                  alt="Luxury Lounge Chair"
                />

                <h3>Luxury Lounge Chair</h3>

                <p>₹18,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={cabinetImage}
                  alt="Designer Cabinet"
                />

                <h3>Designer Cabinet</h3>

                <p>₹32,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={deskImage}
                  alt="Executive Desk"
                />

                <h3>Executive Desk</h3>

                <p>₹29,999</p>

              </div>

            </div>


          </div>

        </div>

      </section>


      <section className="about" id="about">

        <div className="container">

          <h2>About LuxeWood</h2>

          <p>
            LuxeWood Living creates elegant furniture for people
            who appreciate premium materials, refined designs and
            exceptional comfort.
          </p>

        </div>

      </section>


      <section className="contact" id="contact">

        <div className="container">

          <h2>Contact Us</h2>

          <p>Phone: +91 1111 2222 </p>

          <p>Email: luxewoodliving@gmail.com</p>

          <p>Bengaluru, Karnataka</p>

        </div>

      </section>


      <footer>

        <div className="container">

          <div className="footer-links">

            <a href="#home">Home</a>

            <a href="#collection">Collection</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

          </div>

          <p>
            &copy; 2026 LuxeWood Living. All Rights Reserved.
          </p>

        </div>

      </footer>
    </>
  );
}

export default Home;