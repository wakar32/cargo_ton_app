import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const WelcomeSection = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  useEffect(() => {
    const carouselEl = carouselRef.current;
    const handleSlide = () => {
      const activeIndex = [
        ...carouselEl.querySelectorAll(".carousel-item"),
      ].findIndex((el) => el.classList.contains("active"));
      setCurrentSlide(activeIndex + 1);
    };

    carouselEl.addEventListener("slid.bs.carousel", handleSlide);
    handleSlide(); // Set on load

    return () => {
      carouselEl.removeEventListener("slid.bs.carousel", handleSlide);
    };
  }, []);

  return (
    <div
      id="customCarousel"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
      ref={carouselRef}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/1000/500"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/1000/500"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://picsum.photos/1000/500"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>

      {/* Bottom-left Controls */}
      <div
        className="carousel-control-custom position-absolute d-flex"
        style={{ bottom: "10px", left: "10px", zIndex: 10 }}
      >
        <div
          className=" text-white bg-custom-yellow px-3 py-1 d-flex align-items-center"
          style={{ bottom: "10px", right: "10px", zIndex: 10 }}
        >
          <span>
            {currentSlide} / {totalSlides}
          </span>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="prev"
        >
          ‹
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="next"
        >
          ›
        </button>
      </div>

      {/* Bottom-right Counter */}
    </div>
  );
};

export default WelcomeSection;
