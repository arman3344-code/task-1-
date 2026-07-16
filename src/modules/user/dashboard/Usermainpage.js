import React from "react";
import first from "../../../img/fourth.jpg";
import second from "../../../img/second.png";
import third from "../../../img/third.png";

function Usermainpage() {
  return (
    <div className="container-fluid py-5">
      <div className="row align-items-center px-5">

        {/* Left Content */}
        <div className="col-lg-6">
          <span className="badge bg-primary mb-3 fs-6">
            NEW COLLECTION
          </span>

          <h1 className="display-4 fw-bold">
            Discover Amazing Products at Unbeatable Prices
          </h1>

          <p className="lead my-4">
            Explore our latest collection of electronics, fashion, beauty,
            furniture, groceries, and more. Shop from premium brands with
            exclusive discounts, secure payments, and fast doorstep delivery.
          </p>

          <a href="/landing/products" className="btn btn-primary btn-lg me-3">
            Shop Now
          </a>

          <a href="/landing/features" className="btn btn-outline-secondary btn-lg">
            Explore More
          </a>
        </div>

        {/* Right Carousel */}
        <div className="col-lg-6 text-center mt-5 mt-lg-0">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded shadow">
              <div className="carousel-item active">
                <img
                  src={first}
                  className="d-block w-100"
                  alt="Slide 1"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src={second}
                  className="d-block w-100"
                  alt="Slide 2"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src={third}
                  className="d-block w-100"
                  alt="Slide 3"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Usermainpage;