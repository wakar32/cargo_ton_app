import AccordionComponent from "../components/AccordionComponent";
import TestimonialCard from "../components/TestimonialCard";
import testimonialData from "../data/testimonialData";

const TestimonialsSection = () => {
  return (
    <div className="d-flex">
      <div style={{ flex: 2, marginLeft: 100 }} className="d-flex flex-column">
        <div className="h2 text-uppercase"> TRUSTED CLIENTS</div>
        <div className="h6 text-start text-muted text-uppercase">
          Lorem ipsum dolor sit amet.
        </div>
        <TestimonialCard
          singleTestimonialData={testimonialData[0]}
        ></TestimonialCard>
      </div>
      <div style={{ flex: 2, marginRight: 100 }} className="d-flex flex-column">
        <div className="h2 text-uppercase">WHY CHOOSE US</div>
        <div className="h6 text-start text-muted text-uppercase">
          Lorem ipsum dolor sit amet.
        </div>
        <AccordionComponent></AccordionComponent>
      </div>
    </div>
  );
};

export default TestimonialsSection;
