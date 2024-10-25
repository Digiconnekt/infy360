import React from "react";
import ContentImg from "../../components/ContentImg";
import ImgContent from "../../components/ImgContent";
import OneLiner from "../../components/OneLiner";
import TitleSection from "../../components/Title";
import ServicesLinkCarousel from "../../components/ServicesLinkCarousel";
import "./scrollBar.css";
import ContactBtnBanner from "../../components/ContactBtnBanner";
import { Helmet } from "react-helmet-async";

const Branding = () => {
  // What is branding? start
  const bulkEmailMarketing = {
    img: "../images/services/email-marketing/bulkEmailMarketing.png",
    title: `What is branding?`,
    para: [
      `Branding is psychology & science bought together.`,
      `Brands convey a uniform quality, credibility and experience.`,
      `Brands are valuable.`,
      `Many companies put the value of their brand on their balance sheet.`,
    ],
  };
  // What is branding? end

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Branding | Brandnest</title>

        {/* Description */}
        <meta name="description" content="Branding" />

        {/* Keywords */}
        <meta name="keywords" content="Branding" />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Branding" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* Bulk email marketing start */}
        <ImgContent
          img={bulkEmailMarketing.img}
          title={bulkEmailMarketing.title}
          para={bulkEmailMarketing.para}
        />
        {/* Bulk email marketing end */}

        <section class="overflow-hidden">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div class="section-title mb-4">
                  <h2 class="title">
                    BrandNest - Full-Service Branding Agency
                  </h2>
                  <p class="text-black" style={{ textAlign: "justify" }}>
                    Work with a top-rated branding agency to boost brand
                    awareness, create consistency across channels and reach your
                    audience through results-driven strategies and solutions.
                  </p>
                  <ul class="list-unstyled list-icon">
                    <li class="mb-3" style={{ textAlign: "justify" }}>
                      <i class="flaticon-tick"></i>
                      <span
                        style={{ color: "rgb(28, 32, 69)", fontWeight: "bold" }}
                      >
                        Boost Your Brand Awareness
                      </span>
                    </li>
                    <li class="mb-3" style={{ textAlign: "justify" }}>
                      <i class="flaticon-tick"></i>
                      <span
                        style={{ color: "rgb(28, 32, 69)", fontWeight: "bold" }}
                      >
                        Resonate With Your Audience
                      </span>
                    </li>
                    <li class="mb-3" style={{ textAlign: "justify" }}>
                      <i class="flaticon-tick"></i>
                      <span
                        style={{ color: "rgb(28, 32, 69)", fontWeight: "bold" }}
                      >
                        Build Trust & Credibility
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="info-img position-relative">
                  <img
                    class="img-fluid topBottom"
                    src="../images/services/email-marketing/bulkEmailMarketing.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <h2 className="text-center">
            Wondering, how to develop a Brand Strategy?
          </h2>
          <h3 className="text-center">
            Here is how the Integrated Brand Strategy Process works at
            BrandNest?
          </h3>
          <p class="text-black mt-5">
            <i>
              Our brand strategy process begins with a thorough analysis of your
              consumer, competitor and your organisational capabilities. We
              amalgamate the three to identify Brand value proposition that
              helps you be relevant and differentiated in the marketplace. Post
              that we help you build and communicate your Brand Story. Take
              advantage of one of the best branding companies in India.
            </i>
          </p>
          <p class="text-black">
            The digital world is in a state of constant flux. In this volatile
            space, you must build a strong and steady brand image which also
            remains fresh and dynamic. BrandNest as your branding agency starts
            by understanding the market and your customers and takes a holistic
            approach towards building your brand. Our marketing plans are
            cohesive, transparent and effective.
          </p>
          <p class="text-black">
            Building up brand equity is a long-term process, and requires
            careful planning. We understand your vision and lay out a blueprint
            for achieving it. Every decision and action you undertake must be
            integral to your core objectives. BrandNest knows that a
            well-defined brand strategy is the key to the growth of your
            company, and will affect all aspects of it. Our team will work
            closely with you so that we figure out the right ways to engage with
            your customers that will not only help you achieve your goals but
            also guarantee customer satisfaction.
          </p>
          <p class="text-black">
            With BrandNest’s brand architecture strategy; your sub-brands,
            products and services will be sorted out and positioned as they need
            to be. We help them grow individually but ensure they are all
            connected together so that they strengthen the core values of your
            company. We make sure that every part shines on its own, but fits in
            perfectly within the mosaic of your company to make a complete
            picture.
          </p>
        </section>

        {/* services links start */}
        <ServicesLinkCarousel />
        {/* services links end */}

        {/* contact btn start */}
        <ContactBtnBanner fromSection="section - 2" />
        {/* contact btn end */}
      </div>
      {/* page content end */}
    </>
  );
};

export default Branding;
