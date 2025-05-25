const ServiceCard = ({ singleServiceData }) => {
  console.log("singleServiceData", singleServiceData);
  return (
    <div
      className="d-flex text-start shadow "
      style={{ width: 400, maxHeight: 200 }}
    >
      <img
        src={singleServiceData.imageUrl}
        style={{ width: 150, height: 150 }}
      />
      <div
        className="py-3 mx-3 d-flex flex-column justify-content-around"
        style={{ width: 160, height: 150 }}
      >
        <div>{singleServiceData.title}</div>
        <div style={{ fontSize: 7 }}>{singleServiceData.description}</div>
        <div
          onClick={singleServiceData.onClick}
          className="d-flex"
          style={{ fontweight: 500, fontSize: "0.75rem", cursor: "pointer" }}
        >
          <img
            src="/icons/OurServicesSection/arrow-circle-right.svg"
            alt="Logo"
            style={{ width: "0.75rem" }}
          />
          <div className="mx-1">{singleServiceData.buttonName}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
