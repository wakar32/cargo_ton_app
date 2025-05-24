import React from "react";
import "./CarouselCard.css"; // For custom styles (optional)

const CarouselCard = ({ singleCarouselData }) =>
  //   {
  //   title = "LOGISTICS",
  //   secondaryTitle = "Best Shipping",
  //   MinorTitle = "Partner",
  //   Description = "Shipping is the process of transporting goods from one location to another, essential for global trade. It includes various methods like sea, air, rail, and road freight. Efficient shipping ensures timely delivery, cost-effectiveness, and customer satisfaction. Modern logistics rely on advanced tracking, automation, and sustainable practices to optimize supply chains and meet market demands. ",
  //   buttonName = "DISCOVER MORE",
  //   onClick = () => alert("Contact clicked!"),
  //   imageUrl = "https://picsum.photos/600/400",
  // }
  {
    return (
      <div className="d-flex position-relative" style={{ overflow: "visible" }}>
        <div
          className="position-relative"
          style={{
            width: "40%",
            zIndex: 2,
            marginRight: "-10%",
          }}
        >
          <div
            className="ms-4 bg-primary bg-white p-3 d-flex flex-column align-items-start"
            style={{
              height: "80%",
              position: "relative",
              top: "50%",
              bottom: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <div
              className="h6 ps-2"
              style={{ borderLeft: "5px solid #f9bc08" }}
            >
              {singleCarouselData.title}
            </div>
            <div className="h1">{singleCarouselData.secondaryTitle}</div>
            <div className="h1" style={{ color: "#f9bc08" }}>
              {singleCarouselData.MinorTitle}
            </div>
            <div className="text-start">{singleCarouselData.Description}</div>
            <button
              className="btn btn-primary position-absolute"
              style={{ bottom: "10%" }}
              onClick={singleCarouselData.onClick}
            >
              {singleCarouselData.buttonName}
            </button>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <img
            src={singleCarouselData.imageUrl}
            alt=""
            style={{ width: "100%", height: 500, objectFit: "cover" }}
          />
        </div>
      </div>
    );
  };

export default CarouselCard;
