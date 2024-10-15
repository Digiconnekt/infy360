import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import { blogsData } from "./BlogsData";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Brandnest: Leading Digital Marketing Agency in USA & India
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Brandnest is a top-rated digital marketing agency providing internet marketing services in India and the USA. Contact us for effective digital solutions."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="digital marketing services usa, performance marketing agency usa, internet marketing agency usa, digital marketing company usa, digital marketing agency usa"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* hero section start */}
      <HeroSection />
      {/* hero section end */}

      <div className="page-content">
        {/* About us start */}
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="round-animation">
                  <div className="video-box">
                    <img
                      className="img-fluid"
                      src="images/home/aboutUs.png"
                      alt="About Us"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-0">
                  <h6>About Us</h6>
                </div>
                <p className="text-black">
                  Brandnest is an experienced digital marketing company with
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
                <a className="btn btn-theme" href="/about-us">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* About us end */}

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
                  <span>Brandnest, </span>a string of
                  <span> Solutions </span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* one liner end */}

        {/* how it works start */}
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
                  src="images/home/howItWork.png"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 col-md-12 me-auto mt-5 mt-lg-0"
                style={{ margin: "0 auto" }}
              >
                <div className="section-title">
                  <h6>How It Works</h6>
                  <p style={{ fontWeight: "600" }}>
                    We address the need for digital literacy in this era.
                    Therefore, our team of experts helps you with your raw idea
                    blending them with the latest technologies and producing
                    result-oriented outputs
                  </p>
                  <p className="text-black">
                    We primarily focus on the following three steps:
                  </p>
                </div>
                <div className="work-process style-2">
                  <div className="work-process-inner">
                    <span className="step-num" data-bg-color="#ff7810">
                      01
                    </span>
                    <h4>Analyze</h4>
                    <p className="mb-0">
                      Doing good R&D on market trends, and customers' needs and
                      finding solutions to increase the ROI.
                    </p>
                  </div>
                </div>
                <div className="work-process style-2 mt-5">
                  <div className="work-process-inner">
                    <span className="step-num" data-bg-color="#ff156a">
                      02
                    </span>
                    <h4>Advertise</h4>
                    <p className="mb-0">
                      We understand the importance of correct advertising. Our
                      team of professionals works intensely on advertising
                      forums to drive the desired results.
                    </p>
                  </div>
                </div>
                <div className="work-process style-2 mt-5">
                  <div className="work-process-inner">
                    <span className="step-num" data-bg-color="#ffb72f">
                      03
                    </span>
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

        {/* what we do start */}
        <section className="light-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/home/whatWeDo1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/home/whatWeDo2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mTop">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/home/whatWeDo3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/home/whatWeDo4.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title">
                  <h6>What</h6>
                  <h2 className="title">What We Do</h2>
                </div>
                <p className="text-black">
                  We leverage secure & scalable solutions with the integration
                  of technologies to develop solutions to translate your
                  visionary ideas into reality.
                </p>
                <p className="text-black">
                  This approach is used across all the digital marketing spheres
                  from Search Engine Optimization to Search Engine Marketing.
                  Some of our highlighted methodologies for personalized
                  marketing include Google Analytics for analyzing growth and
                  engagement, marketing automation inculcating Smart Bidding,
                  improving CRM, AI tools for improving website content, and
                  much more.
                </p>
                <p className="text-black">
                  Brandnest comes as a potent for your digitalization, from
                  transforming your visualization to real business innovation
                  and maximizing your ROI. We are ready to serve you with our
                  proficiency!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* what we do end */}

        {/* why choose us start */}
        <section className="light-bg whyChooseUs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mt-lg-0">
                <div className="row">
                  <div className="col-md-6">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/home/whyChooseUs1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/home/whyChooseUs2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mTop">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/home/whyChooseUs3.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/home/whyChooseUs4.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 order-lg-1">
                <div className="section-title">
                  <h6>Why</h6>
                  <h2 className="title">Why Choose Us</h2>
                </div>
                <p className="text-black">
                  Our proficiency brings in brand development, analytics, and
                  consulting experience that enables you to understand client
                  needs and design robust systems, and user-friendly solutions
                  in an efficient way.
                </p>
                <p className="text-black">
                  We align to be a part of your journey to translate your
                  visionary ideas into user-centric solutions. We aim to expand
                  your brand name across dimensions, increase client engagement,
                  and maximize ROI by leveraging existing approaches and
                  integrating new technologies to drive digital excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* why choose us end */}

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
                          amet.
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
                        initiatives at Brandnest is the bulk email service. By
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

        {/* testimonial start */}
        <section
          className="bg-contain bg-pos-r pt-0"
          data-bg-img="images/bg/02.png"
          style={{ backgroundImage: "url(images/bg/02.png)" }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Testimonial</h6>
                  <h2 className="title">
                    You Can See our clients feedback What You Say?
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="owl-carousel owl-loaded owl-drag"
                  data-items="1"
                  data-autoplay="true"
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 1s ease 0s",
                        width: "9072px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "1296px" }}
                      >
                        <div className="item">
                          <div className="testimonial style-2">
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-12">
                                <div className="testimonial-img info-img round-animation">
                                  <img
                                    className="img-fluid leftRight"
                                    src="images/home/testimonial/milind.png"
                                    alt="Milind Srivastava"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                                <div className="testimonial-content">
                                  <div className="testimonial-quote">
                                    <i className="flaticon-quotation"></i>
                                  </div>
                                  <p>
                                    Brandnest's digital marketing services have
                                    helped take our online presence to new
                                    heights. Their team is highly skilled and
                                    dedicated, constantly striving to improve
                                    our ROI and drive more sales.
                                  </p>
                                  <p>
                                    I highly recommend Brandnest to any business
                                    looking for top-notch digital marketing
                                    services.
                                  </p>
                                  <div className="testimonial-caption">
                                    <h5>Milind Srivastava</h5>
                                    <label>Senior Manager, Wise</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "1296px" }}
                      >
                        <div className="item">
                          <div className="testimonial style-2">
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-12">
                                <div className="testimonial-img info-img round-animation">
                                  <img
                                    className="img-fluid leftRight"
                                    src="images/home/testimonial/sunny.png"
                                    alt="Sunny Nandwani"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                                <div className="testimonial-content">
                                  <div className="testimonial-quote">
                                    <i className="flaticon-quotation"></i>
                                  </div>
                                  <p>
                                    I have been extremely impressed with the
                                    digital marketing services provided by
                                    Brandnest. Their team of experts helped to
                                    increase our online presence and drive more
                                    traffic to our website. Their strategies for
                                    SEO, PPC, and social media marketing were
                                    highly effective and resulted in a
                                    significant increase in conversions and
                                    sales.
                                  </p>
                                  <p>
                                    The team was also great at communicating
                                    with us and keeping us informed about the
                                    progress of our campaigns. I highly
                                    recommend Brandnest to anyone looking to
                                    improve their digital marketing efforts.
                                  </p>
                                  <div className="testimonial-caption">
                                    <h5>Sunny Nandwani</h5>
                                    <label>Founder, Acuver</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "1296px" }}
                      >
                        <div className="item">
                          <div className="testimonial style-2">
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-12">
                                <div className="testimonial-img info-img round-animation">
                                  <img
                                    className="img-fluid leftRight"
                                    src="images/home/testimonial/stuti.png"
                                    alt="Stuti Shukla"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                                <div className="testimonial-content">
                                  <div className="testimonial-quote">
                                    <i className="flaticon-quotation"></i>
                                  </div>
                                  <p>
                                    Brandnest's digital marketing services have
                                    been a game-changer for my business. Their
                                    team is extremely knowledgeable and helped
                                    me to increase my online visibility and
                                    customer engagement. I highly recommend
                                    their services to any business looking to
                                    grow their online presence.
                                  </p>
                                  <div className="testimonial-caption">
                                    <h5>Stuti Shukla</h5>
                                    <label>Senior Manager, Family Movers</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="owl-item" style={{ width: "1296px" }}>
                        <div className="item">
                          <div className="testimonial style-2">
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-12">
                                <div className="testimonial-img info-img round-animation">
                                  <img
                                    className="img-fluid leftRight"
                                    src="images/testimonial/01.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                                <div className="testimonial-content">
                                  <div className="testimonial-quote">
                                    <i className="flaticon-quotation"></i>
                                  </div>
                                  <p>
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
                                  </p>
                                  <div className="testimonial-caption">
                                    <h5>Lana Roadse</h5>
                                    <label>CEO of Loptus</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "1296px" }}>
                        <div className="item">
                          <div className="testimonial style-2">
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-12">
                                <div className="testimonial-img info-img round-animation">
                                  <img
                                    className="img-fluid leftRight"
                                    src="images/testimonial/01.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                                <div className="testimonial-content">
                                  <div className="testimonial-quote">
                                    <i className="flaticon-quotation"></i>
                                  </div>
                                  <p>
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
                                  </p>
                                  <div className="testimonial-caption">
                                    <h5>Lana Roadse</h5>
                                    <label>CEO of Loptus</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "1296px" }}
                      >
                        <div className="item">
                          <div className="testimonial style-2">
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-12">
                                <div className="testimonial-img info-img round-animation">
                                  <img
                                    className="img-fluid leftRight"
                                    src="images/testimonial/01.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                                <div className="testimonial-content">
                                  <div className="testimonial-quote">
                                    <i className="flaticon-quotation"></i>
                                  </div>
                                  <p>
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
                                  </p>
                                  <div className="testimonial-caption">
                                    <h5>Lana Roadse</h5>
                                    <label>CEO of Loptus</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "1296px" }}
                      >
                        <div className="item">
                          <div className="testimonial style-2">
                            <div className="row align-items-center">
                              <div className="col-lg-6 col-md-12">
                                <div className="testimonial-img info-img round-animation">
                                  <img
                                    className="img-fluid leftRight"
                                    src="images/testimonial/01.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                                <div className="testimonial-content">
                                  <div className="testimonial-quote">
                                    <i className="flaticon-quotation"></i>
                                  </div>
                                  <p>
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
                                  </p>
                                  <div className="testimonial-caption">
                                    <h5>Lana Roadse</h5>
                                    <label>CEO of Loptus</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <span className="fas fa-long-arrow-alt-left">
                        <span></span>
                      </span>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <span className="fas fa-long-arrow-alt-right"></span>
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button
                      role="button"
                      className="owl-dot active"
                      fdprocessedid="5h5hln"
                    >
                      <span></span>
                    </button>
                    <button
                      role="button"
                      className="owl-dot"
                      fdprocessedid="y9g3d"
                    >
                      <span></span>
                    </button>
                    <button
                      role="button"
                      className="owl-dot"
                      fdprocessedid="tyvsbzj"
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial end */}

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
                      src="images/home/clients/nostra.svg"
                      alt="Nostra"
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/ek-katha.svg"
                      alt="Ek Katha"
                      style={{ maxWidth: "200px", height: "72px" }}
                    />
                  </div>
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
                      src="images/home/clients/oneretailworld.png"
                      alt="One Retail World"
                      style={{ maxWidth: "200px", height: "72px" }}
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/affinity.png"
                      alt="affinity"
                      style={{
                        maxWidth: "200px",
                        height: "72px",
                      }}
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
                      src="images/home/clients/glance.png"
                      alt="glance"
                      style={{ maxWidth: "200px", height: "72px" }}
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
                      src="images/home/clients/haleon.png"
                      alt="haleon"
                      style={{ maxWidth: "200px", height: "72px" }}
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
                      src="images/home/clients/healbox.png"
                      alt="Healbox"
                      style={{ maxWidth: "200px", height: "72px" }}
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
                      src="images/home/clients/himalaya-wellness.png"
                      alt="himalaya-wellness"
                      style={{ maxWidth: "200px", height: "72px" }}
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
                      src="images/home/clients/newgen.png"
                      alt="newgen"
                      style={{ maxWidth: "200px", height: "72px" }}
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/ooddles.png"
                      alt="ooddles"
                      style={{ maxWidth: "200px", height: "72px" }}
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/sleepwell.png"
                      alt="sleepwell"
                      style={{ maxWidth: "200px", height: "72px" }}
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/umar-ujala.png"
                      alt="umar-ujala"
                      style={{ maxWidth: "200px", height: "72px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* clients end */}

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
              {blogsData.slice(0, 3).map((blog, i) => (
                <div
                  className={`col-lg-4 col-md-12 ${i !== 0 && "mt-5 mt-lg-0"}`}
                  key={i}
                >
                  <div className="post style-2">
                    <div className="post-image">
                      <img
                        className="img-fluid h-100 w-100"
                        src={blog.img}
                        alt={blog.title}
                      />
                    </div>
                    <div className="post-desc">
                      <div className="post-date">
                        {blog.fullDate.date}{" "}
                        <span>{blog.fullDate.monthYr}</span>
                      </div>
                      <div className="post-title">
                        <h5>
                          <a href={`/blogs/${blog.path}`}>{blog.title}</a>
                        </h5>
                      </div>
                      <p>
                        {blog.content}
                        <a href={`/blogs/${blog.path}`}>read more</a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              
            </div>
          </div>
        </section> */}
        {/* blog end */}
      </div>

      <div
        className="visme_d"
        data-title="Free Site Audit Form"
        data-url="w46w3vp6-free-site-audit-form?fullPage=true"
        data-domain="forms"
        data-full-page="true"
        data-min-height="100vh"
        data-form-id="28986"
      ></div>
    </>
  );
};

export default Home;
