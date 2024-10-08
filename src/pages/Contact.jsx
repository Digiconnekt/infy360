import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AxiosPost from "../API";
import TitleSection from "../components/Title";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    joinWithUs: "Of Course!",
    requireAssistanceWith: [],
    findOutAboutUs: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    if (handlerName === "requireAssistanceWith") {
      let copyOfFormData = { ...formData };
      if (e.target.checked) {
        copyOfFormData.requireAssistanceWith.push(handlerValue);
      } else {
        copyOfFormData.requireAssistanceWith =
          copyOfFormData.requireAssistanceWith.filter(
            (elem) => elem !== handlerValue
          );
      }
      setFormData(copyOfFormData);
    } else {
      setFormData(() => ({ ...formData, [handlerName]: handlerValue }));
      // console.log(handlerName, handlerValue);
      // console.log(e);
    }
  };

  const payload = {
    fullName: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    joinWithUs: formData.joinWithUs,
    requireAssistanceWith: formData.requireAssistanceWith,
    findOutAboutUs: formData.findOutAboutUs,

    organisation: "infy360",
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
    const regexPhone = /^[0-9]/;

    if (!values.name) {
      errors.name = "FullName is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Please enter a Valid Email";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!regexPhone.test(values.phone)) {
      errors.phone = "Please enter a Valid Phone Number";
    }

    if (!values.message) {
      errors.message = "Please, leave us a message";
    }

    if (!values.joinWithUs) {
      errors.joinWithUs = "Please select any one";
    }

    if (values.requireAssistanceWith < 1) {
      errors.requireAssistanceWith = "Please select atleast one";
    }

    if (!values.findOutAboutUs) {
      errors.findOutAboutUs = "Please select any one";
    }

    return errors;
  };
  // validation end

  const style = {
    borderRadius: "5px",
    fontSize: "15px",
    color: "#111121",
    border: "1px solid transparent",
    boxShadow: "0px 15px 35px rgb(0 0 0 / 10%)",
    padding: "0.375rem 2.25rem 0.375rem 0.75rem",
  };

  const bgStyle = {
    background: "#ffffff",
  };

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Contact Us for Free SEO Site Audit & Expert Lead Generation Services
          in USA & India
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Reach out to Infy360, a leading digital marketing agency in India. Contact us for a free SEO site audit and discover our expertise in effective lead generation strategies."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="online marketing company, internet marketing company, digital marketing strategy, digital branding"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Contact" />
      {/* title section end */}

      <div className="page-content">
        <section
          className="contact-1"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(images/pattern/02.png)" }}
        >
          <div className="container mx-auto">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="p-5 h-100" style={{ ...style, ...bgStyle }}>
                  <div className="section-title text-center mb-2">
                    <h2 className="title">Call Us</h2>
                  </div>

                  <ul className="list-unstyled list-icon">
                    <li className="mb-3 text-center ps-0">
                      <span
                        style={{
                          color: "#1c2045",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        India
                      </span>
                      <br />
                      <a href="tel:+918595334605">+91 85953 34605</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                <div className="p-5 h-100" style={{ ...style, ...bgStyle }}>
                  <div className="section-title text-center mb-2">
                    <h2 className="title">Our Offices</h2>
                  </div>

                  <ul className="list-unstyled list-icon">
                    <li className="mb-3 text-center ps-0">
                      <span
                        style={{
                          color: "#1c2045",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        India
                      </span>
                      <br />
                      <p className="lead">
                        Wework , Blueone Square Building, 246, Phase IV, Udyog
                        Vihar Gurugram, HR 122016
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="page-content">
        <section
          className="contact-1"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(images/pattern/02.png)" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-7">
                <div className="section-title mb-2">
                  <h6>Get In Touch</h6>
                  <h2 className="title">Contact Us</h2>
                </div>
                <div className="contact-main">
                  <form
                    // id="contact-form"
                    className="row g-4"
                    noValidate
                    onSubmit={submitFormData}
                  >
                    {/* name start */}
                    <div className="col-md-6">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                        onChange={onChangeHandler}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.name}
                      </div>
                    </div>
                    {/* name end */}

                    {/* email start */}
                    <div className="col-md-6">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={onChangeHandler}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.email}
                      </div>
                    </div>
                    {/* email end */}

                    {/* phone start */}
                    <div className="col-md-12">
                      <input
                        id="form_phone"
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        required
                        onChange={onChangeHandler}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.phone}
                      </div>
                    </div>
                    {/* phone end */}

                    {/* message start */}
                    <div className="col-md-12">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        rows="3"
                        required
                        onChange={onChangeHandler}
                      ></textarea>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.message}
                      </div>
                    </div>
                    {/* message end */}

                    {/* would you mind start */}
                    <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label
                          className="mb-2"
                          style={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          Would you mind joining our email list?
                        </label>
                        <select
                          className="form-select mb-2"
                          style={{
                            ...style,
                            paddingTop: "14px",
                            paddingBottom: "14px",
                          }}
                          aria-label="Default select example"
                          name="joinWithUs"
                          onChange={onChangeHandler}
                        >
                          <option value="Of Course!">Of Course!</option>
                          <option value="No, Thank You">No, Thank You</option>
                        </select>
                      </div>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.joinWithUs}
                      </div>
                    </div>
                    {/* would you mind end */}

                    {/* I require assistance start */}
                    <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label
                          className="mb-2"
                          style={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          I require assistance with:
                        </label>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            id="seo"
                            value="Search Engine Optimization"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="seo"
                            style={{ fontSize: "15px" }}
                          >
                            Search Engine Optimization
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Social Media Optimization"
                            id="smo"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="smo"
                            style={{ fontSize: "15px" }}
                          >
                            Social Media Optimization
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Email Marketing"
                            id="emailMarketing"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="emailMarketing"
                            style={{ fontSize: "15px" }}
                          >
                            Email Marketing
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Content Marketing"
                            id="contentMarketing"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contentMarketing"
                            style={{ fontSize: "15px" }}
                          >
                            Content Marketing
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Lead Generation"
                            id="leadGeneration"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="leadGeneration"
                            style={{ fontSize: "15px" }}
                          >
                            Lead Generation
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Programmatic Advertising"
                            id="programmaticAdvertising"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="programmaticAdvertising"
                            style={{ fontSize: "15px" }}
                          >
                            Programmatic Advertising
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Pay Per Click"
                            id="payPerClick"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="payPerClick"
                            style={{ fontSize: "15px" }}
                          >
                            Pay Per Click
                          </label>
                        </div>
                      </div>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.requireAssistanceWith}
                      </div>
                    </div>
                    {/* I require assistance end */}

                    {/* How did you find start */}
                    <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label
                          className="mb-2"
                          style={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          How did you find out about us?
                        </label>
                        <div className="form-check">
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="instagram"
                              value="Instagram"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="instagram"
                              style={{ fontSize: "15px" }}
                            >
                              Instagram
                            </label>
                          </div>
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="facebook"
                              value="Facebook"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="facebook"
                              style={{ fontSize: "15px" }}
                            >
                              Facebook
                            </label>
                          </div>
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="google"
                              value="Google"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="google"
                              style={{ fontSize: "15px" }}
                            >
                              Google
                            </label>
                          </div>
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="linkedin"
                              value="Linkedin"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="linkedin"
                              style={{ fontSize: "15px" }}
                            >
                              Linkedin
                            </label>
                          </div>
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="other"
                              value="Other"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="other"
                              style={{ fontSize: "15px" }}
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.findOutAboutUs}
                      </div>
                    </div>
                    {/* How did you find end */}

                    {/* RECAPTCHA start */}
                    {/* <ReCAPTCHA
                      sitekey={process.env.REACT_APP_SITE_KEY}
                      size="invisible"
                    /> */}
                    {/* RECAPTCHA end */}

                    {/* send button start */}
                    <div className="col-md-12">
                      <button className="btn btn-theme btn-radius">
                        <span>Send Message</span>
                      </button>
                    </div>
                    {/* send button end */}

                    {Object.keys(formErrors).length !== 0 && isSubmit ? (
                      <div className="messages" style={{ color: "red" }}>
                        Please fill all the input fileds
                      </div>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
