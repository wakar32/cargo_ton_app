import "./WelcomeCard.css";
const WelcomeCard = ({ welcomeData }) => {
  console.log(welcomeData);
  return (
    <div className="container my-5 d-lg-flex justify-content-center">
      <div className="image-wrapper position-relative">
        <div className="triangle-tag"></div>
        <div className="parallelogram-tag"></div>

        <img src={welcomeData.imageUrl} alt="Back image" className="back-img" />
        <img
          src={welcomeData.secondaryImageUrl}
          alt="Front image"
          className="front-img"
        />
        <div className="side-tag">
          <div className="clinet-count h3">{welcomeData.tagCount}</div>
          <div className="client-text h6">{welcomeData.tagText}</div>
        </div>
      </div>
      <div className="text-card">
        <div className="secondary-parallelogram-tag"></div>
        <div className="h2 text-muted">
          {welcomeData.title}
          <span style={{ color: "#fe7a44" }} className="sub-title">
            {welcomeData.subTitle}
          </span>
        </div>
        <div className="text-start">{welcomeData.description}</div>
        <div className="text-start">{welcomeData.secondaryDescription}</div>
        <button
          className="btn btn-danger card-button"
          onClick={welcomeData.onClick}
        >
          {welcomeData.buttonName}
        </button>
      </div>
    </div>
  );
};

export default WelcomeCard;
