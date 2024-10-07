// this component is for section having Text first then Image in single row

import React from "react";

const ContentImg = ({ img, title, para, subPara }) => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1">
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

                {subPara != null ? (
                  <ul className="list-unstyled list-icon">
                    {subPara.map((elem, id) => {
                      return (
                        <li
                          className="mb-3"
                          style={{ textAlign: "justify" }}
                          key={id}
                        >
                          <i className="flaticon-tick"></i>
                          <span
                            style={{ color: "#1c2045", fontWeight: "bold" }}
                          >
                            {elem.title}
                          </span>{" "}
                          {elem.text}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentImg;
