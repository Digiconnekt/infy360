import React, { useEffect, useState } from "react";
import AxiosPost from "../API";
import useMail from "../utils/sendMail";

const GetFreeSiteAudit = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { isLoading, data: mailData, sendMailReq } = useMail();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteLink: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    setFormData(() => ({ ...formData, [handlerName]: handlerValue }));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const templateData = {
        subject: "Free Site Audit",
        fullName: formData.name,
        email: formData.email,
        websiteLink: formData.websiteLink,
      };

      sendMailReq(templateData, "template_ysxo2bq");
    }
  }, [formErrors]);

  const submitFormData = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (mailData?.status === 200 && mailData?.text === "OK") {
      setFormData({
        name: "",
        email: "",
        websiteLink: "",
      });
    }
  }, [mailData]);

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

    if (!values.websiteLink) {
      errors.websiteLink = "Website Link is required";
    }

    return errors;
  };
  // validation end

  return (
    <>
      <section
        className="overflow-hidden dark-bg animatedBackground pt-4 pb-4 px-2"
        data-bg-img="../images/pattern/06.png"
        style={{
          backgroundImage: 'url("../images/pattern/06.png")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12">
              <div className="section-title" style={{ marginBottom: "30px" }}>
                <h2 className="title">
                  Get A <span style={{ color: "#ff7810" }}> Free</span> Site
                  Audit
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <form noValidate onSubmit={submitFormData}>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={formData.name}
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
                      value={formData.email}
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
                      name="websiteLink"
                      className="form-control"
                      placeholder="Website Link"
                      value={formData.websiteLink}
                      required
                      onChange={onChangeHandler}
                      style={{ background: "none", borderColor: "#ff7810" }}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block", marginLeft: "5px" }}
                    >
                      {formErrors.websiteLink}
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <button
                      className="btn btn-theme btn-radius"
                      style={{ width: "100%" }}
                      disabled={isLoading}
                    >
                      <span>{isLoading ? "Loading..." : "Get Audit"}</span>
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
    </>
  );
};

export default GetFreeSiteAudit;
