import CarouselCard from "../components/CarouselCard";
import carouselData from "../data/carouselData";

const OurServicesSection = () => {
  return (
    <div className="d-flex" style={{ height: "400px" }}>
      {/* CarouselCard with 97% width */}
      {/* <div style={{ width: "97%", height: 600 }}>
        {carouselData.map((item, index) => {
          return <CarouselCard key={index} singleCarouselData={item} />;
        })}
      </div> */}

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

export default OurServicesSection;
