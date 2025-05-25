import React, { useState } from "react";

import ServiceCard from "../components/ServiceCard";
import RoundedPagination from "../components/RoundedPagination";
import serviceData from "../data/serviceData";

const OurServicesSection = () => {
  const itemsPerPage = 2;
  const totalPages = Math.ceil(serviceData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedItems = serviceData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="container mt-5 text-center">
      <div className="h6 text-success"> Real Sollution, Real Fast !</div>
      <div className="h2 text-center"> Best Global Logistics Solutions.</div>
      <div className="d-flex flex-row justify-content-around">
        {paginatedItems.map((item) => {
          return <ServiceCard singleServiceData={item}></ServiceCard>;
        })}
      </div>
      <div className="d-flex flex-row justify-content-around align-items-center">
        <div className="mt-4">
          <span className="text-muted">
            Logistics & Trasnport Solutions Saves Your Time.{" "}
          </span>
          <span
            onClick={() => alert("Contact clicked!")}
            style={{ fontWeight: 500, cursor: "pointer" }}
          >
            Finds Your Sollutions{" "}
            <img
              src="/icons/OurServicesSection/arrow-circle-right.svg"
              alt="Logo"
              style={{ width: "0.75rem" }}
            />
          </span>
        </div>
        <RoundedPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default OurServicesSection;
