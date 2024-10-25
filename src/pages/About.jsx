import React from "react";
import { Helmet } from "react-helmet-async";
import TitleSection from "../components/Title";

const About = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Brandnest: Leading Online Advertising Company USA</title>

        {/* Description */}
        <meta
          name="description"
          content="Discover Brandnest, a top-tier online advertising company in the USA offering unparalleled digital marketing services in India. Elevate your brand presence and drive success with our innovative solutions."
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
                  Brandnest is an experienced digital marketing company
                  headquartered in India. We focus on providing highly efficient
                  designs and functional user interfaces, integrating the latest
                  technologies and frameworks to deliver innovation and delight
                  to end users.
                </p>
                <p className="text-black">
                  We boost your digital space with the latest technology by
                  deeply analyzing the latest tools and technologies, the
                  demands of the market, and generating results accordingly.
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
                  <h2 className="title">How It Works</h2>
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
                      Doing in-depth research on market trends, and customer
                      needs and find solutions to address the underlying issues.
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
                      We understand the importance of advertising. Our team of
                      professionals will guide you with the best plan of
                      execution to drive the desired results.
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
                  with Brandnest <br />
                  <span>Grow </span>
                  with Brandnest
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
                    of technologies to develop solutions that translate your
                    visionary ideas into reality. This approach is used across
                    all the digital marketing from Search Engine Optimization to
                    Search Engine Marketing.
                  </p>
                  <p className="text-black" style={{ textAlign: "justify" }}>
                    We use a variety of methodologies to provide personalized
                    marketing. Some of our highlighted methodologies include
                    Google Analytics for analyzing growth and engagement,
                    marketing automation inculcating Smart Bidding, improving
                    CRM, AI tools for improving website content, and much more.
                  </p>
                  <p className="text-black" style={{ textAlign: "justify" }}>
                    Brandnest is a powerful tool for your digitalization. We can
                    help you transform your visualizations into real business
                    innovations that maximize your ROI. We are ready to serve
                    you with our proficiency!
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
                    We align to be a part of your journey to translate your
                    visionary ideas into user-centric solutions. Our proficiency
                    in brand development, analytics, and consulting enables us
                    to understand client needs and design robust systems and
                    user-friendly solutions in an efficient way.
                  </p>
                  <p className="text-black" style={{ textAlign: "justify" }}>
                    We aim to expand your brand name across dimensions, increase
                    client engagement, and maximize ROI by leveraging existing
                    approaches and integrating new technologies to drive digital
                    excellence.
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
                    Our services are designed to fuel the growth of your
                    business. Your growth is our primary priority. All of our
                    services are focused on precision targeting to achieve the
                    desired results for your business. Our ads and content are
                    tailored to create a great impression of your brand.
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
                        We rely on Statistics! Our goal is to significantly
                        increase your organic search leads, position your
                        company for success in the digital era, shape consumer
                        behaviour, encourage independent purchasing, and drive
                        more local traffic—all of which will enhance your
                        visibility and engagement.
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
                        Conducting a search audit is essential after thorough
                        research, as it helps identify flaws in your content.
                        Once your content is optimized, we will set up your
                        social media pages, gather inspiration, and enhance your
                        profiles. Once that is in place, you start creating
                        content, maintain consistency, and watch your engagement
                        rate rise.
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
                        The bulk email service at Brandnest is a great tool for
                        boosting your digital marketing initiatives. We help you
                        manage your customers more effectively and increase your
                        conversion rates by segmenting your customers into
                        distinct categories and identifying their needs. Our
                        AI-powered technologies optimize your engagement graph
                        by sending emails at the optimal time.
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
                        We're always looking for ways to improve our content to
                        better serve our users. Our goal is to create content
                        that is relevant and interesting to our target audience.
                        We believe that creating content that is aligned with
                        search engine optimization (SEO) best practices is
                        essential to driving organic traffic to your website. We
                        will continue to focus on creating high-quality content
                        that is both relevant and engaging to our users.
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
                        back to our campaigns to revise our plans in order to
                        optimize for highly profitable campaigns. We track and
                        enhance the success of your marketing initiatives using
                        solid statistics. We are aware of your most profitable
                        Zips, counties, and cities before you are.
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
                      src="images/home/clients/paytm.jpg"
                      alt="paytm"
                      style={{ maxWidth: "200px", height: "72px" }}
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/ford.png"
                      alt="ford"
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
                      src="images/home/clients/haier.png"
                      alt="haier"
                      style={{ maxWidth: "200px", height: "72px" }}
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/home/clients/astro-push.webp"
                      alt="astro-push"
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
                      src="images/home/clients/interglobe.png"
                      alt="interglobe"
                      style={{ maxWidth: "200px", height: "72px" }}
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

        {/* Team start */}
        <section
          className="bg-contain"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(../images/pattern/02.png)" }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Leadership Team</h6>
                  <h2 className="title">Meet The Leadership Team</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="team-single">
                      <div className="team-images">
                        <img
                          className="img-fluid w-100"
                          src="images/team/01.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 me-auto col-md-12">
                    <div className="team-description md-px-3 md-py-3">
                      <h6 className="text-theme">CEO and Founder</h6>
                      <h2 className="title z-index-1 mb-2">Aparna</h2>
                      <p className="lead mb-3">
                        Aparna is a hands-on leader and digital expert who
                        provides specific tactics and strategies to grow brands
                        online. She has worked with numerous brands, from
                        Fortune 500 companies to reputable startups including
                        Google, PayTM, Haier, Interglobe, Sleepwell, Ford, and
                        NewGen. Aparna sets the stage for a proactive work
                        culture and personally reviews every project to ensure
                        BrandNest generates results. She has two golden rules
                        for the team: 1. Do outstanding work, not just good
                        work, and 2. Don’t drag on tasks.
                      </p>
                      <p className="lead mb-3">
                        Aparna in her experience has worked with Media giants
                        like Dainik Bhaskar and Dainik Jagran, thus expanding
                        her knowledge and experience in both Digital and Print
                        media. She has helped many companies in their IPO
                        launches with her branding strategies both in digital
                        and print media.
                      </p>
                      <p className="lead mb-3">
                        Aparns’s prowess in both traditional and digital
                        marketing sets her apart in elevating brands to new
                        heights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-10">
                <div className="row align-items-center">
                  <div className="col-lg-6 me-auto col-md-12">
                    <div className="team-description md-px-3 md-py-3">
                      <h6 className="text-theme">Business Head</h6>
                      <h2 className="title z-index-1 mb-2">Jay</h2>
                      <p className="lead mb-3">
                        Jay bring’s over 16 years of tech and digital industry
                        leadership experience to the table, with expertise in
                        business development, sales, and key account management.
                        He has a proven track record of setting strategic goals,
                        collaborating with senior teams to define and execute
                        business and marketing plans, and driving domestic and
                        international business growth.
                      </p>
                      <p className="lead mb-3">
                        An Alumni of IIM Calcutta, Jay’s strategic vision has
                        enabled him to forge meaningful connections with
                        audiences and drive exceptional sales results through
                        digital strategy.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="team-single">
                      <div className="team-images">
                        <img
                          className="img-fluid w-100"
                          src="images/team/01.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-10">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="team-single">
                      <div className="team-images">
                        <img
                          className="img-fluid w-100"
                          src="images/team/01.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 me-auto col-md-12">
                    <div className="team-description md-px-3 md-py-3">
                      <h6 className="text-theme">Digital Strategist</h6>
                      <h2 className="title z-index-1 mb-2">Priyanka</h2>
                      <p className="lead mb-3">
                        Behind every brand is a business, as an agency, Priyanka
                        believes that it’s our job to grow both. With over a
                        decade of agency and client-side experience, Priyanka
                        has been an integral part of all aspects of agency
                        functions including project management, sales, account
                        services, SEO, PPC, Social Media.
                      </p>
                      <p className="lead mb-3">
                        Priyanka thrives in digital strategy and is a client
                        champion, going above and beyond to exceed her client’s
                        goals through hard-hitting strategies and determination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-10">
                <div className="row align-items-center">
                  <div className="col-lg-6 me-auto col-md-12">
                    <div className="team-description md-px-3 md-py-3">
                      <h6 className="text-theme">
                        Performance Marketing Strategist
                      </h6>
                      <h2 className="title z-index-1 mb-2">Kushal</h2>
                      <p className="lead mb-3">
                        With over 12 years of experience, Kushal is a seasoned
                        Performance Marketer who specializes in paid media and
                        growth marketing. He has a proven track record of
                        leading high-profile commercial expansion and
                        performance improvement initiatives across a mix of SME
                        and Enterprise organisations.
                      </p>
                      <p className="lead mb-3">
                        At BrandNest, Kushal and her team leverage data and
                        insights to design and implement effective marketing and
                        growth strategies that increase market share,
                        engagement, and profitability.
                      </p>
                      <p className="lead mb-3">
                        Kushal is passionate about helping businesses to grow
                        and thrive by delivering innovative and impactful
                        solutions that meet their needs and goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="team-single">
                      <div className="team-images">
                        <img
                          className="img-fluid w-100"
                          src="images/team/01.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team end */}
      </div>
      {/* page content end */}
    </>
  );
};

export default About;
