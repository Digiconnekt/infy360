import TitleSection from "../components/Title";
import React, { useEffect, useState } from "react";
import AxiosPost from "../API";

const ProgramLanding = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    setFormData(() => ({ ...formData, [handlerName]: handlerValue }));
  };

  const payload = {
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,

    organisation: "brandnest",
    messageFrom: window.location.href,
  };

  useEffect(
    (e) => {
      // console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        AxiosPost(payload);
        // console.log(formData);
      }
    },
    [formErrors]
  );

  const submitFormData = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  // validation start
  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Please enter a Valid Email";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile is required";
    }

    return errors;
  };
  // validation end

  return (
    <>
      {/* title section start */}
      <TitleSection title="Welcome to Brandnest's Student Ambassador Programme!" />
      {/* title section end */}

      <section
        className="overflow-hidden dark-bg animatedBackground pt-4 pb-4 px-2"
        data-bg-img="../images/pattern/06.png"
        style={{
          backgroundImage: 'url("../images/pattern/06.png")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12" style={{ marginTop: "22px" }}>
              <form noValidate onSubmit={submitFormData}>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={onChangeHandler}
                      style={{ background: "none", borderColor: "#ff7810" }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block", marginLeft: "5px" }}
                    >
                      {formErrors.name}
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={onChangeHandler}
                      style={{ background: "none", borderColor: "#ff7810" }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block", marginLeft: "5px" }}
                    >
                      {formErrors.email}
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile"
                      required
                      onChange={onChangeHandler}
                      style={{ background: "none", borderColor: "#ff7810" }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block", marginLeft: "5px" }}
                    >
                      {formErrors.mobile}
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <button
                      className="btn btn-theme btn-radius"
                      style={{ width: "100%" }}
                    >
                      <span>Submit</span>
                    </button>
                  </div>

                  {Object.keys(formErrors).length !== 0 && isSubmit ? (
                    <div className="messages" style={{ color: "red" }}>
                      Please fill all the input fileds
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="info-img position-relative">
                <img
                  className="img-fluid topBottom"
                  src="../images/student-amb-program.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
              <div className="section-title mb-4">
                <h2 className="title">Student Ambassador Programme!</h2>
                <p className="text-black" style={{ textAlign: "justify" }}>
                  Are you a motivated and driven student looking for an exciting
                  opportunity to earn rewards while gaining real-world business
                  experience? Look no further!
                </p>
                <p className="text-black" style={{ textAlign: "justify" }}>
                  Join our Student Ambassador Programme and become an integral
                  part of our growing community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center overflow-hidden">
        <div className="section-title mb-0">
          <h2 className="title">Here's how it works</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p className="text-black">
                We address the need for digital literacy in this era. Therefore,
                our team of experts helps you with your raw idea blending them
                with the latest technologies and producing result-oriented
                outputs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center overflow-hidden">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-title">
                <h2 className="title">
                  What are the perks of joining the Programme?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="work-process">
                <div className="work-process-inner">
                  <div className="work-img">
                    <img
                      className="img-fluid"
                      src="images/how-it-work/02.png"
                      alt=""
                    />
                    <span className="step-num">01</span>
                  </div>
                  <p className="mb-0">
                    As a Student Ambassador, you'll gain 5% rewards for every
                    successful referral, along with a valuable experience in
                    sales, marketing, and client relationship management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
              <div className="work-process">
                <div className="work-process-inner">
                  <div className="work-img">
                    <img
                      className="img-fluid"
                      src="./images/about/analyzeIcon.png"
                      alt=""
                    />
                    <span className="step-num">02</span>
                  </div>
                  <p className="mb-0">
                    This programme offers a unique chance for the best performer
                    to be Brandnest’s Student Ambassador.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center overflow-hidden">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h4>
              Ready to take the first step towards a rewarding experience?
            </h4>
          </div>
        </div>
      </section>

      <section
        className="overflow-hidden dark-bg animatedBackground pt-5 pb-3 px-2"
        data-bg-img="../images/pattern/06.png"
        style={{
          backgroundImage: 'url("../images/pattern/06.png")',
        }}
      >
        <div className="row justify-content-center text-center">
          <div className="col-lg-12 col-md-12">
            <div className="section-title mb-0">
              <h2 className="title oneLiner">
                Join the Brandnest <br />{" "}
                <span>Student Ambassador Programme</span> <br /> today and
                unlock a world of possibilities.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center overflow-hidden">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h4>
              We address the need for digital literacy in this era. Therefore,
              our team of experts helps you with your raw idea blending them
              with the latest technologies and producing result-oriented outputs
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramLanding;
