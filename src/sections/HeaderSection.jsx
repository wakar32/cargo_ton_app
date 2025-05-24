import React from "react";
import navData from "../data/navData";

const HeaderSection = () => {
  return (
    <header
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-white fw-bold">
        <a className="navbar-brand" href="">
          <img
            src="/images/cargo_to_logo.png"
            width="auto"
            height="auto"
            alt=""
          />
        </a>
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {navData.map((item, index) => {
              if (item.type === "link") {
                return (
                  <li key={index} className="nav-item mx-3">
                    <a className="nav-link" href={item.path}>
                      {item.title}
                    </a>
                  </li>
                );
              } else if (item.type === "dropdown") {
                return (
                  <li className="nav-item mx-3 dropdown" key={index}>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id={`dropdown${index}`}
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.title}
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby={`dropdown${index}`}
                    >
                      {item.children.map((child, childIndex) => (
                        <a
                          className="dropdown-item"
                          href={child.path}
                          key={childIndex}
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  </li>
                );
              } else if (item.type === "button") {
                return (
                  <li className="nav-item mx-3" key={index}>
                    <button
                      className={`btn btn-${
                        item.variant || "primary"
                      } fw-bold ms-2`}
                      onClick={item.onClick}
                    >
                      {item.title}
                    </button>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSection;
