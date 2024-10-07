import React from "react";
import { Helmet } from "react-helmet-async";
import ContactBtnBanner from "../../components/ContactBtnBanner";
import ContentImg from "../../components/ContentImg";
import ImgContent from "../../components/ImgContent";
import OneLiner from "../../components/OneLiner";
import ServicesLinkCarousel from "../../components/ServicesLinkCarousel";
import TitleSection from "../../components/Title";
import "./scrollBar.css";

const SocialMediaOptimization = () => {
  // what is smo start
  const whatIsSmo = {
    img: "../images/services/smo/whatIsSmo.png",
    title: "What is SMO?",
    para: [
      `From its inception in the year 2006 to fast forward 2022, SMO is hitting the digital market with its necessity. SMO or Social Media Optimization primarily aims at attracting customers from any source other than search engines. Nobody can deny the power of social media, having said this it won’t be wrong to say that using the full potential of social media marketing can do wonders for your business.`,

      `SMO doesn’t only cover the technical aspect but emphasizes various marketing platforms such as Facebook marketing, Instagram marketing, LinkedIn, and much more.`,
    ],
  };
  // what is smo end

  // how to do smo start
  const howToDoSmo = {
    img: "../images/services/smo/howToDoSmo.png",
    title: "How to do SMO?",
    para: [
      `To start with what Cameron Olthius wrote: “SMO tactics can drive huge amounts of people to the website and can also determine whether a startup, website, or idea will make it or not. It involves driving traffic to a website through new channels because search engines aren’t the only sites that drive big traffic anymore.”`,

      `This brings me to the point that optimizing Social Media is the key essential. Optimization of social media not only portrays a positive image of your brand but has a direct impact on SEO as it eases the usability of the site which will automatically generate traffic.`,

      `To start with, blend your website and social media! Yes, you heard it right. Inculcate your social media links on the website and vice-versa, and allow your users to sign in through their social media profiles, this will increase the registration conversation.`,

      `Keywords play an important role. Structure your social media pages with just the right keywords and phrases such as the company name and info, keeping in mind that it doesn't give a promotional outlook.`,

      `The next key feature could be to encourage inbound links, that is to encourage more external websites to link to your content. Besides, you should also post content consistently on all your social media platforms and into existing threads and discussion forums. These exercises will maximize your external link sources.`,

      `Share quality and optimized content. Google algorithms might change continuously but the demand for quality and optimized content from users remains constant. Optimizing your posts for searches is important to increase their visibility and engagement. Here optimization covers short, descriptive titles, informative descriptions, and everything in between. These small steps will help you emerge as a leader in your domain.`,
    ],
    subPara: null,
  };
  // how to do smo end

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Social Media Optimization Agency in USA & India | Infy360</title>

        {/* Description */}
        <meta
          name="description"
          content="As a Leading SMO Agency, our expert services in the USA and India cover Online Marketing, Facebook, Instagram, Linkedin, and Youtube Marketing. Maximize your online impact with tailored strategies for unparalleled results."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Social media marketing services usa, social media management services, Social Media Marketing Agency USA, social media advertising agency, online marketing and social media manager, Community manager services"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Social Media Optimization" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* what is smo start */}
        <ImgContent
          img={whatIsSmo.img}
          title={whatIsSmo.title}
          para={whatIsSmo.para}
        />
        {/* what is smo end */}

        {/* how to do start */}
        <ContentImg
          img={howToDoSmo.img}
          title={howToDoSmo.title}
          para={howToDoSmo.para}
          subPara={howToDoSmo.subPara}
        />
        {/* how to do end */}

        {/* one liner start */}
        <OneLiner
          textBeforeHighlight="Grow your organization "
          highlightText="10x "
          textAfterHighlight="with the online presence. Get in touch with our experts now!"
        />
        {/* one liner end */}

        {/* social media start */}
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
                    Social Media Platform for businesses?
                  </h2>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/smo/facebook.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Facebook Marketing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Facebook caters tools to businesses that want to form
                    authentic relationships with customers. With over 2 billion
                    users it provides an extensive platform for marketers to
                    distribute quality content that will boost traffic to your
                    site. Facebook marketing requires consistency but returns a
                    great response in return.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/smo/instagram.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Instagram Marketing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Figures state that 83% of users discover new products or
                    services through this media, 74% consider them trustworthy
                    and 78% account for them as popular. This platform runs on
                    quality images and short-optimized videos. Taking into count
                    the numbers, Instagram is a great way to create a network
                    for your community by engaging, following already
                    established people, or by including hashtags of your brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/smo/linkedin.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">LinkedIn Marketing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Having your company’s page on LinkedIn increases the
                    credibility of your brand. For companies operating only in
                    B2B mode, LinkedIn is the platform that requires your
                    attention. Even if your brand doesn’t have a very strong
                    website, LinkedIn helps you connect with potential business
                    professionals.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/smo/youtube.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">YouTube Marketing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Google-owned YouTube is growing exponentially by being the
                    second-largest search engine. It has over 5 billion videos
                    consumed every day which means even if you don’t have n
                    number of advertising videos for your site you can still
                    reach your audience through other people’s accounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/smo/snapchat.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Snapchat Marketing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Having a snap filter option and ‘don’t break the streak’,
                    yes these USPs of Snapchat differentiate it from other
                    social advertising platforms. Snapchat provides a wide
                    spectrum for promoting marketing events and specific
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* social media end */}

        {/* contact btn start */}
        <ContactBtnBanner fromSection="section - 1" />
        {/* contact btn end */}

        {/* social media necessity start */}
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
                  <h2 className="title">
                    Is social media marketing a necessity?
                  </h2>
                  <p className="mb-0 text-black">
                    Be where your customers are!! <br />
                    Social media is dominant in all spheres which are directly
                    proportional to the fact that your potential customers are
                    available here. Social media marketing helps in:
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 block-1">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/smo/nessesityIcon1.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Increasing Your Brand’s Position in Digital Market</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Social media are the most efficient and cost-effective
                      platforms for digital marketing. These platforms increase
                      your visibility and increase client engagement. Studies
                      state that over 91% of marketers claim a boost in their
                      business with just the right use of social platforms.
                      These platforms also come with the advantage of being
                      cost-effective, which means by investing very little you
                      get a greater return on investment. <br />
                      To get started, build your social media accounts, post
                      optimized audience-targeted content, and be consistent,
                      this will significantly increase your brand’s recognition
                      and will improve conversion rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 sm-mt-3 block-1">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "95px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/smo/nessesityIcon2.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Increasing the traffic rates</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Social media provides you with the best platform for
                      interacting with your potential customers and therefore
                      increasing conversion rates. More interaction with your
                      clients will help you to cater to their interests with
                      ease. Moreover, communication also helps you win your
                      customer's attention and convey your message. Healthy
                      customer satisfaction helps you in building a good network
                      and an improved traffic rate. <br />
                      Besides these improving your brand loyalty or let's say
                      building your loyal customer base is one of the most
                      important goals of social media marketing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 md-mt-3 block-1">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "75px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/smo/nessesityIcon3.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Platform to advertising your product or services</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      One of the best places to find your customers, to find
                      their needs, to know their wants, and directly sell your
                      solutions to them. Social media helps you bridge the gap
                      between the want of your potential customers and your
                      solution. <br />
                      Social media blesses you with the power of knowing exactly
                      what are your customer's interests are by observing the
                      activities on their profile. Besides, as a compliment
                      research tools of social media help you analyze who your
                      potential audience is. <br />
                      By using these algorithms, once when you get a large
                      customer audience you can use additional tools to examine
                      other demographics of your audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* social media necessity end */}

        {/* smo strategy start */}
        <section
          className="light-bg animatedBackground mt-5"
          data-bg-img="images/pattern/05.png"
          style={{
            backgroundImage: 'url("../images/pattern/05.png")',
          }}
        >
          <div className="container">
            {/* <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">smo</h2>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-sm-12">
                <div className="tab style-2 ">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-link active"
                        id="nav-tab1"
                        data-bs-toggle="tab"
                        href="#tab1-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Social Media Marketing Strategy
                      </a>
                      <a
                        className="nav-link"
                        id="nav-tab2"
                        data-bs-toggle="tab"
                        href="#tab1-2"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Assets for Social Media Marketing Strategy
                      </a>
                      <a
                        className="nav-link"
                        id="nav-tab3"
                        data-bs-toggle="tab"
                        href="#tab1-3"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Analytics and Reporting
                      </a>
                      <a
                        className="nav-link"
                        id="nav-tab4"
                        data-bs-toggle="tab"
                        href="#tab1-4"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Paid Media Advertising
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
                            src="../images/services/smo/strategy.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">
                            Social Media Marketing Strategy
                          </h4>
                          <p>
                            Social media marketing strategy helps you outline
                            your vision and goals you want to achieve online.
                            First of all, choose your goals that align with
                            business objectives. Your goal should be made after
                            doing good research on the interest of your
                            potential audience. Your research should also
                            incorporate a study on your competitors and current
                            market trends. After research doing a search audit
                            is a must as it filters the flaws in your content.
                            Once your content is ready to set up your social
                            media pages, find inspiration, and improve your
                            profile. <br />
                            Bingo, get started, create content, be consistent
                            and see your engagement rate increase!
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
                            src="../images/services/smo/assetsForSocialMedia.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">
                            Assets for Social Media Marketing Strategy
                          </h4>
                          <p>
                            Coming this far you are well aware that social media
                            is the major player in promotional campaigns, but
                            before starting you need to keep some strategies in
                            mind. The most important of them include building
                            your brand identity. Your brand identity is not
                            about your logo or brand name it portrays your
                            vision and pulls in potential customers. Build a
                            team of experienced. A team who caters to all your
                            needs from preparing content to posting right
                            according to the theme, choosing thumbnails, and
                            everything in between. Besides, these you need to
                            track all your inputs in order to get the desired
                            results.
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
                            src="../images/services/smo/analyticsAndReporting.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">Analytics and Reporting</h4>
                          <p>
                            Analyzing your strategies is very important. This
                            gives you a detailed insight into what areas require
                            your attention and which area does not require
                            marketing. These analyses also give you a clear
                            picture of your customer's choices, needs, and the
                            scope of new customers.
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
                            src="../images/services/smo/paidMedia.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">Paid Media Advertising</h4>
                          <p>
                            Paid Media advertising as the name suggests promotes
                            your content through paid ads, paid content, and
                            posts. This is done to increase the traffic and to
                            reach the lot that has gone unnoticed. These
                            advertisements are a lot more planned and organized
                            as they focus on a specific small group of people.
                            It's undoubtedly an effective way to increase your
                            spectrum of audience.
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
        {/* smo strategy end */}

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

export default SocialMediaOptimization;
