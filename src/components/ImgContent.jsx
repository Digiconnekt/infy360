// this component is for section having Image first then Text in single row

import React from "react";

const ImgContent = ({ img, title, para }) => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="info-img position-relative">
                <img className="img-fluid topBottom" src={img} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
              <div className="section-title mb-4">
                <h2 className="title">{title}</h2>
                {para.map((elem, id) => {
                  return (
                    <p
                      className="text-black"
                      style={{ textAlign: "justify" }}
                      key={id}
                    >
                      {elem}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImgContent;
