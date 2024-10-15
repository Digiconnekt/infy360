import React from "react";
import { Helmet } from "react-helmet-async";
import TitleSection from "../components/Title";

const Services = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Brandnest: Top Marketing Agency in USA & Digital Marketing in India
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Elevate your brand with Brandnest, a leading marketing agency in the USA. Transform your digital presence with our expert digital marketing services in India. Drive success with strategic solutions tailored to your business goals."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="digital marketing solutions usa, digital marketing service provider usa, internet marketing agency usa, digital marketing as a service"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Services" />
      {/* title section end */}

      <div className="page-content">
        {/* we provide services start */}
        <section
          className="overflow-hidden animatedBackground"
          data-bg-img="../images/pattern/02.png"
          style={{
            backgroundImage: 'url("../images/pattern/02.png")',
          }}
        >
          <div className="container" style={{ maxWidth: "1080px" }}>
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Service</h6>
                  <h2 className="title">We’r Providing Following Services!</h2>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/links-section/seo.png"
                    alt="Search Engine Optimization"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2>
                    <a href="/services/search-engine-optimization">
                      Search Engine Optimization
                    </a>
                  </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We trust statistics! We are committed to boosting your
                    organic search leads by a noticeable amount, positioning
                    your company in the digital age, influencing consumer
                    behavior, promoting autonomous purchasing, and boosting
                    local traffic, all of which will improve the graph of your
                    visibility and engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/links-section/smo.png"
                    alt="Social Media Optimization"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2>
                    <a href="/services/social-media-optimization">
                      Social Media Optimization
                    </a>
                  </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    After research doing a search audit is a must as it filters
                    the flaws in your content. Once your content is ready set up
                    your social media pages, find inspiration, and improve your
                    profile. Bingo, get started, create content, be consistent
                    and see your engagement rate increase!
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/links-section/emailMarketing.png"
                    alt="Email Marketing"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2>
                    <a href="/services/email-marketing">Email Marketing</a>
                  </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    A great tool for boosting your digital marketing initiatives
                    at Brandnest is the bulk email service. By dividing your
                    customers into distinct categories and identifying their
                    demands, we can manage your customers more effectively and
                    raise your conversion rates. By sending emails at the ideal
                    time, our AI-powered technologies improve your engagement
                    graph.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/links-section/contentMarketing.png"
                    alt="Content Marketing"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2>
                    <a href="/services/content-marketing">Content Marketing</a>
                  </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We look into the interests and demands of our target
                    audiences worldwide. The needs of your users are the main
                    priority for our content. Your website will continue to rank
                    highly in Google search results thanks to our expertly
                    crafted content that is SEO-aligned and drives organic
                    traffic.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/links-section/leadGeneration.png"
                    alt="Lead Generation"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2>
                    <a href="/services/lead-generation">Lead Generation</a>
                  </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We review data three times per week and feed the results
                    back to our internal campaigns to revise our plans in order
                    to optimise for highly profitable and high set-rate
                    campaigns. We track and enhance the success of your
                    marketing initiatives using solid statistics. We are aware
                    of your most profitable Zips, counties, and cities before
                    you are.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/links-section/programmaticAdvertising.png"
                    alt="Programmatic Advertising"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2>
                    <a href="/services/programmatic-advertising">
                      Programmatic Advertising
                    </a>
                  </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    In a market where clients have many options, we recognise
                    the necessity to find strategies to set your company apart
                    from the competitors. By gathering and utilising zero-party
                    data, we are better able to comprehend your customers and
                    organisation in order to provide them with a customised
                    customer experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/links-section/ppc.png"
                    alt="Pay Per Click"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2>
                    <a href="/services/ppc">Pay Per Click</a>
                  </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Through joint research, we'll choose the best opportunity
                    keywords for your campaign. We will create a robust
                    architecture of campaigns, ad groups, and advertising to
                    provide a strong foundation for performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* we provide services end */}

        {/* how it works end */}
        <section
          className="position-relative bg-contain bg-pos-r"
          data-bg-img="images/bg/02.png"
        >
          <div className="container-fluid px-lg-3 px-md-8 px-3">
            <div className="row align-items-center">
              <div
                className="col-lg-5 bg-contain bg-pos-l"
                data-bg-img="images/pattern/07.png"
              >
                <img
                  className="img-fluid"
                  src="../images/services/howItWork.png"
                  alt="How It Works"
                />
              </div>
              <div
                className="col-lg-6 col-md-12 me-auto mt-5 mt-lg-0"
                style={{ margin: "0 auto" }}
              >
                <div className="section-title">
                  <h6>How It Work</h6>
                  <h2 className="title">
                    Three Step For Started Working Process
                  </h2>
                </div>
                <div className="work-process style-2">
                  <div className="work-process-inner">
                    {" "}
                    <span className="step-num" data-bg-color="#ff7810">
                      01
                    </span>
                    <h4>Project Research</h4>
                    <p className="mb-0">
                      This step also includes an analysis of the company that
                      takes into account the sector and the competition. After
                      that, companies should develop a target vision of the
                      digital business model and prioritize digital issues based
                      on their own business and IT strategy. Determining the
                      level of digital maturity is an important part of this.
                    </p>
                  </div>
                </div>
                <div className="work-process style-2 mt-5">
                  <div className="work-process-inner">
                    {" "}
                    <span className="step-num" data-bg-color="#ff156a">
                      02
                    </span>
                    <h4>Operationalizing the digitalization strategy</h4>
                    <p className="mb-0">
                      It can then utilize the results to identify innovations,
                      such as new services, by using the know-how and expertise
                      it may need. Here, it's crucial to collaborate with middle
                      management, specialized departments, and IT in order to
                      take into consideration the requirements of all a
                      company's divisions and departments.
                    </p>
                  </div>
                </div>
                <div className="work-process style-2 mt-5">
                  <div className="work-process-inner">
                    {" "}
                    <span className="step-num" data-bg-color="#ffb72f">
                      03
                    </span>
                    <h4>Implementing the strategy</h4>
                    <p className="mb-0">
                      The final phase is to put the created strategy into action
                      based on this knowledge. The business may now create its
                      own digital strategy, portfolio, and priority-setting
                      framework. The business will then be in the midst of its
                      digital transformation after this phase is finished.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* how it works end */}

        {/* projects done start */}
        <section style={{ backgroundImage: "none" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-3 col-sm-6"
                style={{ backgroundImage: "none" }}
              >
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/01.png"
                    alt=""
                  />{" "}
                  <span
                    className="count-number"
                    data-to="2304"
                    data-speed="10000"
                  >
                    2304
                  </span>
                  <h5>Project Done</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-sm-0">
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/02.png"
                    alt=""
                  />{" "}
                  <span
                    className="count-number"
                    data-to="2304"
                    data-speed="10000"
                  >
                    2304
                  </span>
                  <h5>Success Rate</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-md-0">
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/03.png"
                    alt=""
                  />{" "}
                  <span
                    className="count-number"
                    data-to="2304"
                    data-speed="10000"
                  >
                    2304
                  </span>
                  <h5>Awards</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-md-0">
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/04.png"
                    alt=""
                  />{" "}
                  <span
                    className="count-number"
                    data-to="2304"
                    data-speed="10000"
                  >
                    2304
                  </span>
                  <h5>Happy Client</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* projects done end */}

        {/* <section
          className="overflow-hidden dark-bg custom-pb-18 animatedBackground"
          data-bg-img="images/pattern/06.png"
          style={{ backgroundImage: "url(images/pattern/06.png)" }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h6>SUCCESS STORIES</h6>
                  <h2 className="title">Our Case Study</h2>
                  <p className="mb-0 text-white">
                    Deos et accusamus et iusto odio dignissimos qui blanditiis
                    praesentium voluptatum dele corrupti quos dolores et quas
                    molestias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* blog start */}
        {/* <section>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Blog's</h6>
                  <h2 className="title">Read our latest news</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="post style-2">
                  <div className="post-image">
                    <img
                      className="img-fluid h-100 w-100"
                      src="images/blog/blog1.png"
                      alt="Blog 1"
                    />
                  </div>
                  <div className="post-desc">
                    <div className="post-date">
                      23 <span>November 2018</span>
                    </div>
                    <div className="post-title">
                      <h5>
                        <a href="/blogs/blog1">
                          The role of SEO in modern digital marketing strategies
                        </a>
                      </h5>
                    </div>
                    <p>
                      In today's digital landscape, search engine optimization
                      (SEO) is more important than ever for businesses looking
                      to reach their target audience...{" "}
                      <a href="/blogs/blog1">read more</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="post style-2">
                  <div className="post-image">
                    <img
                      className="img-fluid h-100 w-100"
                      src="images/blog/blog2.png"
                      alt="Blog 2"
                    />
                  </div>
                  <div className="post-desc">
                    <div className="post-date">
                      23 <span>November 2018</span>
                    </div>
                    <div className="post-title">
                      <h5>
                        <a href="/blogs/blog2">
                          10 Tips for Optimizing Your Social Media Presence
                        </a>
                      </h5>
                    </div>
                    <p>
                      Social media is an essential part of any modern marketing
                      strategy, but with so many platforms to choose from and an
                      ever-evolving set of best practices...{" "}
                      <a href="/blogs/blog2">read more</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="post style-2">
                  <div className="post-image">
                    <img
                      className="img-fluid h-100 w-100"
                      src="images/blog/blog3.png"
                      alt="Blog 3"
                    />
                  </div>
                  <div className="post-desc">
                    <div className="post-date">
                      23 <span>November 2018</span>
                    </div>
                    <div className="post-title">
                      <h5>
                        <a href="/blogs/blog3">
                          Advanced PPC Techniques: Taking Your Campaigns to the
                          Next Level
                        </a>
                      </h5>
                    </div>
                    <p>
                      Pay-per-click (PPC) advertising is an effective way for
                      businesses of all sizes to reach their target audience
                      and... <a href="/blogs/blog3">read more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* blog end */}

        {/* services links start */}
        {/* <ServicesLinkCarousel /> */}
        {/* services links end */}
      </div>
    </>
  );
};

export default Services;
