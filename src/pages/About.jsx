import React from "react";
import { Helmet } from "react-helmet-async";
import TitleSection from "../components/Title";

const About = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Infy360: Leading Online Advertising Company USA</title>

        {/* Description */}
        <meta
          name="description"
          content="Discover Infy360, a top-tier online advertising company in the USA offering unparalleled digital marketing services in India. Elevate your brand presence and drive success with our innovative solutions."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="marketing agency usa, digital advertising services, online advertising companies usa, digital agencies usa"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="About Us" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* about us start */}
        <section
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(../images/pattern/02.png)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/about/aboutUs1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/about/aboutUs2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mTop">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/about/aboutUs3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/about/aboutUs4.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-3">
                  <h6>About Us</h6>
                </div>
                <p className="text-black">
                  Infy360 is an experienced digital marketing company with
                  headquarters in India. Our primary focus is to provide highly
                  efficient designs and functional user interfaces, integrating
                  the latest technologies and frameworks to deliver innovation
                  and end-user delight.
                </p>
                <p className="text-black">
                  We boost your digital space with the latest technology by
                  deeply analyzing the latest tool and technology, the demand of
                  the market, and generating results accordingly.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* about us end */}

        {/* how it works start */}
        <section className="text-center overflow-hidden">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6 col-md-10">
                <div className="section-title">
                  <h2 className="title">How It Work</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="work-process">
                  <div className="work-process-inner">
                    <div className="work-img">
                      <img
                        className="img-fluid"
                        src="./images/about/analyzeIcon.png"
                        alt=""
                      />
                      <span className="step-num">01</span>
                    </div>
                    <h4>Analyze</h4>
                    <p className="mb-0">
                      Doing good R&D on market trends, and customers' needs and
                      finding solutions to increase the ROI.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="work-process">
                  <div className="work-process-inner">
                    <div className="work-img">
                      <img
                        className="img-fluid"
                        src="images/how-it-work/02.png"
                        alt=""
                      />
                      <span className="step-num">02</span>
                    </div>
                    <h4>Advertise</h4>
                    <p className="mb-0">
                      We understand the importance of correct advertising. Our
                      team of professionals works intensely on advertising
                      forums to drive the desired results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="work-process">
                  <div className="work-process-inner">
                    <div className="work-img">
                      <img
                        className="img-fluid"
                        src="./images/about/optimizeIcon.png"
                        alt=""
                      />
                      <span className="step-num">03</span>
                    </div>
                    <h4>Optimize</h4>
                    <p className="mb-0">
                      Optimization according to your needs. From SEO to content
                      optimization we structure every sphere that suits your
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* how it works end */}

        {/* one liner start */}
        <section
          className="overflow-hidden dark-bg animatedBackground pt-5 pb-3 px-2"
          data-bg-img="../images/pattern/06.png"
          style={{
            backgroundImage: 'url("../images/pattern/06.png")',
          }}
        >
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-12">
              <div className="section-title mb-0">
                <h2 className="title oneLiner">
                  <span>Think </span>
                  with Infy360 <br />
                  <span>Grow </span>
                  with Infy360
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* one liner end */}

        {/* what we do start */}
        <section className="overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/about/whatWeDo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">What we do</h2>
                  <p className="text-black" style={{ textAlign: "justify" }}>
                    We leverage secure & scalable solutions with the integration
                    of technologies to develop solutions to translate your
                    visionary ideas into reality. This approach is used across
                    all the digital marketing spheres from Search Engine
                    Optimization to Search Engine Marketing.
                  </p>
                  <p className="text-black" style={{ textAlign: "justify" }}>
                    Some of our highlighted methodologies for personalized
                    marketing include Google Analytics for analyzing growth and
                    engagement, marketing automation inculcating Smart Bidding,
                    improving CRM, AI tools for improving website content, and
                    much more.
                  </p>
                  <p className="text-black" style={{ textAlign: "justify" }}>
                    Infy360 comes as a potent for your digitalization, from
                    transforming your visualization to real business innovation
                    and maximizing your ROI. We are ready to serve you with our
                    proficiency!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* what we do end */}

        {/* why choose start */}
        <section className="overflow-hidden whyChooseUs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/about/whyUs.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Why Choose Us </h2>
                  <p className="text-black" style={{ textAlign: "justify" }}>
                    Our proficiency brings in brand development, analytics, and
                    consulting experience that enables you to understand client
                    needs and design robust systems, and user-friendly solutions
                    in an efficient way. We align to be a part of your journey
                    to translate your visionary ideas into user-centric
                    solutions.
                  </p>
                  <p className="text-black" style={{ textAlign: "justify" }}>
                    We aim to expand your brand name across dimensions, increase
                    client engagement, and maximize ROI by leveraging existing
                    approaches and integrating new technologies to drive digital
                    excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why choose end */}

        {/* services we provide start */}
        <section
          className="bg-contain bg-pos-r p-0 mt-10 mb-10"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(../images/pattern/02.png)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="section-title mb-0">
                  <h6>Services</h6>
                  <h2 className="title">Services we provide</h2>
                  <p className="mb-0">
                    Our services act as the fuel for the growth of your
                    business. Your growth is our primary priority. All our
                    services are focused on precision targeting for desired
                    results. All our ads and content are tailored for your
                    business to set a great impression of your brand.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                <a href="/services/search-engine-optimization">
                  <div className="featured-item text-center">
                    <div className="featured-icon" style={{ maxWidth: "80px" }}>
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
                        organic search leads by a noticeable amount, positioning
                        your company in the digital age, influencing consumer
                        behavior, promoting autonomous purchasing, and boosting
                        local traffic, all of which will improve the graph of
                        your visibility and engagement.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                <a href="/services/social-media-optimization">
                  <div className="featured-item text-center">
                    <div className="featured-icon" style={{ maxWidth: "80px" }}>
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
                        filters the flaws in your content. Once your content is
                        ready set up your social media pages, find inspiration,
                        and improve your profile. Bingo, get started, create
                        content, be consistent and see your engagement rate
                        increase!
                        <span style={{ opacity: "0" }}>
                          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <a href="/services/email-marketing">
                  <div className="featured-item text-center">
                    <div className="featured-icon" style={{ maxWidth: "80px" }}>
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
                        initiatives at Infy360 is the bulk email service. By
                        dividing your customers into distinct categories and
                        identifying their demands, we can manage your customers
                        more effectively and raise your conversion rates. By
                        sending emails at the ideal time, our AI-powered
                        technologies improve your engagement graph.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <a href="/services/content-marketing">
                  <div className="featured-item text-center">
                    <div className="featured-icon" style={{ maxWidth: "80px" }}>
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
                        continue to rank highly in Google search results thanks
                        to our expertly crafted content that is SEO-aligned and
                        drives organic traffic.
                        <span style={{ opacity: "0" }}>
                          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                          Lorem ipsum dolor sit amet.
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <a href="/services/lead-generation">
                  <div className="featured-item text-center">
                    <div className="featured-icon" style={{ maxWidth: "80px" }}>
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
                        We review data three times per week and feed the results
                        back to our internal campaigns to revise our plans in
                        order to optimise for highly profitable and high
                        set-rate campaigns. We track and enhance the success of
                        your marketing initiatives using solid statistics. We
                        are aware of your most profitable Zips, counties, and
                        cities before you are.
                        <span style={{ opacity: "0" }}>
                          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* services we provide end */}

        {/* clients start */}
        <section className="light-bg">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Clients</h6>
                  <h2 className="title">Our Clients</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="ht-clients d-flex flex-wrap align-items-center text-center">
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/m-and-s.png"
                      alt="M and S"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/acuver.png"
                      alt="Acuver"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/car-dekho.png"
                      alt="Car Dekho"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/design-pax.png"
                      alt="Design Pax"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/dream-webies.png"
                      alt="Dream Webies"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/epam.png"
                      alt="Epam"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/life-trail.png"
                      alt="Life Trail"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/listed.png"
                      alt="Listed"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/m-and-s.png"
                      alt="M And S"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/marsh-mc-lennan.png"
                      alt="Marsh Mc Lennan"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/metamore.png"
                      alt="Metamore"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/startup-buddy.png"
                      alt="Startup Buddy"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/buildnetic.png"
                      alt="Buildnetic"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/air-tour-australia.png"
                      alt="Air Tour Australia"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/the-coding-trail.png"
                      alt="The Coding Trail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* clients end */}

        {/* contact btn start */}
        {/* <section
          className="overflow-hidden dark-bg animatedBackground mb-10 mt-5"
          data-bg-img="../images/pattern/06.png"
          style={{
            backgroundImage: 'url("../images/pattern/06.png")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <div className="row">
                    <div className="col-lg-11 col-md-12 me-auto">
                      <div className="align-items-center white-bg box-shadow px-3 py-3 radius d-md-flex justify-content-between">
                        <h4 className="mb-0">Let's Discuss</h4>
                        <div className="subscribe-form sm-mt-2">
                          <form id="mc-form" className="group">
                            <input
                              type="email"
                              name="EMAIL"
                              className="email"
                              id="mc-email"
                              placeholder="Email Address"
                              required
                            />
                            <input
                              className="btn btn-theme"
                              type="submit"
                              name="subscribe"
                              value="Subscribe"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* contact btn end */}

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
                      02 <span>January 2023</span>
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
                      09 <span>January 2023</span>
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
                      11 <span>January 2023</span>
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
      </div>
      {/* page content end */}
    </>
  );
};

export default About;
