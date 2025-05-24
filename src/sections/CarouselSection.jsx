import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CarouselCard from "../components/CarouselCard";
import carouselData from "../data/carouselData";

const CarouselSection = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = carouselData.length;

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
    <div className="d-flex">
      {/* CarouselCard with 97% width */}
      {/* <div style={{ width: "97%", height: 600 }}>
        {carouselData.map((item, index) => {
          return <CarouselCard key={index} singleCarouselData={item} />;
        })}
      </div> */}
      <div
        id="customCarousel"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
        ref={carouselRef}
      >
        <div className="carousel-inner">
          {carouselData.map((item, index) => {
            // console.log("id", item.id);
            return (
              <CarouselCard singleCarouselData={item} isActive={index === 0} />
            );
          })}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-target="#customCarousel"
            data-bs-slide="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>

        {/* Bottom-right Counter */}
      </div>

      {/* Vertical text with 3% width */}
      <div
        className="text-black bg-white"
        style={{
          width: "3%",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontWeight: "bold",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // optional for contrast
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        #CARGOTON LOGISTICS
      </div>
    </div>
  );
};

export default CarouselSection;
