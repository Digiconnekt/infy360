import React from "react";
import "./PopUpHome.css";

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUpHome = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState("");
  const [ariaHidden, setAriaHidden] = useState(true);
  const [ariaModal, setAriaModal] = useState(false);
  const [role, setRole] = useState("");
  const [style, setStyle] = useState({ display: "none" });

  useEffect(() => {
    setShow("show");
    setAriaHidden(false);
    setAriaModal(true);
    setRole("dialog");
    setStyle({
      display: "block",
      backdropFilter: "blur(5px)",
      backgroundImage: "url(../images/bg/05.png)",
      backgroundColor: "rgba(60,60,60,0.7)",
      zIndex: "1300",
    });
  }, []);

  const closePopUp = () => {
    setShow("");
    setAriaHidden(true);
    setAriaModal(false);
    setRole("");
    setStyle({ display: "none" });
  };

  const serviceClicked = (value) => {
    navigate(`/service-form/${value}`);
  };

  return (
    <>
      <div
        className={`modal fade animatedBackground ${show}`}
        id="exampleModalToggle"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
        aria-hidden={ariaHidden}
        aria-modal={ariaModal}
        role={role}
        style={style}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Select The Right Services For Your Needs
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closePopUp}
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="info-img position-relative">
                      <img
                        className="img-fluid topBottom"
                        src="./images/services/select-service.png"
                        alt="Services"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
                    <div
                      className="card mb-2"
                      onClick={() =>
                        serviceClicked("search-engine-optimization")
                      }
                    >
                      <div className="row g-0">
                        <div className="col-md-2 card-flex">
                          <img
                            src="./images/services/seoIcon.png"
                            className="img-fluid rounded-start"
                            alt="Search Engine Optimization"
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">
                              Search Engine Optimization
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card mb-2"
                      onClick={() =>
                        serviceClicked("social-media-optimization")
                      }
                    >
                      <div className="row g-0">
                        <div className="col-md-2 card-flex">
                          <img
                            src="./images/services/smoIcon.png"
                            className="img-fluid rounded-start"
                            alt="Social Media Optimization"
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">
                              Social Media Optimization
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card mb-2"
                      onClick={() => serviceClicked("email-marketing")}
                    >
                      <div className="row g-0">
                        <div className="col-md-2 card-flex">
                          <img
                            src="./images/services/emailMarketingIcon.png"
                            className="img-fluid rounded-start"
                            alt="Email Marketing"
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">Email Marketing</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card mb-2"
                      onClick={() => serviceClicked("content-marketing")}
                    >
                      <div className="row g-0">
                        <div className="col-md-2 card-flex">
                          <img
                            src="./images/services/contentMarketingIcon.png"
                            className="img-fluid rounded-start"
                            alt="Content Marketing"
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">Content Marketing</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card mb-2"
                      onClick={() => serviceClicked("lead-generation")}
                    >
                      <div className="row g-0">
                        <div className="col-md-2 card-flex">
                          <img
                            src="./images/services/leadGenerationIcon.png"
                            className="img-fluid rounded-start"
                            alt="Lead Generation"
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">Lead Generation</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card mb-2"
                      onClick={() => serviceClicked("programmatic-advertising")}
                    >
                      <div className="row g-0">
                        <div className="col-md-2 card-flex">
                          <img
                            src="./images/services/programmaticAdIcon.png"
                            className="img-fluid rounded-start"
                            alt="Programmatic Advertising"
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">
                              Programmatic Advertising
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card mb-2"
                      onClick={() => serviceClicked("pay-per-click")}
                    >
                      <div className="row g-0">
                        <div className="col-md-2 card-flex">
                          <img
                            src="./images/services/ppcIcon.png"
                            className="img-fluid rounded-start"
                            alt="Pay Per Click"
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">Pay Per Click</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        className="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Open first modal
      </a> */}
    </>
  );
};

export default PopUpHome;
