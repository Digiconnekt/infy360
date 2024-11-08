import React, { useEffect, useState } from "react";
import TitleSection from "../components/Title";
import "../App.css";
import AxiosPost from "../API";
import { Helmet } from "react-helmet-async";
import useMail from "../utils/sendMail";

const Proposal = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { isLoading, data: mailData, sendMailReq } = useMail();

  const [formData, setFormData] = useState({
    name: "",
    website: "",
    mainObjective: [],
    concern: "",
    everCollaborated: "",
    experience: "",
    lookingFor: [],
    moneyBring: "",
    phone: "",
    email: "",
    company: "",
    dateTime: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    let copyOfFormData;
    if (handlerName === "mainObjective") {
      copyOfFormData = { ...formData };
      if (e.target.checked) {
        copyOfFormData.mainObjective.push(handlerValue);
      } else {
        copyOfFormData.mainObjective = copyOfFormData.mainObjective.filter(
          (elem) => elem !== handlerValue
        );
      }
      setFormData(copyOfFormData);
    } else if (handlerName === "lookingFor") {
      copyOfFormData = { ...formData };
      if (e.target.checked) {
        copyOfFormData.lookingFor.push(handlerValue);
      } else {
        copyOfFormData.lookingFor = copyOfFormData.lookingFor.filter(
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

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const templateData = {
        fullName: formData.name,
        website: formData.website,
        mainObjective: formData.mainObjective,
        concern: formData.concern,
        everCollaborated: formData.everCollaborated,
        lookingFor: formData.lookingFor,
        moneyBring: formData.moneyBring,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        meetDateTime: formData.dateTime,
      };

      sendMailReq(templateData, "template_liug2zd");
    }
  }, [formErrors]);

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

    if (!values.website) {
      errors.website = "Website link is required";
    }

    if (values.mainObjective < 1) {
      errors.mainObjective = "Please select atleast one";
    }

    if (!values.concern) {
      errors.concern = "This Field is required";
    }

    if (!values.everCollaborated) {
      errors.everCollaborated = "This Field is required";
    }

    // if (!values.experience) {
    //   errors.experience = "This Field is required";
    // }

    if (values.lookingFor < 1) {
      errors.lookingFor = "Please select atleast one";
    }

    if (!values.moneyBring) {
      errors.moneyBring = "This Field is required";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!regexPhone.test(values.phone)) {
      errors.phone = "Please enter a Valid Phone Number";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Please enter a Valid Email";
    }

    if (!values.company) {
      errors.company = "This Field is required";
    }

    if (!values.dateTime) {
      errors.dateTime = "This Field is required";
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
        <title>
          Boost Your Business with Top Digital Marketing Services | Brandnest
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Explore expert digital advertising services and SEO solutions tailored for success from Brandnest, a leading digital marketing agency in the USA and India. Get a customized proposal today!"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="digital marketing proposal, digital marketing services cost, digital marketing pricing packages, quotation for digital marketing"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Get A Quote" />
      {/* title section end */}

      <div className="page-content">
        <section
          className="contact-1"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(images/pattern/01.png)" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-7">
                <div className="section-title mb-2">
                  <h6>Quote</h6>
                  <h2 className="title">Get A Quote</h2>
                </div>
                <div className="contact-main">
                  <form
                    // id="contact-form"
                    className="row g-4 needs-validation"
                    noValidate
                    onSubmit={submitFormData}
                  >
                    <div className="messages"></div>

                    {/* name start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Let's start by asking you for your Full Name.
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Full Name here..."
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

                    {/* website name start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Name of your Website?
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="website"
                        className="form-control"
                        placeholder="https://example.com"
                        required
                        onChange={onChangeHandler}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.website}
                      </div>
                    </div>
                    {/* website name end */}

                    {/* main objective start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        What is your main objective?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Increase My Revenue"
                            id="increaseRevenue"
                            onChange={onChangeHandler}
                            name="mainObjective"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Get More Leads"
                            id="getMoreLeads"
                            onChange={onChangeHandler}
                            name="mainObjective"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Increase brand awareness"
                            id="growBrandAwareness"
                            onChange={onChangeHandler}
                            name="mainObjective"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="growBrandAwareness"
                            style={{ fontSize: "15px" }}
                          >
                            Increase brand awareness
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Start My Business"
                            id="startMyBusiness"
                            onChange={onChangeHandler}
                            name="mainObjective"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Other"
                            id="other"
                            onChange={onChangeHandler}
                            name="mainObjective"
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
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.mainObjective}
                      </div>
                    </div>
                    {/* main objective end */}

                    {/* which concern start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Which concern do you have the most at the moment?
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="concern"
                        className="form-control"
                        placeholder="Type here..."
                        required
                        onChange={onChangeHandler}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.concern}
                      </div>
                    </div>
                    {/* which concern end */}

                    {/* have you ever collab start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Have you in the past worked with a partner to address
                        the above concerns ever collaborated with an
                        organisation?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            name="everCollaborated"
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
                            name="everCollaborated"
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
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.everCollaborated}
                      </div>
                    </div>
                    {/* have you ever collab end */}

                    {/* what prior experience start */}
                    {/* <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        What prior experience did you have?
                      </label>
                      <div
                        className="d-flex justify-content-between"
                        style={{ ...style, ...bgStyle, padding: "5px 5px" }}
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="zero"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="0"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="zero"
                          style={{ padding: "8px 12px" }}
                        >
                          0
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="one"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="1"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="one"
                          style={{ padding: "8px 12px" }}
                        >
                          1
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="two"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="2"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="two"
                          style={{ padding: "8px 12px" }}
                        >
                          2
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="three"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="3"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="three"
                          style={{ padding: "8px 12px" }}
                        >
                          3
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="four"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="4"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="four"
                          style={{ padding: "8px 12px" }}
                        >
                          4
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="five"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="5"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="five"
                          style={{ padding: "8px 12px" }}
                        >
                          5
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="six"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="6"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="six"
                          style={{ padding: "8px 12px" }}
                        >
                          6
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="seven"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="7"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="seven"
                          style={{ padding: "8px 12px" }}
                        >
                          7
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="eight"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="8"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="eight"
                          style={{ padding: "8px 12px" }}
                        >
                          8
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="nine"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="9"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="nine"
                          style={{ padding: "8px 12px" }}
                        >
                          9
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="experience"
                          id="ten"
                          autoComplete="off"
                          onChange={onChangeHandler}
                          value="10"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="ten"
                          style={{ padding: "8px 12px" }}
                        >
                          10
                        </label>
                      </div>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.experience}
                      </div>
                    </div> */}
                    {/* what prior experience end */}

                    {/* what service looking start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        All right! Now, which services are you interested?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Search Engine Optimization"
                            id="seo"
                            onChange={onChangeHandler}
                            name="lookingFor"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Social Media Optimization"
                            id="smo"
                            onChange={onChangeHandler}
                            name="lookingFor"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Email Marketing"
                            id="emailMarketing"
                            onChange={onChangeHandler}
                            name="lookingFor"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Content Marketing"
                            id="contentMarketing"
                            onChange={onChangeHandler}
                            name="lookingFor"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Lead Generation"
                            id="leadGeneration"
                            onChange={onChangeHandler}
                            name="lookingFor"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Programmatic Advertising"
                            id="programmaticAdvertising"
                            onChange={onChangeHandler}
                            name="lookingFor"
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
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Pay Per Click"
                            id="payPerClick"
                            onChange={onChangeHandler}
                            name="lookingFor"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="payPerClick"
                            style={{ fontSize: "15px" }}
                          >
                            Pay Per Click
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Branding"
                            id="branding"
                            onChange={onChangeHandler}
                            name="lookingFor"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="branding"
                            style={{ fontSize: "15px" }}
                          >
                            Branding
                          </label>
                        </div>
                      </div>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.lookingFor}
                      </div>
                    </div>
                    {/* what service looking end */}

                    {/* how much money start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Monthly turnover of your company?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            value="I'm preparing to launch"
                            id="launch"
                            name="moneyBring"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="launch"
                            style={{ fontSize: "15px" }}
                          >
                            I'm preparing to launch
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            value="$0 - $5000"
                            id="zeroToFiveK"
                            name="moneyBring"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="zeroToFiveK"
                            style={{ fontSize: "15px" }}
                          >
                            $0 - $5000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            value="$5000 - $10000"
                            id="fiveToTenK"
                            name="moneyBring"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fiveToTenK"
                            style={{ fontSize: "15px" }}
                          >
                            $5000 - $10000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            value="$10000 - $20000"
                            id="tenToTwentyK"
                            name="moneyBring"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tenToTwentyK"
                            style={{ fontSize: "15px" }}
                          >
                            $10000 - $20000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            value="$20000 - $50000"
                            id="twentyToFiftyK"
                            name="moneyBring"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="twentyToFiftyK"
                            style={{ fontSize: "15px" }}
                          >
                            $20000 - $50000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            value="$50000 - $100000"
                            id="fiftyToOneLac"
                            name="moneyBring"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fiftyToOneLac"
                            style={{ fontSize: "15px" }}
                          >
                            $50000 - $100000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            value="$100000+"
                            id="OneLacPlus"
                            name="moneyBring"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="OneLacPlus"
                            style={{ fontSize: "15px" }}
                          >
                            $100000+
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="radio"
                            value="I'd rather hold off for now."
                            id="hold"
                            name="moneyBring"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="hold"
                            style={{ fontSize: "15px" }}
                          >
                            I'd rather hold off for now.
                          </label>
                        </div>
                      </div>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.moneyBring}
                      </div>
                    </div>
                    {/* how much money end */}

                    {/* provide contact info start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Please provide your contact information so that we may
                        contact you with quote or reach out should there be a
                        need for clarification.
                      </label>
                      <div className="row">
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
                        <div className="col-md-6  mt-2 mb-2">
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
                        <div className="col-md-12  mt-2 mb-2">
                          <input
                            id="form_name"
                            type="text"
                            name="company"
                            className="form-control"
                            placeholder="Company name"
                            required
                            onChange={onChangeHandler}
                          />
                          <div
                            className="invalid-feedback"
                            style={{ display: "block", marginLeft: "5px" }}
                          >
                            {formErrors.company}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* provide contact info end */}

                    {/* when would you like to meet start */}
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
                        name="dateTime"
                        onChange={onChangeHandler}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.dateTime}
                      </div>
                    </div>
                    {/* when would you like to meet end */}

                    {/* send button start */}
                    <div className="col-md-12">
                      <button
                        className="btn btn-theme btn-radius"
                        disabled={isLoading}
                      >
                        <span>{isLoading ? "Sending..." : "Send Message"}</span>
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

export default Proposal;
