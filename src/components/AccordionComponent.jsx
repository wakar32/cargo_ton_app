import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./AccordionComponent.css"; // Create this file for custom styles

const accordionData = [
  {
    id: 1,
    title: "Accordion Item #1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes.",
  },
  {
    id: 2,
    title: "Accordion Item #2",
    body: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes.",
  },
  {
    id: 3,
    title: "Accordion Item #3",
    body: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes.",
  },
];

const AccordionComponent = () => {
  const [openItemId, setOpenItemId] = useState(1); // default open item

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion" id="accordionExample">
      {accordionData.map((item) => {
        const isOpen = openItemId === item.id;
        return (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className={`accordion-button custom-toggle ${
                  !isOpen ? "collapsed" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls={`collapse${item.id}`}
                onClick={() => toggleItem(item.id)}
              >
                {item.title}
                <span className="icon ms-auto">{isOpen ? "-" : "+"}</span>
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>{item.body}</strong>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionComponent;
