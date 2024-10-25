import React from "react";
import { Helmet } from "react-helmet-async";
import ContactBtnBanner from "../../components/ContactBtnBanner";
import ContentImg from "../../components/ContentImg";
import GetFreeSiteAudit from "../../components/GetFreeSiteAudit";
import ImgContent from "../../components/ImgContent";
import OneLiner from "../../components/OneLiner";
import ServicesLinkCarousel from "../../components/ServicesLinkCarousel";
import TitleSection from "../../components/Title";
import "./scrollBar.css";
import StickyViewSeoPackageBtn from "../../components/StickyViewSeoPackageBtn";

const SearchEngineOptmization = () => {
  // what is seo start
  const whatIsSeo = {
    img: "../images/services/seo/whatIsSeo.png",
    title: "What is SEO?",
    para: [
      `SEO or Search Engine Optimization means, making your website more visible on a Search Engine Results Page (SERP). According to the latest figures, around 3.5 billion searches happen per day! With such a high volume of searches, SEO is
      definitely an important ingredient for making a perfect website!!`,

      `A great SEO strategy will result in making the company’s website at the top of the Google search page, therefore increasing the engagement of the viewers. But does your SEO strategy really help your business get organically ranked?`,
      `But does your SEO strategy really help your business get organically ranked?`,
    ],
  };
  // what is seo end

  // how does seo works start
  const howDoesSeoWorks = {
    img: "../images/services/seo/howDoesSeoWork.png",
    title: "How does SEO work?",
    para: [
      `SEO is a customized long-term strategy that is aimed at giving your business an edge over the competition. SEO focuses on the ranking and visibility of your business. It virtually helps you position your brand on the digital horizon and make it more visible in terms of engagement. It works by optimizing the website’s content, conducting keyword research, and in turn increasing the customer’s engagement on the website.`,

      `Search engines have a single goal which is to provide the most relevant page results to their users. The SEO algorithm chooses pages that are most relevant to the user’s query. Pages are ranked depending on the relevance of keywords. This makes it an important point to choose your keywords wisely.`,

      `Search engines have a single goal which is to provide the most relevant page results to their users. The SEO algorithm chooses pages that are most relevant to the user’s query. Pages are ranked depending on the relevance of keywords. This makes it an important point to choose your keywords wisely.`,

      `Besides these adding more optimized content, image filename, or improving links can increase your SEO ranking and search visibility.`,
    ],
    subPara: null,
  };
  // how does seo works end

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Brandnest: Leading SEO Agency in USA | Free SEO Audit in India
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Elevate your online presence with Brandnest, the top SEO agency in the USA. Get a free SEO site audit in India. Expert on-page and technical SEO services in India for optimal search engine performance."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Best seo agency usa, search engine optimization agency usa, local seo Company usa, seo services usa, seo company usa"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Search Engine Optimization" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* get free site audit start */}
        <GetFreeSiteAudit />
        {/* get free site audit end */}

        {/* what is seo start */}
        <ImgContent
          img={whatIsSeo.img}
          title={whatIsSeo.title}
          para={whatIsSeo.para}
        />
        {/* what is seo end */}

        {/* how does seo works start */}
        <ContentImg
          img={howDoesSeoWorks.img}
          title={howDoesSeoWorks.title}
          para={howDoesSeoWorks.para}
          subPara={howDoesSeoWorks.subPara}
        />
        {/* how does seo works end */}

        {/* one liner start */}
        <OneLiner
          textBeforeHighlight="Want to rank higher in search results? Let’s talk about your "
          highlightText="SEO "
          textAfterHighlight="with our experts!"
        />
        {/* one liner end */}

        {/* How Are We Different? start */}
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
                  <h2 className="title">How are we different?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/dataDrivenIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Data Driven</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      We believe in figures! We are determined to increase your
                      organic search leads by a visible number, position your
                      brand in this digital era, influence the customer’s buying
                      behavior, encourage autonomous buying processes, and
                      increase your local traffic, which will in turn increase
                      the graph of your visibility and engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mt-3 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/resultOrientedIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Result Oriented</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Our SEO specialists search for high-demand,
                      low-competition keywords that will allow customers to
                      easily spot your service. We create backlinks to valuable
                      websites to improve link authority and diversity which in
                      turn will increase your ranking in Google search results.
                      We serve by going the extra mile and providing local SEO
                      services as well. These services are committed to
                      location-specific target groups.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/industryExpertIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Industry Experts</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      We are a team of professionals aimed at improving your
                      visibility and engagement online. The Brandnest experts
                      are trained to save your time and help you compete with
                      large and more established corporations. They plan the
                      customized roadmap after analyzing key metrics such as
                      bounce rate, page views, outbound, backlinks, and much
                      more. Whether it’s an on-page SEO or off-page support our
                      SEO specialists just know how to get your content on top.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How Are We Different? end */}

        {/* contact btn start */}
        <ContactBtnBanner fromSection="section - 1" />
        {/* contact btn end */}

        {/* Our Standard SEO Process start */}
        <section
          className="light-bg animatedBackground"
          data-bg-img="images/pattern/05.png"
          style={{
            backgroundImage: 'url("../images/pattern/05.png")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">Our Standard SEO process</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="tab style-2 ">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-link active five-tabs"
                        id="nav-tab1"
                        data-bs-toggle="tab"
                        href="#tab1-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Discovery
                      </a>
                      <a
                        className="nav-link five-tabs"
                        id="nav-tab2"
                        data-bs-toggle="tab"
                        href="#tab1-2"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Custom SEO Strategy
                      </a>
                      <a
                        className="nav-link five-tabs"
                        id="nav-tab3"
                        data-bs-toggle="tab"
                        href="#tab1-3"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Competitive Analysis
                      </a>
                      <a
                        className="nav-link five-tabs"
                        id="nav-tab4"
                        data-bs-toggle="tab"
                        href="#tab1-4"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Technical Optimization
                      </a>
                      <a
                        className="nav-link five-tabs"
                        id="nav-tab5"
                        data-bs-toggle="tab"
                        href="#tab1-5"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Content Development
                      </a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="tab1-1"
                      aria-labelledby="#nav-tab1"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="../images/services/seo/discovery.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">Discovery</h4>
                          <p>
                            Examining your current status and business goals.
                            Highlighting the area that needs assistance to set
                            up a market value.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="tab1-2"
                      aria-labelledby="#nav-tab2"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="../images/services/seo/customSeoStrategy.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">Custom SEO Strategy</h4>
                          <p>
                            Building on the complete strategy from keywords
                            research, content alignment, creating backlinks, and
                            much more to getting your website ranked on the top
                            in the results page. Yes, we strategize everything.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="tab1-3"
                      aria-labelledby="#nav-tab3"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="../images/services/seo/competitiveAnalysis.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">Competitive Analysis</h4>
                          <p>
                            Our experts do a detailed survey of your
                            competitor's position, customers' queries, and the
                            present demand in the market.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="tab1-4"
                      aria-labelledby="#nav-tab4"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="../images/services/seo/technicalOptimization.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">Technical Optimization</h4>
                          <p>
                            Our team is aimed to give you an optimized solution
                            that will lead to the visibility and ranking of your
                            business.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="tab1-5"
                      aria-labelledby="#nav-tab4"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="../images/services/seo/contentDevelopment.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">Content Development</h4>
                          <p>
                            Contents play a vital role in SEO. So, whether it’s
                            an on-page SEO or off-page, we are determined to
                            increase your ranking organically.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Standard SEO Process end */}

        {/* checkout SEO packages start */}
        {/* <section
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
                          Chekout Our SEO Packages
                        </h4>
                        <div className="subscribe-form sm-mt-2">
                          <a
                            href="/seo-packages"
                            className="btn btn-theme btn-radius"
                            style={{ width: "100%" }}
                          >
                            <span>View Packages</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* checkout SEO packages end */}

        {/* 3 block start */}
        <section className="light-bg position-relative text-center mb-5 overflow-hidden">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8 col-md-12">
              <div className="section-title mb-0">
                <h2 className="title">We provide assistance in</h2>
              </div>
            </div>
          </div>
          <div className="pattern-3">
            <img
              className="img-fluid rotateme"
              src="../images/pattern/03.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 block-1">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoConsultingIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>SEO Consulting</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      We recognize that you may have your SEO team. So breaking
                      it simply, an SEO consultant works with your team to
                      provide SEO strategy and ideas for both on-page strategy
                      and off-page. An SEO consultant helps you improve your
                      business by increasing your website ranking in search
                      engine results. The main objective of an SEO consultant is
                      to make it easier for your potential clients to find you
                      in this competitive world. <br /> SEO consultants help you
                      grow your business in terms of revenue. The consultant's
                      guide in all spheres from increasing organic traffic,
                      generating leads, and turning them into paying and loyal
                      customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mt-3 block-1">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoOptimizationIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>SEO Optimization</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Although keywords are an important part of SEO it is wrong
                      to say that keywords are the only element for a successful
                      SEO campaign. SEO optimization also includes links,
                      titles, meta descriptions, headings, subheadings, images,
                      videos, originality of content, and everything in between.
                      SEO success depends on the complete content as a whole.{" "}
                      <br /> Besides these, there are additional SEO tools and
                      services like Google Analytics, Google AdWords, Google
                      Site Map, Google Page Speed, and much more that will boost
                      your digital marketing. <br /> Overusing keywords,
                      creating abstract headings, or adding absurd images can be
                      more detrimental than beneficial for your SEO campaign.
                      Content should always be concentric and short keeping in
                      mind your main customer spectrum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3 block-1">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoAuditIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>SEO Audit</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      SEO Audit is a way to check if your website is still fit
                      for the digital race. Audits are primarily important
                      because digital marketing changes its algorithm very
                      frequently. Audits help you figure out whether the usage
                      of the keywords is still useful, whether you are doing
                      well in organic searches, and do you still need paid
                      advertising. They also check your meta tags and links.
                      They also analyze the market trend and suggest means to
                      keep up with the SEO campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3 block end */}

        {/* 9 block start */}
        <section
          data-bg-img="images/pattern/02.png"
          style={{
            backgroundImage: 'url("../images/pattern/02.png")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">Boost your internet visibility</h2>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{ maxWidth: "1080px", margin: "0 auto" }}
            >
              <div className="col-lg-4 col-md-12 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/websiteAuditIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Website Audit </h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Every effective audit starts with a comprehensive website
                      analysis. Website audits are enough to bring to light your
                      major issues like on-page errors, duplicate content,
                      meta-data error, broken lines, page titles, or any other
                      significant issues that might stop you from leading the
                      globe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/keywordResearchIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Keyword Research</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Keyword research is one of the most important algorithms
                      to keep up with. Keyword research is the process of
                      selecting and analyzing the terms that most users enter
                      and look for. This research can unfold popular queries,
                      ranking difficulty, and more. Having said this, it brings
                      to an important point that keyword research results in
                      valuable insights into what your target audience is
                      actually searching for.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/enquiryFormIcon.png"
                      alt="Enquiry Form"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Enquiry Form</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      The inquiry form helps you keep track of all the queries
                      and messages. Besides, it also prevents spam mail. Above
                      all inquiry forms are the best ways to get in touch with
                      interested potential customers which will indirectly
                      generate more leads.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/localSeoIcon.png"
                      alt="Local Seo"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Local SEO</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      According to the latest figures around 46% of google
                      searches are looking for the nearest results which brings
                      me to my point that optimizing your business locally is
                      very essential. Local SEO promises the visibility of your
                      business on a local scale which in turn increases your
                      organic traffic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/nationalGlobalSeoIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>National & Global SEO</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      National & global SEO service experts are backed with
                      strategies to increase your search visibility globally,
                      outrank digital competitors and rule the SERP with
                      high-value keywords. As mentioned these help businesses
                      whose potential target customers are the multi-national
                      market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/onlineDirectoriesIcon.png"
                      alt="Online Directories"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Online Directories</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Online directories are just a list of sites and have a
                      minor impact on today’s marketing. Well, that’s true
                      online directories have a small impact on your rankings
                      just like any other sites that link to you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/linkBuildingIcon.png"
                      alt="Link Building"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Link Building</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Links continue to remain one of the important factors in
                      ranking that is used by other search engines. These search
                      engines like google gather new content through links. For
                      SEO, the sole purpose of link building is to increase
                      high-quality inbound links in order to increase ranking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/businessListingIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Business Listing</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Business listings play a vital role in brand building,
                      ranking, and ROI. For this reason, it is important to see
                      the big picture. The business listing also gives you
                      insight into your customer's perspective.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 mb-8 block-2">
                <div className="featured-item text-center style-2">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/contentMarketingIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Content Marketing</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Content marketing is the fuel for SEO. It focuses on
                      relevant content to drive profitable customers and
                      increase the graph of revenues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 9 block end */}

        {/* services links start */}
        <ServicesLinkCarousel />
        {/* services links end */}

        {/* contact btn start */}
        <ContactBtnBanner fromSection="section - 2" />
        {/* contact btn end */}
      </div>
      {/* page content end */}

      {/* <StickyViewSeoPackageBtn /> */}
    </>
  );
};

export default SearchEngineOptmization;
