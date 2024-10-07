import React from "react";
import { Helmet } from "react-helmet-async";
import ContactBtnBanner from "../../components/ContactBtnBanner";
import ImgContent from "../../components/ImgContent";
import OneLiner from "../../components/OneLiner";
import ServicesLinkCarousel from "../../components/ServicesLinkCarousel";
import TitleSection from "../../components/Title";
import "./scrollBar.css";

const PPC = () => {
  // what is ppc start
  const whatIsPpc = {
    img: "../images/services/ppc/why-ppc.png",
    title: "Why PPC?",
    para: [
      `One of the most well-known types of digital marketing is pay-per-click advertising. However, the first query from companies that haven't used it is certainly, "Why is PPC important?"`,

      `But it's crucial to comprehend why PPC is crucial for online business growth before developing a PPC strategy or spending money on a full-fledged ad campaign. I'll explain why right now!`,

      `The key advantage of this marketing strategy is that it is regarded as one of the most effective types of web advertising. It is one of the most common forms of advertising and gives quick results and solid returns. Additionally, PPC visitors are far more likely to convert, which aids in increasing a company's presence on search engines like Google or Bing.`,
    ],
  };
  // what is ppc end

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Leading PPC Agency in USA, Canada & India | Expert Paid Ads Campaign
          Management
        </title>

        {/* Description */}
        <meta
          name="description"
          content="We are the top PPC agency in USA, Canada, and India. Our expert team specializes in Pay Per Click (PPC) advertising, ensuring strategic and impactful Paid Ads Campaign management. Drive targeted traffic and maximize ROI with our tailored solutions. Partner with Infy360 for unrivaled PPC expertise and results-driven digital marketing services."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="ppc search advertising, paid search marketing, paid ads campaign, google ppc management services, pay per click management agency"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Pay Per Click" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* what is ppc start */}
        <ImgContent
          img={whatIsPpc.img}
          title={whatIsPpc.title}
          para={whatIsPpc.para}
        />
        {/* what is ppc end */}

        {/* one liner start */}

        <OneLiner
          textBeforeHighlight="We are a "
          highlightText="Huge "
          textAfterHighlight="bang for one’s buck by helping you get into the game!!"
        />
        {/* one liner end */}

        {/* ppc services start */}
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
                    Our PPC Services
                  </h2>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/ppc/google-ad.png"
                    alt="Google Ads"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Google Ads </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Google Ads is an online advertising marketplace where
                    businesses can bid to have their films, service offers, or
                    brief commercials displayed to website visitors. Ads can be
                    placed on videos, non-search websites, mobile apps, and the
                    results pages of search engines like Google Search.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/ppc/fb-insta-ad.png"
                    alt="Facebook And Instagram Ads"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Facebook & Instagram Ads</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    You must also add Instagram to your Facebook page in order
                    to post advertisements on Instagram. Decide who to address.
                    Target a group of people that includes your connections,
                    newcomers with similar interests to your contacts, persons
                    with particular demographics, or site users. Decide on a
                    budget. Determine the budget for your advertisement.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/ppc/linkedin-ad.png"
                    alt="Linkedin Ads"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">LinkedIn Ads</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    You must also add Instagram to your Facebook page in order
                    to post advertisements on Instagram. Decide who to address.
                    Target a group of people that includes your connections,
                    newcomers with similar interests to your contacts, persons
                    with particular demographics, or site users. Decide on a
                    budget. Determine the budget for your advertisement.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/ppc/microsoft-ad.png"
                    alt="Microsoft Ads"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Microsoft Ads</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    The second-place finisher, Microsoft Advertising (formerly
                    Bing Ads), has more than a billion monthly consumers.
                    Running ads on Microsoft Ads can assist businesses and
                    entrepreneurs in achieving and often even exceeding their
                    business objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/ppc/twitter-ad.png"
                    alt="Twitter Ads"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Twitter Ads</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    The best way to enhance an organic content strategy is with
                    Twitter ads. Your campaigns' promoted, compensated content
                    will appear as Promoted Ads and/or Follower Ads, all of
                    which will be shown to a large audience of your choosing for
                    greater exposure and visibility. It's easy to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/ppc/spotify-ad.png"
                    alt="Spotify Ads"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Spotify Ads</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    If you have audio collateral, such as radio ads, you can
                    supplement your existing marketing efforts and drive more
                    brand awareness with Spotify Ads on the world’s largest
                    music streaming platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/ppc/tiktok-ad.png"
                    alt="Tiktok Ads"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Tiktok Ads</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Utilize TikTok Ads to reach a highly active audience on the
                    rapidly expanding social media site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ppc services end */}

        {/* contact btn start */}
        <ContactBtnBanner fromSection="section - 1" />
        {/* contact btn end */}

        {/* standard ad process start */}
        <section className="light-bg position-relative text-center overflow-hidden">
          <div className="pattern-3">
            <img
              className="img-fluid rotateme"
              src="../images/pattern/03.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 mx-auto">
                <div className="section-title">
                  <h2 className="title">Our Standard Ad Process</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="featured-item style-3">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/ppc/ad-process-icon-1.png"
                      alt="Discovery"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Discovery</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Let's evaluate your messaging and talk about <br /> your
                      company's aims and objectives as we sit down.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                <div className="featured-item style-3">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/ppc/ad-process-icon-2.png"
                      alt="Keyword Research"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Keyword Research</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      We'll determine the ideal opportunity keywords for your
                      campaign through a cooperative research process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-5">
                <div className="featured-item style-3">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/ppc/ad-process-icon-3.png"
                      alt="Campaign Build"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Campaign Build</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      To lay a solid basis for performance, we will design a
                      robust architecture of campaigns, ad groups, and
                      advertising.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-5">
                <div className="featured-item style-3">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/ppc/ad-process-icon-4.png"
                      alt="Ad Creation"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Ad Creation</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      This is where the magic happens, whether it be our writing
                      appealing content or creating user engaging ad creative.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-5">
                <div className="featured-item style-3">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/ppc/ad-process-icon-5.png"
                      alt="Pixels & Tracking"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Pixels & Tracking</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      With precise measurement, we can identify what is most
                      effective. It is clear to us what is effective. When
                      everything is thriving, we can scale in the strong areas
                      and network campaigns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-5">
                <div className="featured-item style-3">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/ppc/ad-process-icon-6.png"
                      alt="Proactive Statergy"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Proactive Statergy</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Our paid advertising team will <br /> continuously plan to
                      make sure <br /> you are seeing <br /> results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* standard ad process end */}

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

export default PPC;
