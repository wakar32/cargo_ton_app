const FooterSection = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ height: 507, backgroundColor: "#5d6c83", color: "white" }}
    >
      <div
        style={{ width: 1000 }}
        className="d-flex flex-column justify-content-between"
      >
        <div
          className="d-flex justify-content-between"
          style={{ paddingTop: 20 }}
        >
          <div>
            <div className="h3 text-start">Weekly News Letter</div>
            <div className=" text-start">Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="d-flex">
            <input
              style={{ width: 351, height: 50, marginRight: 10 }}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Enter email"
            />
            <button className="btn btn-primary">SUBSCRIBE</button>{" "}
          </div>
          {/* <div>
        </div> */}
        </div>
        <div className="d-flex justify-content-between">
          <div
            style={{ width: "25%" }}
            className="d-flex flex-column align-items-start text-start"
          >
            <div>About Us</div>
            <div style={{ color: "orange" }}>-------</div>
            <div>Lorem ipsum dolor sit amet.</div>
            <div>(+94) 11 434 75751</div>
            <div>42 Lily Ave, Colombo 00600</div>
          </div>
          <div
            style={{ width: "25%" }}
            className="d-flex flex-column align-items-start text-start"
          >
            <div>Latest News</div>
            <div style={{ color: "orange" }}>-------</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            <div>5 Mintures Ago</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus.
            </div>
            <div>5 Mintures Ago</div>
          </div>
          <div
            style={{ width: "25%" }}
            className="d-flex flex-column align-items-start text-start"
          >
            <div>Customer Service</div>
            <div style={{ color: "orange" }}>-------</div>
            <div>Support Forums</div>
            <div>Coomunication</div>
            <div>FAQS</div>
            <div>Privacy Policy</div>
            <div>Rules & Condition</div>
            <div>Contact Us</div>
          </div>
          <div
            style={{ width: "25%" }}
            className="d-flex flex-column align-items-start text-start"
          >
            <div>Customer Service</div>
            <div style={{ color: "orange" }}>-------</div>
          </div>
        </div>
        <div className="d-flex justify-content-between opacity-50">
          <div>Copyright 2021 All Rights Reserved. Site By Xiteb</div>
          <div>
            <img
              src="/icons/FooterSection/facebook.svg"
              alt="Logo"
              style={{ width: "1rem", marginRight: 5 }}
            />
            <img
              src="/icons/FooterSection/facebook.svg"
              alt="Logo"
              style={{ width: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
