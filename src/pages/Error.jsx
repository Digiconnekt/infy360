import React from "react";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>404 Error - Infy360</title>

        {/* Description */}
        <meta name="description" content="" />

        {/* Keywords */}
        <meta name="keywords" content="" />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      <div className="page-content">
        <section
          className="fullscreen-banner p-0 overflow-hidden text-center white-overlay error-page"
          data-bg-img="images/bg/06.jpg"
          data-overlay="9"
        >
          <div className="align-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center text-black">
                  <h1>
                    4
                    <span>
                      <i>0</i>
                    </span>
                    4
                  </h1>
                  <h5 className="mb-4 text-capitalize mt-3">
                    Ooops, the page doesn't seem to exit.{" "}
                  </h5>
                  <a href="/" className="btn btn-theme btn-radius btn-iconic">
                    <i className="fas fa-long-arrow-alt-left"></i>{" "}
                    <span>Back to Home</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error;
