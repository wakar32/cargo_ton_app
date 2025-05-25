import "./TestimonialCard.css";
const TestimonialCard = ({ singleTestimonialData }) => {
  return (
    <div
      className="position-relative m-3 p-3"
      style={{ width: 350, height: 200 }}
    >
      <div className="testimonial-tag">''</div>
      <p className="testimonial-description text-justify p-2 px-5">
        {singleTestimonialData.description}
      </p>
      <div className="testimonial-name text-end">
        {singleTestimonialData.name}
      </div>
      <div
        className="testimonial-position text-end text-muted"
        style={{ fontSize: "0.75rem" }}
      >
        {singleTestimonialData.position}
      </div>
    </div>
  );
};

export default TestimonialCard;
