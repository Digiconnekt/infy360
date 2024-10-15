import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AxiosPost from "../API";
import ContactBtnBanner from "../components/ContactBtnBanner";

const Landing = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [addScript, setAddScript] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    requireAssistanceWith: [],
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
    requireAssistanceWith: formData.requireAssistanceWith,

    organisation: "brandnest",
    messageFrom: window.location.href,
  };

  useEffect(
    (e) => {
      // console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        AxiosPost(payload);
        setAddScript(true);
        // navigate("/thank-you");

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

    if (values.requireAssistanceWith < 1) {
      errors.requireAssistanceWith = "Please select atleast one";
    }

    return errors;
  };
  // validation end

  const inputBlockStyle = {
    border: "none",
    borderRadius: "0px",
    borderBottom: "1px solid #000000",
    boxShadow: "none",
  };

  return (
    <>
      {addScript && (
        <Helmet>
          {/* script to load on send message is success */}
          <script>fbq('track', 'CompleteRegistration');</script>
        </Helmet>
      )}

      {/* hero section start */}
      <section
        className="fullscreen-banner p-0 landing banner overflow-hidden"
        data-bg-img="images/pattern/01.png"
        style={{ minHeight: "700px" }}
      >
        <div className="insideText">Brandnest</div>
        <div className="align-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1 animated bounceInRight delay-2 duration-3">
                <div className="login-form box-shadow white-bg p-4 p-md-5 text-center">
                  <h3
                    className="title"
                    style={{
                      color: "#1c2045",
                      marginBottom: "6px",
                      paddingBottom: "6px",
                    }}
                  >
                    Get In Touch
                  </h3>
                  <p>
                    Fill out the information below and we will reach you soon
                  </p>
                  <form noValidate onSubmit={submitFormData}>
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="form-group"
                          style={{ marginBottom: "0px" }}
                        >
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Your Name"
                            required
                            style={inputBlockStyle}
                            onChange={onChangeHandler}
                          />
                          <div
                            className="invalid-feedback"
                            style={{ display: "block", marginLeft: "5px" }}
                          >
                            {formErrors.name}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-group"
                          style={{ marginBottom: "0px" }}
                        >
                          <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Enter Your Mobile Number"
                            required
                            style={inputBlockStyle}
                            onChange={onChangeHandler}
                          />
                          <div
                            className="invalid-feedback"
                            style={{ display: "block", marginLeft: "5px" }}
                          >
                            {formErrors.phone}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div
                          className="form-group"
                          style={{ marginBottom: "0px" }}
                        >
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                            required
                            style={inputBlockStyle}
                            onChange={onChangeHandler}
                          />
                          <div
                            className="invalid-feedback"
                            style={{ display: "block", marginLeft: "5px" }}
                          >
                            {formErrors.email}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group" style={{ marginBottom: "0px" }}>
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Enter Your Message..."
                        rows="3"
                        required
                        style={{
                          border: "none",
                          borderRadius: "0px",
                          borderBottom: "1px solid #000000",
                          boxShadow: "none",
                          height: "auto",
                        }}
                        onChange={onChangeHandler}
                      ></textarea>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.message}
                      </div>
                    </div>
                    <div
                      className="form-group text-start"
                      style={{ marginBottom: "0px" }}
                    >
                      <div className="">
                        <label
                          className="mb-2"
                          style={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          I require assistance with:
                        </label>
                        <div className="row">
                          <div className="col-md-6">
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
                          </div>
                          <div className="col-md-6">
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
                          </div>
                          <div className="col-md-6">
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
                          </div>
                          <div className="col-md-6">
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
                          </div>
                          <div className="col-md-6">
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
                          </div>
                          <div className="col-md-6">
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
                          <div className="col-md-6">
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
                          </div>
                        </div>
                      </div>
                      <div
                        className="invalid-feedback"
                        style={{ display: "block", marginLeft: "5px" }}
                      >
                        {formErrors.requireAssistanceWith}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button className="btn btn-theme btn-radius w-100">
                        <span>Send Message</span>
                      </button>
                    </div>

                    {/* {Object.keys(formErrors).length !== 0 && isSubmit ? (
                      <div className="messages" style={{ color: "red" }}>
                        Please fill all the input fileds
                      </div>
                    ) : null} */}
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 animated bounceInLeft delay-2 duration-3">
                <div
                  className="owl-carousel"
                  data-items="1"
                  data-autoplay="true"
                >
                  <div className="item">
                    <h1 className="mb-4">
                      Want To
                      <span className="font-w-5">
                        {" "}
                        Rank Higher In Search Results?
                      </span>{" "}
                      Let’s Talk About <span className="font-w-5">
                        {" "}
                        SEO
                      </span>{" "}
                      With Our Experts!
                    </h1>
                    <p className="lead animated fadeInUp delay-3 duration-4">
                      SEO or Search Engine Optimization means, making your
                      website more visible on a Search Engine Results Page
                      (SERP). According to the latest figures, around 3.5
                      billion searches happen per day! With such a high volume
                      of searches, SEO is definitely an important ingredient for
                      making a perfect website!!
                    </p>
                    <a
                      className="btn btn-theme"
                      href="/services/search-engine-optimization"
                    >
                      <span>Learn More</span>
                    </a>
                  </div>
                  <div className="item">
                    <h1 className="mb-4">
                      Grow
                      <span className="font-w-5">
                        {" "}
                        Your Organization 10x
                      </span>{" "}
                      With The{" "}
                      <span className="font-w-5"> Online Presence.</span> Get In
                      Touch With Our Experts Now!
                    </h1>
                    <p className="lead animated fadeInUp delay-3 duration-4">
                      From its inception in the year 2006 to fast forward 2022,
                      SMO is hitting the digital market with its necessity. SMO
                      or Social Media Optimization primarily aims at attracting
                      customers from any source other than search engines.
                    </p>
                    <a
                      className="btn btn-theme"
                      href="/services/social-media-optimization"
                    >
                      <span>Learn More</span>
                    </a>
                  </div>
                  <div className="item">
                    <h1 className="mb-4">
                      We Are A <span className="font-w-5"> Huge Bang</span> For
                      One’s Buck By{" "}
                      <span className="font-w-5"> Helping you</span> Get Into
                      The Game!!
                    </h1>
                    <p className="lead animated fadeInUp delay-3 duration-4">
                      One of the most well-known types of digital marketing is
                      pay-per-click advertising. However, the first query from
                      companies that haven't used it is certainly, "Why is PPC
                      important?"
                    </p>
                    <a className="btn btn-theme" href="/services/ppc">
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* would you mind to join us start */}
      <ContactBtnBanner />
      {/* would you mind to join us end */}

      {/* services section start */}
      <section className="position-relative">
        <div className="pattern-3">
          <img
            className="img-fluid rotateme"
            src="images/pattern/03.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="section-title">
                <h6>Services</h6>
                <h2 className="title">Services We Provide</h2>
              </div>
              <ul className="list-unstyled list-icon">
                <li className="mb-3">
                  <i className="flaticon-tick"></i> Our services act as the fuel
                  for the growth of your business. Your growth is our primary
                  priority.
                </li>
                <li className="mb-3">
                  <i className="flaticon-tick"></i> All our services are focused
                  on precision targeting for desired results.
                </li>
                <li>
                  <i className="flaticon-tick"></i> All our ads and content are
                  tailored for your business to set a great impression of your
                  brand.
                </li>
              </ul>
            </div>
            <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
              <div
                className="owl-carousel no-pb"
                data-dots="false"
                data-items="2"
                data-sm-items="1"
                data-autoplay="true"
              >
                <div className="item">
                  <div className="featured-item text-center style-2 mx-3 my-3">
                    <a href="/services/search-engine-optimization">
                      <div
                        className="featured-icon"
                        style={{ maxWidth: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src="./images/services/seoIcon.png"
                          alt="Search Engine Optimization"
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Search Engine Optimization</h5>
                      </div>
                      <div className="featured-desc">
                        <p
                          className="text-black"
                          style={{ textAlign: "justify" }}
                        >
                          We trust statistics! We are committed to boosting your
                          organic search leads by a noticeable amount,
                          positioning your company in the digital age,
                          influencing consumer behavior, promoting autonomous
                          read more...
                          {/* purchasing, and boosting local traffic, all of which
                          will improve the graph of your visibility and
                          engagement. */}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="featured-item text-center style-2 mx-3 my-3">
                    <a href="/services/social-media-optimization">
                      <div
                        className="featured-icon"
                        style={{ maxWidth: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src="./images/services/smoIcon.png"
                          alt="Social Media Optimization"
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Social Media Optimization</h5>
                      </div>
                      <div className="featured-desc">
                        <p
                          className="text-black"
                          style={{ textAlign: "justify" }}
                        >
                          After research doing a search audit is a must as it
                          filters the flaws in your content. Once your content
                          is ready set up your social media pages, find
                          inspiration, and improve your profile. Bingo, get
                          started, create content, read more...
                          {/* be consistent and see your
                          engagement rate increase! */}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="featured-item text-center style-2 mx-3 my-3">
                    <a href="/services/email-marketing">
                      <div
                        className="featured-icon"
                        style={{ maxWidth: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src="./images/services/emailMarketingIcon.png"
                          alt="Email Marketing"
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Email Marketing</h5>
                      </div>
                      <div className="featured-desc">
                        <p
                          className="text-black"
                          style={{ textAlign: "justify" }}
                        >
                          A great tool for boosting your digital marketing
                          initiatives at Brandnest is the bulk email service. By
                          dividing your customers into distinct categories and
                          identifying their demands, we can manage your
                          customers more effectively and raise your conversion
                          read more...
                          {/* rates. By sending emails at the ideal time, our
                          AI-powered technologies improve your engagement graph. */}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="featured-item text-center style-2 mx-3 my-3">
                    <a href="/services/content-marketing">
                      <div
                        className="featured-icon"
                        style={{ maxWidth: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src="./images/services/contentMarketingIcon.png"
                          alt="Content Marketing"
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Content Marketing</h5>
                      </div>
                      <div className="featured-desc">
                        <p
                          className="text-black"
                          style={{ textAlign: "justify" }}
                        >
                          We look into the interests and demands of our target
                          audiences worldwide. The needs of your users are the
                          main priority for our content. Your website will
                          continue to rank highly in Google search results
                          thanks to our expertly crafted content that is
                          SEO-aligned read more...
                          {/* and drives organic traffic. */}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="featured-item text-center style-2 mx-3 my-3">
                    <a href="/services/lead-generation">
                      <div
                        className="featured-icon"
                        style={{ maxWidth: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src="./images/services/leadGenerationIcon.png"
                          alt="Lead Generation"
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Lead Generation</h5>
                      </div>
                      <div className="featured-desc">
                        <p
                          className="text-black"
                          style={{ textAlign: "justify" }}
                        >
                          We review data three times per week and feed the
                          results back to our internal campaigns to revise our
                          plans in order to optimise for highly profitable and
                          high set-rate campaigns. We track and enhance the
                          success of your marketing initiatives using solid
                          statistics. We are aware read more...
                          {/* of your most profitable Zips,
                          counties, and cities before you are. */}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="featured-item text-center style-2 mx-3 my-3">
                    <a href="/services/programmatic-advertising">
                      <div
                        className="featured-icon"
                        style={{ maxWidth: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src="./images/services/programmaticAdIcon.png"
                          alt="Programmatic Advertising"
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Programmatic Advertising</h5>
                      </div>
                      <div className="featured-desc">
                        <p
                          className="text-black"
                          style={{ textAlign: "justify" }}
                        >
                          In a market where clients have many options, we
                          recognise the necessity to find strategies to set your
                          company apart from the competitors. By gathering and
                          utilising zero-party data, we are better able to
                          comprehend your customers read more...
                          {/* and organisation in order to
                          provide them with a customised customer experience. */}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="featured-item text-center style-2 mx-3 my-3">
                    <a href="/services/ppc">
                      <div
                        className="featured-icon"
                        style={{ maxWidth: "80px" }}
                      >
                        <img
                          className="img-fluid"
                          src="./images/services/ppcIcon.png"
                          alt="Pay Per Click"
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Pay Per Click</h5>
                      </div>
                      <div className="featured-desc">
                        <p
                          className="text-black"
                          style={{ textAlign: "justify" }}
                        >
                          Through joint research, we'll choose the best
                          opportunity keywords for your campaign. We will create
                          a robust architecture of campaigns, ad groups, and
                          advertising to provide a strong foundation for
                          performance. read more...
                          <span style={{ opacity: "0" }}>
                            Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services section end */}

      {/* clients section start */}
      <section className="pt-0 pt-md-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title mb-1">
                <h6>Our Clients</h6>
              </div>
              <div
                className="owl-carousel no-pb"
                data-items="5"
                data-md-items="4"
                data-sm-items="3"
                data-dots="false"
                data-autoplay="true"
              >
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/m-and-s.png"
                    alt="M and S"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/acuver.png"
                    alt="Acuver"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/car-dekho.png"
                    alt="Car Dekho"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/design-pax.png"
                    alt="Design Pax"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/dream-webies.png"
                    alt="Dream Webies"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/epam.png"
                    alt="Epam"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/life-trail.png"
                    alt="Life Trail"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/listed.png"
                    alt="Listed"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/m-and-s.png"
                    alt="M And S"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/marsh-mc-lennan.png"
                    alt="Marsh Mc Lennan"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/metamore.png"
                    alt="Metamore"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/startup-buddy.png"
                    alt="Startup Buddy"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/buildnetic.png"
                    alt="Buildnetic"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/air-tour-australia.png"
                    alt="Air Tour Australia"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/the-coding-trail.png"
                    alt="The Coding Trail"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid"
                    src="images/home/clients/ddf.png"
                    alt="Delhi Duty Free"
                    style={{ margin: "0 auto", width: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* clients section end */}

      {/* testimonial section start */}
      <section
        className="animatedBackground pt-0 pt-md-5"
        // data-bg-img="images/pattern/05.png"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="section-title mb-0">
                <h6>Testimonial</h6>
                <h2 className="title">
                  You Can See our clients feedback What You Say?
                </h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
              <div className="owl-carousel" data-items="1" data-autoplay="true">
                <div className="item">
                  <div className="testimonial">
                    <div className="testimonial-img">
                      <img
                        className="img-fluid"
                        src="images/home/testimonial/milind-rounded.png"
                        alt="Milind Srivastava"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Brandnest's digital marketing services have helped take
                        our online presence to new heights. Their team is highly
                        skilled and dedicated, constantly striving to improve
                        our ROI and drive more sales.
                      </p>
                      <p>
                        I highly recommend Brandnest to any business looking for
                        top-notch digital marketing services.
                      </p>
                      <div className="testimonial-caption">
                        <h5>Milind Srivastava</h5>
                        <label>Senior Manager, Wise</label>
                      </div>
                    </div>
                    <div className="testimonial-quote">
                      <i className="flaticon-quotation"></i>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial">
                    <div className="testimonial-img">
                      <img
                        className="img-fluid"
                        src="images/home/testimonial/sunny-rounded.png"
                        alt="Sunny Nandwani"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        I have been extremely impressed with the digital
                        marketing services provided by Brandnest. Their team of
                        experts helped to increase our online presence and drive
                        more traffic to our website. Their strategies for SEO,
                        PPC, and social media marketing were highly effective
                        and resulted in a significant increase in conversions
                        and sales.
                      </p>
                      <p>
                        The team was also great at communicating with us and
                        keeping us informed about the progress of our campaigns.
                        I highly recommend Brandnest to anyone looking to
                        improve their digital marketing efforts.
                      </p>
                      <div className="testimonial-caption">
                        <h5>Sunny Nandwani</h5>
                        <label>Founder, Acuver</label>
                      </div>
                    </div>
                    <div className="testimonial-quote">
                      <i className="flaticon-quotation"></i>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial">
                    <div className="testimonial-img">
                      <img
                        className="img-fluid"
                        src="images/home/testimonial/stuti-rounded.png"
                        alt="Stuti Shukla"
                      />
                    </div>
                    <div className="testimonial-content">
                      <p>
                        Brandnest's digital marketing services have been a
                        game-changer for my business. Their team is extremely
                        knowledgeable and helped me to increase my online
                        visibility and customer engagement. I highly recommend
                        their services to any business looking to grow their
                        online presence.
                      </p>
                      <div className="testimonial-caption">
                        <h5>Stuti Shukla</h5>
                        <label>Senior Manager, Family Movers</label>
                      </div>
                    </div>
                    <div className="testimonial-quote">
                      <i className="flaticon-quotation"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial section end */}

      {/* success stories start */}
      <section className="pt-0 pt-md-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-12">
              <div className="section-title">
                <h6>Stories</h6>
                <h2 className="title">Success Stories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="post style-2">
                <div className="post-image">
                  <img
                    className="img-fluid h-100 w-100"
                    src="images/success-stories/ddf.png"
                    alt="Success Stories 1"
                  />
                </div>
                <div className="post-desc">
                  <div className="post-title">
                    <h5 style={{ color: "#ff5e2c" }}>Delhi Duty Free</h5>
                  </div>
                  <ul className="list-unstyled list-icon mt-3">
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Challenge: </span>{" "}
                      Website Traffic
                    </li>
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Solution: </span>{" "}
                      Website Development
                    </li>
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Results: </span>{" "}
                      Traffic increased by 30%
                      <span style={{ opacity: "0" }}>
                        Lorem, ipsum ipsum ipsum. Lorem, ipsum ipsum ipsum.
                        Lorem, ipsum ipsum ipsum. Lorem, ipsum ipsum ipsum.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
              <div className="post style-2">
                <div className="post-image">
                  <img
                    className="img-fluid h-100 w-100"
                    src="images/success-stories/tct.png"
                    alt="Success Stories 2"
                  />
                </div>
                <div className="post-desc">
                  <div className="post-title">
                    <h5 style={{ color: "#ff5e2c" }}>The Coding Trail</h5>
                  </div>
                  <ul className="list-unstyled list-icon mt-3">
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Challenge: </span>{" "}
                      Low Online Presence, Leads
                    </li>
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Solution: </span>{" "}
                      SMO, PPC Ads
                    </li>
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Results: </span> 70%
                      of increased Online presence and Generating Good Quality
                      Leads.{" "}
                      <span style={{ opacity: "0" }}>
                        Lorem, ipsum ipsum ipsum.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
              <div className="post style-2">
                <div className="post-image">
                  <img
                    className="img-fluid h-100 w-100"
                    src="images/success-stories/buildnetic.png"
                    alt="Success Stories 3"
                  />
                </div>
                <div className="post-desc">
                  <div className="post-title">
                    <h5 style={{ color: "#ff5e2c" }}>Buildnetic</h5>
                  </div>
                  <ul className="list-unstyled list-icon mt-3">
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Challenge: </span>{" "}
                      Website Traffic, Low Online Presence, Leads
                    </li>
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Solution: </span>{" "}
                      SEO, SMO, PPC Ads
                    </li>
                    <li className="mb-3">
                      <i className="flaticon-tick"></i>{" "}
                      <span style={{ fontWeight: "bold" }}>Results: </span>{" "}
                      Traffic increased by 50%, 60% of increased Online presence
                      and Generating Good Quality Leads.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* success stories end */}
    </>
  );
};

export default Landing;
