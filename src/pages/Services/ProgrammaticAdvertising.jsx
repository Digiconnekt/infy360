import React from "react";
import { Helmet } from "react-helmet-async";
import ContactBtnBanner from "../../components/ContactBtnBanner";
import ContentImg from "../../components/ContentImg";
import ImgContent from "../../components/ImgContent";
import OneLiner from "../../components/OneLiner";
import ServicesLinkCarousel from "../../components/ServicesLinkCarousel";
import TitleSection from "../../components/Title";
import "./scrollBar.css";

const ProgrammaticAdvertising = () => {
  // Programmatic Advertising accelerates start
  const programmaticAdvertising = {
    img: "../images/services/programmatic-advertising/programmatic-advertising.png",
    title: "Programmatic Advertising accelerates your marketing",
    para: [
      `All big terms - RTB, DSP, SSP all clustered in one phrase. Is it difficult to understand? Or is it hectic to include their advantages in your marketing strategy? No worries, the team at Brandnest is always at your rescue.`,

      `Keeping it away from the formal definition, programmatic ad tech uses an algorithm to help you keep your ads in front of the right audience at the right time. Similarly, martech keeps you above the rat race in strategizing your campaigns.`,
    ],
  };
  // Programmatic Advertising accelerates end

  // So what is this big word start
  const soWhatIs = {
    img: "../images/services/programmatic-advertising/big-word.png",
    title: "So what is this big word - Programmatic Advertising?",
    para: [
      `Programmatic advertising basically is categorized into two categories - Ad tech and Mar tech. 
      Ad tech or advertising technology basically buys potential audiences instead of allotting time slots. This reaches the most crucial advantage that your ad gets the right customers at the right time.
      `,

      `Ad tech allows retargeting of customers as well. Besides, by taking the advantage of RTB or real-time bidding you can target an audience whose conversion rates are high.`,

      `Mar tech or marketing technology as the name suggests, assists the marketing team in improving the strategy. Marketing technology improves the ROI of your marketing inputs. These technologies include advertising through Google search ads and remarketing ads through Facebook. From content marketing to analytics it summarizes everything. Besides, a great CRM will boost your conversion rates.`,
    ],
    subPara: null,
  };
  // So what is this big word end

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Top Programmatic Advertising Agency in USA & Canada | Brandnest
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Brandnest, a leading programmatic advertising service provider. Unlock targeted campaigns in the USA, Canada, and India. Optimize your reach with our expert programmatic solutions today."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="programmatic advertising company, programmatic advertising agency, programmatic marketing companies, ad tech agency, best adtech companies, marktech services "
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Programmatic Advertising" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* what is smo start */}
        <ImgContent
          img={programmaticAdvertising.img}
          title={programmaticAdvertising.title}
          para={programmaticAdvertising.para}
        />
        {/* what is smo end */}

        {/* how to do start */}
        <ContentImg
          img={soWhatIs.img}
          title={soWhatIs.title}
          para={soWhatIs.para}
          subPara={soWhatIs.subPara}
        />
        {/* how to do end */}

        {/* one liner start */}
        <OneLiner
          textBeforeHighlight="Boost your "
          highlightText="ROI "
          textAfterHighlight="with just the right advertising."
        />
        {/* one liner end */}

        {/* How Can We Improve Advertising? start */}
        <section
          className="overflow-hidden light-bg animatedBackground"
          data-bg-img="../images/pattern/05.png"
          style={{
            backgroundImage: 'url("../images/pattern/05.png")',
          }}
        >
          <div className="container" style={{ maxWidth: "1080px" }}>
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title" style={{ color: "#ff7810" }}>
                    How can we improve your advertising?
                  </h2>
                  <p className="mb-0">
                    We combine unrivaled services with the latest technologies
                    to improve your ROI, data analysis, campaign performance,
                    and strategies. We aim to take your data next level through
                    figures, innovation, and transparent partnership.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/programmatic-advertising/improve-ad-1.png"
                    alt="Improve Ad"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We understand the need to discover ways to differentiate
                    your business from the competition in a world where
                    customers have a variety of options.
                  </p>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We better understand your business and clients and give them
                    a personalized customer experience by collecting and
                    leveraging zero-party data.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/programmatic-advertising/improve-ad-2.png"
                    alt="Improve Ad"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We make sure you're promoting on the appropriate platforms
                    if you want to stay competitive.
                  </p>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We keep an eye on the most recent trends and make sure
                    you're active on the social media sites used by your target
                    market.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/programmatic-advertising/improve-ad-3.png"
                    alt="Improve Ad"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    It is predicted that video traffic would account for 80% of
                    all internet traffic by 2023. Keeping this in mind it should
                    come as no surprise that we will prioritize video content
                    for your business. We provide content to trends everything
                    under one scope!
                  </p>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We provide content to trends everything under one scope!
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/programmatic-advertising/improve-ad-4.png"
                    alt="Improve Ad"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We use AI technologies to help improve ad campaigns’
                    efficiency, reducing the cost of advertising for your
                    business. We focus on personalizing the user experience and
                    tracking engagement to improve your AdTech.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/programmatic-advertising/improve-ad-5.png"
                    alt="Improve Ad"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We also provide real-time insights that will help you make
                    better decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How Can We Improve Advertising? end */}

        {/* services links start */}
        <ServicesLinkCarousel />
        {/* services links end */}

        {/* contact btn start */}
        <ContactBtnBanner fromSection="section - 1" />
        {/* contact btn end */}
      </div>
      {/* page content end */}
    </>
  );
};

export default ProgrammaticAdvertising;
