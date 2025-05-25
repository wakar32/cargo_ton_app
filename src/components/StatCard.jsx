import "./StatCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const StatCard = ({ signleStat }) => {
  return (
    <div
      className="position-relative d-flex justify-content-center align-items-center mx-3"
      style={{ height: 150, width: 150 }}
    >
      <div className="position-absolute bg-count">{signleStat.count}</div>
      <div
        className="position-relative d-flex justify-content-center align-items-center"
        style={{ zIndex: 1 }}
      >
        <div className="fw-bold h1">{signleStat.count}</div>
        <div className="h5">{signleStat.title}</div>
      </div>
    </div>
  );
};

export default StatCard;
