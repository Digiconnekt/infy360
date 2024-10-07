import React from "react";

const OneLiner = ({
  textBeforeHighlight,
  highlightText,
  textAfterHighlight,
}) => {
  return (
    <>
      {/* one liner start */}
      <section
        className="overflow-hidden dark-bg animatedBackground pt-4 pb-3 px-2"
        data-bg-img="../images/pattern/06.png"
        style={{
          backgroundImage: 'url("../images/pattern/06.png")',
        }}
      >
        {/* <div className="container"> */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-12 col-md-12">
            <div className="section-title mb-0">
              <h2
                className="title oneLiner"
                // style={{ fontSize: "70px", lineHeight: "90px" }}
              >
                {textBeforeHighlight}
                <span>{highlightText}</span>
                {textAfterHighlight}
              </h2>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      {/* one liner end */}
    </>
  );
};

export default OneLiner;
