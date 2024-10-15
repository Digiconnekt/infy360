import React, { useEffect, useState } from "react";
import AxiosPost from "../API";

const ContactBtnBanner = ({ fromSection }) => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    setFormData(() => ({ ...formData, [handlerName]: handlerValue }));
  };

  const payload = {
    email: formData.email,

    organisation: "brandnest",
    messageFrom: window.location.href + ` - ${fromSection}`,
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

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Please enter a Valid Email";
    }

    return errors;
  };
  // validation end

  return (
    <>
      <section
        className="overflow-hidden dark-bg animatedBackground py-3"
        data-bg-img="../images/pattern/06.png"
        style={{
          backgroundImage: 'url("../images/pattern/06.png")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9 col-md-12">
              <div className="section-title mb-0">
                <div className="row">
                  <div className="col-lg-11 col-md-12 me-auto">
                    <div className="align-items-center px-3 py-3 radius d-md-flex justify-content-between">
                      <h4 className="mb-3 mb-md-0 text-white">
                        Immediate Email Response
                      </h4>
                      <div className="subscribe-form sm-mt-2">
                        <form
                          id="mc-form"
                          className="group"
                          noValidate
                          onSubmit={submitFormData}
                        >
                          <input
                            type="email"
                            name="email"
                            className="email"
                            id="mc-email"
                            placeholder="Email Address"
                            required
                            onChange={onChangeHandler}
                          />
                          <input
                            className="btn btn-theme mt-3 mt-sm-0"
                            type="submit"
                            name="subscribe"
                            value="Let's Discuss"
                          />
                        </form>
                        <div
                          className="invalid-feedback"
                          style={{ display: "block", marginLeft: "5px" }}
                        >
                          {formErrors.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBtnBanner;
