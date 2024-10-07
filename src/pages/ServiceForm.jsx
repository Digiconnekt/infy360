import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AxiosPost from "../API";
import TitleSection from "../components/Title";

const ServiceForm = () => {
  const { id } = useParams();
  const selectedService = id.replace(/-/g, " ");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formData, setFormData] = useState({
    serviceLookingFor: [selectedService],
    mainObjective: [],
    wantToScheduleMeeting: "",
    meetingTimeAndDate: "",
    fullName: "",
    phone: "",
    email: "",
    websiteLink: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    let copyOfFormData;
    if (handlerName === "serviceLookingFor") {
      copyOfFormData = { ...formData };
      if (e.target.checked) {
        copyOfFormData.serviceLookingFor.push(handlerValue);
      } else {
        copyOfFormData.serviceLookingFor =
          copyOfFormData.serviceLookingFor.filter(
            (elem) => elem !== handlerValue
          );
      }
      setFormData(copyOfFormData);
    } else if (handlerName === "mainObjective") {
      copyOfFormData = { ...formData };
      if (e.target.checked) {
        copyOfFormData.mainObjective.push(handlerValue);
      } else {
        copyOfFormData.mainObjective = copyOfFormData.mainObjective.filter(
          (elem) => elem !== handlerValue
        );
      }
      setFormData(copyOfFormData);
    } else {
      setFormData(() => ({ ...formData, [handlerName]: handlerValue }));
    }

    // console.log(handlerName, handlerValue);
    // console.log(e);
  };

  const payload = {
    serviceLookingFor: formData.serviceLookingFor,
    mainObjective: formData.mainObjective,
    wantToScheduleMeeting: formData.wantToScheduleMeeting,
    meetingTimeAndDate: formData.meetingTimeAndDate,
    fullName: formData.fullName,
    phone: formData.phone,
    email: formData.email,
    websiteLink: formData.websiteLink,
    message: formData.message,

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

    if (!values.fullName) {
      errors.fullName = "FullName is required";
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

    if (!values.websiteLink) {
      errors.websiteLink = "Website link is required";
    }

    if (!values.message) {
      errors.message = "Please, leave us a message";
    }

    return errors;
  };
  // validation end

  const style = {
    borderRadius: "5px",
    fontSize: "13px",
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
        <title>Services - Infy360</title>

        {/* Description */}
        <meta name="description" content="" />

        {/* Keywords */}
        <meta name="keywords" content="" />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title={selectedService} />
      {/* title section end -*/}

      <div className="page-content">
        <section
          className="contact-1"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(images/pattern/01.png)" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-7">
                {/* <div className="section-title mb-2">
                  <h6>Proposal</h6>
                  <h2 className="title">Get A Proposal</h2>
                </div> */}
                <div className="contact-main">
                  <form
                    className="row g-4"
                    noValidate
                    onSubmit={submitFormData}
                  >
                    <div className="messages"></div>

                    {/* what service looking start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "27px", fontWeight: "500" }}
                      >
                        All right! You are looking for{" "}
                        <span style={{ textTransform: "uppercase" }}>
                          {selectedService}.
                        </span>
                      </label>
                      <div className="section-title mb-0">
                        <h6>Hit only 5 steps to reach us</h6>
                      </div>
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Would you like to choose more services?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="serviceLookingFor"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="search engine optimization"
                            id="seo"
                            onChange={onChangeHandler}
                            checked={
                              formData.serviceLookingFor.indexOf(
                                "search engine optimization"
                              ) !== -1
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="seo"
                            style={{ fontSize: "15px" }}
                          >
                            Search Engine Optimization
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="serviceLookingFor"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="social media optimization"
                            id="smo"
                            onChange={onChangeHandler}
                            checked={
                              formData.serviceLookingFor.indexOf(
                                "social media optimization"
                              ) !== -1
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="smo"
                            style={{ fontSize: "15px" }}
                          >
                            Social Media Optimization
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="serviceLookingFor"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="email marketing"
                            id="emailMarketing"
                            onChange={onChangeHandler}
                            checked={
                              formData.serviceLookingFor.indexOf(
                                "email marketing"
                              ) !== -1
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="emailMarketing"
                            style={{ fontSize: "15px" }}
                          >
                            Email Marketing
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="serviceLookingFor"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="content marketing"
                            id="contentMarketing"
                            onChange={onChangeHandler}
                            checked={
                              formData.serviceLookingFor.indexOf(
                                "content marketing"
                              ) !== -1
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contentMarketing"
                            style={{ fontSize: "15px" }}
                          >
                            Content Marketing
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="serviceLookingFor"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="lead generation"
                            id="leadGeneration"
                            onChange={onChangeHandler}
                            checked={
                              formData.serviceLookingFor.indexOf(
                                "lead generation"
                              ) !== -1
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="leadGeneration"
                            style={{ fontSize: "15px" }}
                          >
                            Lead Generation
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="serviceLookingFor"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="programmatic advertising"
                            id="programmaticAdvertising"
                            onChange={onChangeHandler}
                            checked={
                              formData.serviceLookingFor.indexOf(
                                "programmatic advertising"
                              ) !== -1
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="programmaticAdvertising"
                            style={{ fontSize: "15px" }}
                          >
                            Programmatic Advertising
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="serviceLookingFor"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="pay per click"
                            id="payPerClick"
                            onChange={onChangeHandler}
                            checked={
                              formData.serviceLookingFor.indexOf(
                                "pay per click"
                              ) !== -1
                            }
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
                    </div>
                    {/* what service looking end */}

                    {/* main objective start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        And what is your main objective?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="mainObjective"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Increase My Revenue"
                            id="increaseRevenue"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="increaseRevenue"
                            style={{ fontSize: "15px" }}
                          >
                            Increase My Revenue
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="mainObjective"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Get More Leads"
                            id="getMoreLeads"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="getMoreLeads"
                            style={{ fontSize: "15px" }}
                          >
                            Get More Leads
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="mainObjective"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Gain more engagement"
                            id="gainMoreEngagement"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gainMoreEngagement"
                            style={{ fontSize: "15px" }}
                          >
                            Gain more engagement
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="mainObjective"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Grow brand awareness"
                            id="growBrandAwareness"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="growBrandAwareness"
                            style={{ fontSize: "15px" }}
                          >
                            Grow brand awareness
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="mainObjective"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Start My Business"
                            id="startMyBusiness"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="startMyBusiness"
                            style={{ fontSize: "15px" }}
                          >
                            Start My Business
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            name="mainObjective"
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Other"
                            id="other"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="other"
                            style={{ fontSize: "15px" }}
                          >
                            Other
                          </label>
                          {/* <input
                            type="text"
                            name="name"
                            placeholder="Type here..."
                            style={{
                              border: "none",
                              borderBottom: "1px solid #333",
                              marginLeft: "8px",
                              color: "#333",
                              fontSize: "15px",
                            }}
                          /> */}
                        </div>
                      </div>
                    </div>
                    {/* main objective end */}

                    {/* have you ever collab start */}
                    {formData.mainObjective.length !== 0 && (
                      <div className="col-md-12 mb-3">
                        <label
                          className="mb-2"
                          style={{ fontSize: "18px", fontWeight: "500" }}
                        >
                          Do you want to schedule a Meeting?
                        </label>
                        <div className="" style={{ ...style, ...bgStyle }}>
                          <div className="form-check mt-2 mb-2">
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="wantToScheduleMeeting"
                              id="yes"
                              value="Yes"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="yes"
                              style={{ fontSize: "15px" }}
                            >
                              Yes
                            </label>
                          </div>
                          <div className="form-check mt-2 mb-2">
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="wantToScheduleMeeting"
                              id="no"
                              value="No"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="no"
                              style={{ fontSize: "15px" }}
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* have you ever collab end */}

                    {/* when would you like to meet start */}
                    {formData.wantToScheduleMeeting !== "" &&
                      formData.wantToScheduleMeeting !== "No" && (
                        <div className="col-md-12 mb-3">
                          <label
                            className="mb-2"
                            style={{ fontSize: "18px", fontWeight: "500" }}
                          >
                            When would you like to meet with us online?
                          </label>
                          <br />
                          <input
                            className="text-black"
                            type="datetime-local"
                            name="meetingTimeAndDate"
                            onChange={onChangeHandler}
                          />
                        </div>
                      )}
                    {/* when would you like to meet end */}

                    {/* provide contact info start */}
                    {((formData.wantToScheduleMeeting === "Yes" &&
                      formData.meetingTimeAndDate !== "") ||
                      formData.wantToScheduleMeeting === "No") && (
                      <div className="col-md-12 mb-3">
                        <label
                          className="mb-2"
                          style={{ fontSize: "18px", fontWeight: "500" }}
                        >
                          Please provide your contact information so that we may
                          contact you with your quote.
                        </label>
                        <div className="row">
                          <div className="col-md-6 mt-2 mb-2">
                            <input
                              type="text"
                              name="fullName"
                              className="form-control"
                              placeholder="FullName"
                              required
                              onChange={onChangeHandler}
                            />
                            <div
                              className="invalid-feedback"
                              style={{ display: "block", marginLeft: "5px" }}
                            >
                              {formErrors.fullName}
                            </div>
                          </div>
                          <div className="col-md-6 mt-2 mb-2">
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
                          <div className="col-md-6 mt-2 mb-2">
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
                          <div className="col-md-6 mt-2 mb-2">
                            <input
                              type="text"
                              name="websiteLink"
                              className="form-control"
                              placeholder="Website Link"
                              required
                              onChange={onChangeHandler}
                            />
                            <div
                              className="invalid-feedback"
                              style={{ display: "block", marginLeft: "5px" }}
                            >
                              {formErrors.websiteLink}
                            </div>
                          </div>
                          <div className="col-md-12 mt-2 mb-2">
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
                        </div>
                      </div>
                    )}

                    {/* {formData.meetingTimeAndDate !== "" ||
                      (formData.wantToScheduleMeeting == "No" && (
                        <div className="col-md-12 mb-3">
                          <label
                            className="mb-2"
                            style={{ fontSize: "18px", fontWeight: "500" }}
                          >
                            Please provide your contact information so that we
                            may contact you with your quote.
                          </label>
                          <div className="row">
                            <div className="col-md-6 mt-2 mb-2">
                              <input
                                type="text"
                                name="fullName"
                                className="form-control"
                                placeholder="FullName"
                                required
                                onChange={onChangeHandler}
                              />
                              <div className="invalid-feedback">
                                Phone is required
                              </div>
                            </div>
                            <div className="col-md-6 mt-2 mb-2">
                              <input
                                id="form_phone"
                                type="tel"
                                name="phone"
                                className="form-control"
                                placeholder="Phone"
                                required
                                onChange={onChangeHandler}
                              />
                              <div className="invalid-feedback">
                                Phone is required
                              </div>
                            </div>
                            <div className="col-md-6 mt-2 mb-2">
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                required
                                onChange={onChangeHandler}
                              />
                              <div className="invalid-feedback">
                                Valid email is required.
                              </div>
                            </div>
                            <div className="col-md-6 mt-2 mb-2">
                              <input
                                type="text"
                                name="websiteLink"
                                className="form-control"
                                placeholder="Website Link"
                                required
                                onChange={onChangeHandler}
                              />
                              <div className="invalid-feedback">
                                Valid email is required.
                              </div>
                            </div>
                            <div className="col-md-12 mt-2 mb-2">
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
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))} */}
                    {/* provide contact info end */}

                    {/* send data to API button start */}
                    {/* {formData.fullName.length !== 0 &&
                      formData.phone.length !== 0 &&
                      formData.email.length !== 0 &&
                      formData.websiteLink.length !== 0 &&
                      formData.message.length !== 0 && (
                        <div className="col-md-12">
                          <button className="btn btn-theme btn-radius">
                            <span>Send Message</span>
                          </button>
                        </div>
                      )} */}
                    {/* send data to API button end */}

                    {/* send data to API button start */}
                    {((formData.wantToScheduleMeeting === "Yes" &&
                      formData.meetingTimeAndDate !== "") ||
                      formData.wantToScheduleMeeting === "No") && (
                      <div className="col-md-12">
                        <button className="btn btn-theme btn-radius">
                          <span>Send Message</span>
                        </button>
                      </div>
                    )}
                    {/* send data to API button end */}

                    {/* send msg button start */}
                    {(formData.mainObjective.length === 0 ||
                      formData.wantToScheduleMeeting === "" ||
                      (formData.wantToScheduleMeeting === "Yes" &&
                        formData.meetingTimeAndDate === "")) && (
                      <div className="col-md-12">
                        <div className="btn btn-theme btn-radius">
                          <span>Send Message</span>
                        </div>
                      </div>
                    )}
                    {/* send msg button end */}

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

export default ServiceForm;
