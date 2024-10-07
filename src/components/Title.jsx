import React from "react";

const Title = ({ title }) => {
  return (
    <>
      {/* title section start */}
      <section
        className="page-title overflow-hidden text-center light-bg bg-contain animatedBackground"
        data-bg-img="../images/pattern/05.png"
        style={{ backgroundImage: "url(../images/pattern/05.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title">{title}</h1>
            </div>
          </div>
        </div>
        <div className="page-title-pattern">
          <img className="img-fluid" src="../images/bg/06.png" alt="" />
        </div>
      </section>
      {/* title section end */}
    </>
  );
};

export default Title;
