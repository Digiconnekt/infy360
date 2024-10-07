import React from "react";

const NationalSeo = ({
  classes,
  title,
  price,
  keyPlan,
  keyTop,
  initialReview,
  onPage,
  conversationTracking,
  schemaAndStructured,
  localSearch,
  contentMarketing,
  offPage,
  monthlyReport,
  customerSupport,
}) => {
  return (
    <>
      <div className={classes}>
        <div
          className="price-table style-2 bg-contain bg-pos-r"
          data-bg-img="images/bg/02.png"
        >
          <div className="price-header d-md-flex justify-content-between">
            <h3 className="price-title">{title}</h3>
            <div className="price-value">
              <h2>
                ${price}/<span>Month</span>
              </h2>
            </div>
          </div>
          <div className="price-list">
            <ul className="list-unstyled custom-li w-100">
              <li className="ps-0">
                <span
                  style={{
                    color: "#1c2045",
                    fontWeight: "bold",
                  }}
                >
                  Keywords Plan:
                </span>{" "}
                {keyPlan}
              </li>
              <li className="ps-0">
                <span
                  style={{
                    color: "#1c2045",
                    fontWeight: "bold",
                  }}
                >
                  Keywords Top 10 Guarantee:
                </span>{" "}
                {keyTop}
              </li>
            </ul>

            <div className="accordion" id="accordion">
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingOne${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button rounded-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseOne${title.replace(/\s/g, "")}`}
                    aria-expanded="true"
                    aria-controls={`collapseOne${title.replace(/\s/g, "")}`}
                  >
                    Initial Review & Analysis
                  </button>
                </h2>
                <div
                  id={`collapseOne${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse show"
                  aria-labelledby={`headingOne${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {initialReview.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingTwo${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo${title.replace(/\s/g, "")}`}
                    aria-expanded="false"
                    aria-controls={`collapseTwo${title.replace(/\s/g, "")}`}
                  >
                    On Page Optimization
                  </button>
                </h2>
                <div
                  id={`collapseTwo${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby={`headingTwo${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {onPage.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingThree${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseThree${title.replace(/\s/g, "")}`}
                    aria-expanded="false"
                    aria-controls={`collapseThree${title.replace(/\s/g, "")}`}
                  >
                    Conversation Tracking & Optimization
                  </button>
                </h2>
                <div
                  id={`collapseThree${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby={`headingThree${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {conversationTracking.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingFour${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseFour${title.replace(/\s/g, "")}`}
                    aria-expanded="false"
                    aria-controls={`collapseFour${title.replace(/\s/g, "")}`}
                  >
                    Schema & Structured Data Mark Up
                  </button>
                </h2>
                <div
                  id={`collapseFour${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby={`headingFour${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {schemaAndStructured.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingFive${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseFive${title.replace(/\s/g, "")}`}
                    aria-expanded="false"
                    aria-controls={`collapseFive${title.replace(/\s/g, "")}`}
                  >
                    Local Search Optimization
                  </button>
                </h2>
                <div
                  id={`collapseFive${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby={`headingFive${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {localSearch.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingSix${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseSix${title.replace(/\s/g, "")}`}
                    aria-expanded="false"
                    aria-controls={`collapseSix${title.replace(/\s/g, "")}`}
                  >
                    Content Marketing
                  </button>
                </h2>
                <div
                  id={`collapseSix${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby={`headingSix${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {contentMarketing.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingSeven${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseSeven${title.replace(/\s/g, "")}`}
                    aria-expanded="false"
                    aria-controls={`collapseSeven${title.replace(/\s/g, "")}`}
                  >
                    Off Page Optimization
                  </button>
                </h2>
                <div
                  id={`collapseSeven${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby={`headingSeven${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {offPage.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingEight${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseEight${title.replace(/\s/g, "")}`}
                    aria-expanded="false"
                    aria-controls={`collapseEight${title.replace(/\s/g, "")}`}
                  >
                    Monthly Reporting
                  </button>
                </h2>
                <div
                  id={`collapseEight${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby={`headingEight${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {monthlyReport.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2
                  className="accordion-header"
                  id={`headingNine${title.replace(/\s/g, "")}`}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseNine${title.replace(/\s/g, "")}`}
                    aria-expanded="false"
                    aria-controls={`collapseNine${title.replace(/\s/g, "")}`}
                  >
                    Customer Support
                  </button>
                </h2>
                <div
                  id={`collapseNine${title.replace(/\s/g, "")}`}
                  className="accordion-collapse border-0 collapse"
                  aria-labelledby={`headingNine${title.replace(/\s/g, "")}`}
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <ul className="list-unstyled custom-li w-100">
                      {customerSupport.map((elem, id) => (
                        <li className="ps-0 w-100" key={id}>
                          <span
                            style={{
                              color: "#1c2045",
                              fontWeight: "bold",
                            }}
                          >
                            {elem.title}:
                          </span>{" "}
                          {elem.value === "yes" ? (
                            <img
                              className="ms-1"
                              src="./images/yes.png"
                              alt="yes"
                            />
                          ) : elem.value === "no" ? (
                            <img
                              className="ms-1"
                              src="./images/no.png"
                              alt="no"
                            />
                          ) : (
                            elem.value
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NationalSeo;
