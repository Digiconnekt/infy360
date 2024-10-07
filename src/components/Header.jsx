import React from "react";

const Header = () => {
  const location = window.location.pathname;

  const subMenuActive = {
    background: "#ff7810",
    color: "#ffffff",
    paddingLeft: "15px",
  };

  return (
    <>
      <header id="site-header" className="header">
        <div id="header-wrap">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav className="navbar navbar-expand-lg">
                  {/* logo start */}
                  <a
                    href="/"
                    className="navbar-brand"
                    style={{ display: "block", maxWidth: "180px" }}
                  >
                    <img
                      id="logo-img"
                      className="img-fluid"
                      src="../images/infy360-logo-dark.png"
                      alt="Infy360"
                    />
                  </a>
                  {/* logo end */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto position-relative">
                      {/* home link start */}
                      <li className="nav-item dropdown">
                        <a
                          href="/"
                          className={`${
                            location === "/" ? "nav-link active" : "nav-link"
                          }`}
                        >
                          Home
                        </a>
                      </li>

                      {/* home link end */}

                      {/* about us link start */}
                      {location !== "/digital-marketing-proposal" && (
                        <li className="nav-item dropdown">
                          <a
                            href="/about-us"
                            className={`${
                              location === "/about-us"
                                ? "nav-link active"
                                : "nav-link"
                            }`}
                          >
                            About Us
                          </a>
                        </li>
                      )}
                      {/* about us link end */}

                      {/* services link start */}
                      <li className="nav-item dropdown">
                        <a
                          href="/services"
                          className={`${
                            location === "/services" ||
                            location ===
                              "/services/search-engine-optimization" ||
                            location ===
                              "/services/social-media-optimization" ||
                            location === "/services/email-marketing" ||
                            location === "/services/content-marketing" ||
                            location === "/services/lead-generation" ||
                            location === "/services/programmatic-advertising" ||
                            location === "/services/ppc"
                              ? "nav-link dropdown-toggle active"
                              : "nav-link dropdown-toggle"
                          }`}
                          data-bs-toggle="dropdown"
                        >
                          Services
                        </a>
                        <div className="dropdown-menu">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                href="/services"
                                style={
                                  location === "/services" ? subMenuActive : {}
                                }
                              >
                                Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/search-engine-optimization"
                                style={
                                  location ===
                                  "/services/search-engine-optimization"
                                    ? subMenuActive
                                    : {}
                                }
                              >
                                Search Engine Optimization
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/social-media-optimization"
                                style={
                                  location ===
                                  "/services/social-media-optimization"
                                    ? subMenuActive
                                    : {}
                                }
                              >
                                Social Media Optimization
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/email-marketing"
                                style={
                                  location === "/services/email-marketing"
                                    ? subMenuActive
                                    : {}
                                }
                              >
                                Email Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/content-marketing"
                                style={
                                  location === "/services/content-marketing"
                                    ? subMenuActive
                                    : {}
                                }
                              >
                                Content Marketing
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/lead-generation"
                                style={
                                  location === "/services/lead-generation"
                                    ? subMenuActive
                                    : {}
                                }
                              >
                                Lead Generation
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/programmatic-advertising"
                                style={
                                  location ===
                                  "/services/programmatic-advertising"
                                    ? subMenuActive
                                    : {}
                                }
                              >
                                Programmatic Advertising
                              </a>
                            </li>
                            <li>
                              <a
                                href="/services/ppc"
                                style={
                                  location === "/services/ppc"
                                    ? subMenuActive
                                    : {}
                                }
                              >
                                Pay Per Click
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* services link end */}

                      {/* blog link start */}
                      {/* {location !== "/digital-marketing-proposal" && (
                        <li className="nav-item dropdown">
                          <a
                            href="/blogs"
                            className={`${
                              location === "/blogs" ||
                              location === "/blogs/blog1" ||
                              location === "/blogs/blog2" ||
                              location === "/blogs/blog3"
                                ? "nav-link active"
                                : "nav-link"
                            }`}
                          >
                            Blogs
                          </a>
                        </li>
                      )} */}
                      {/* blog link end */}

                      {/* proposal link start */}
                      <li className="nav-item dropdown">
                        <a
                          href="/proposal"
                          className={`${
                            location === "/proposal"
                              ? "nav-link active"
                              : "nav-link"
                          }`}
                        >
                          Get A Proposal
                        </a>
                      </li>
                      {/* proposal link end */}

                      {/* contact link start */}
                      <li className="nav-item dropdown">
                        <a
                          href="/contact"
                          className={`${
                            location === "/contact"
                              ? "nav-link active"
                              : "nav-link"
                          }`}
                        >
                          Contact
                        </a>
                      </li>
                      {/* contact link end */}
                    </ul>
                  </div>

                  {/* <div className="right-nav align-items-center d-flex justify-content-end">
                    <a className="btn btn-white btn-sm" href="login.html">
                      Login
                    </a>
                    <div className="search">
                      <div className="search-content">
                        <div className="search-button">
                          <i className="fas fa-search"></i>
                        </div>
                        <form id="search-form" className="search-form">
                          <input
                            type="search"
                            className="search-input"
                            placeholder="Search Here..."
                          />
                        </form>
                      </div>
                    </div>
                    <a href="#" className="ht-nav-toggle">
                      <span></span>
                    </a>
                  </div> */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav id="ht-main-nav">
        <a href="#" className="ht-nav-toggle active">
          <span></span>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid side-logo mb-3"
                src="images/logo.png"
                alt=""
              />
              <p className="mb-5">
                Loptus - Digital Marketing Agency Responsive HTML5 Template is
                Most PowerFull template 2018 For Everyone, Start working with an
                company that provide everything you need to generate awareness.
              </p>
              <div className="form-info">
                <h4 className="title">Contact info</h4>
                <ul className="contact-info list-unstyled mt-4">
                  <li className="mb-4">
                    <i className="flaticon-location"></i>
                    <span>Address:</span>
                    <p>423B, Road Wordwide Country, USA</p>
                  </li>
                  <li className="mb-4">
                    <i className="flaticon-call"></i>
                    <span>Phone:</span>
                    <a href="tel:+912345678900">+91-234-567-8900</a>
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>Email</span>
                    <a href="mailto:themeht23@gmail.com">themeht23@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="social-icons social-colored mt-5">
                <ul className="list-inline">
                  <li className="mb-2 social-facebook">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="mb-2 social-twitter">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="mb-2 social-linkedin">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="mb-2 social-gplus">
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
