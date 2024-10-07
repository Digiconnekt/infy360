import React from "react";
import ContentImg from "../../components/ContentImg";
import ImgContent from "../../components/ImgContent";
import OneLiner from "../../components/OneLiner";
import TitleSection from "../../components/Title";
import ServicesLinkCarousel from "../../components/ServicesLinkCarousel";
import "./scrollBar.css";
import ContactBtnBanner from "../../components/ContactBtnBanner";
import { Helmet } from "react-helmet-async";

const EmailMarketing = () => {
  // Bulk email marketing start
  const bulkEmailMarketing = {
    img: "../images/services/email-marketing/bulkEmailMarketing.png",
    title: `Bulk Email Marketing:
    Is It Still Worth Investing In?`,
    para: [
      `Studies show that despite the growth of mobile messengers and chat applications, nearly 61 percent of consumers prefer brand communication via email. Moreover, globally around 87 percent of B2B and 79 percent of B2C marketers use email marketing as the primary channel for distributing content. Email marketing is still one of ‘the’ methods to rule the digital world!`,

      `Bulk email service as the name suggests is an email campaign capable of sending emails to a group of customers at once. These services are generally used for digital marketing campaigns to send out updates to the curated lists at once. The type of content here incorporates newsletters, notifications, the latest offers, reports, and much more.`,

      `When done in the right way, it boosts your loyal customer number and increases the graph of ROI. At Infy360, the Bulk email service is one of the most powerful mediums to increase your digital marketing campaigns. We manage your clients effectively by segmenting them into groups, specifying their needs, and thus improving your conversion rates. Our AI-powered systems boost your graph of engagement by sending emails at the perfect time.`,
    ],
  };
  // Bulk email marketing end

  // Email validation or Data Mining start
  const emailValidation = {
    img: "../images/services/email-marketing/emailValidation.png",
    title: `Email Validation Or Data Mining`,
    para: [
      `Data analytics is becoming a basic necessity in every field. It helps big firms to small corporations to deal with huge figures, segment them out, understand the different categories of potential customers, analyze their needs, and better strategize their marketing fundamentals. Here data mining comes into play to portray the big picture in small pieces. Such email intelligence helps you improve sales and increase your customer interaction.`,

      `We provide a team of specialists who figure out large numbers of feeds, enrich the data, clean the data set, and provide analyzed reports targeting many groups. Besides, working with Infy360 promise you a highly experienced and cost-effective team who has great accuracy working with the latest technology and is determined to reduce your workload thereby increasing the profit.`,
    ],
  };
  // Email validation or Data Mining end

  // Email marketing automation start start
  const emailMarketingAutomation = {
    img: "../images/services/email-marketing/emailMarketingAutomation.png",
    title: "Email marketing automation",
    para: [
      `As a business owner, you can’t go on to respond to every customer’s query mail rather you look for ways to grow within the stipulated time. Here’s when email marketing automation comes to your rescue. The main advantage of Email marketing is that it keeps you away from repetitive tasks such as responding to similar queries or sending in the same updates to thousand of them.`,

      `Email automation is the simplest way to compose emails that reach your targeted audience at the right time. Fortunately, you save your time and money and also increase your potential customers. These services can help your customers know more about your brand and encourage them to keep coming back by reminding them why they bought from you in the very first place.`,

      `Email marketing comes with some more benefits. Some of them like:`,
    ],
    subPara: [
      {
        title: `Personalized content -`,
        text: `Who doesn’t love customization? This service allows you to create a series of automated emails which is more appealing to the recipients.`,
      },
      {
        title: `Improves your conversion rates -`,
        text: `It’s easier to sell to an existing customer than to make a new one. So, schedule a message regarding updates and offer and drive in the sales.`,
      },
      {
        title: `More in less time -`,
        text: `If less time is spent manually compiling the message and sending it then more time could be dedicated to improving the other sectors for better marketing.`,
      },
    ],
  };
  // Email marketing automation start end

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Premier Email Marketing Agency in USA & Canada | Infy360</title>

        {/* Description */}
        <meta
          name="description"
          content="Upscale your brand with Infy360's top-notch Email Marketing Services in the USA and India. Expert Email Campaign Management for unparalleled success."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="email marketing agency usa, email marketing automation services, email marketing strategy, email campaign services, email marketing company"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Email Marketing" />
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

        {/* Email marketing automation start */}
        <ContentImg
          img={emailMarketingAutomation.img}
          title={emailMarketingAutomation.title}
          para={emailMarketingAutomation.para}
          subPara={emailMarketingAutomation.subPara}
        />
        {/* Email marketing automation end */}

        {/* one liner start */}
        <OneLiner
          textBeforeHighlight="Get the right "
          highlightText="words "
          textAfterHighlight="from our expert to hit the potential graph"
        />
        {/* one liner end */}

        {/* Email validation or Data Mining start */}
        <ImgContent
          img={emailValidation.img}
          title={emailValidation.title}
          para={emailValidation.para}
        />
        {/* Email validation or Data Mining end */}

        {/* contact btn start */}
        <ContactBtnBanner fromSection="section - 1" />
        {/* contact btn end */}

        {/* key features start */}
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
                    Key Features of Email marketing services
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/email-marketing/emailServiceIcon1.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>List Management </h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Do everything in minutes! Collecting useful information
                      about your recipients is what simply describes email list
                      management. Building a systematic list helps you
                      understand your customer better, and ensure their needs
                      are met. This will automatically boost your sale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mt-3 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/email-marketing/emailServiceIcon2.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Subscription Management</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Is a marketing strategy that defines the lifecycle of your
                      customers. These subscriptions give power to the recipient
                      to choose their choices about what content they want to
                      receive from you or in what content they are interested
                      in. It makes sure that the subscribers are happy with your
                      services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/email-marketing/emailServiceIcon3.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Message Scheduling</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Compose an email, schedule a time and send it in when it
                      gets noticed. Message scheduling helps them manage many
                      email campaigns in a short period of time. These scheduled
                      messages not only help send the message at the right time
                      but also assists holiday marketing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/email-marketing/emailServiceIcon4.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Campaign Tracking</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Tracking your measures will help you figure out the rate
                      of profit. The metrics that need to be accounted for
                      during campaign tracking are clickthrough rate, bounce
                      rate, overall ROI, unsubscribe rate, forwarding rate,
                      bounce rate, and a few more. This analysis helps you
                      identify the weak areas of the campaign
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/email-marketing/emailServiceIcon5.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Open and Click Through Tracking</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      CTR and CTOR are essential metrics to analyze the ROI
                      through email marketing. The difference between
                      click-through-rate and click-through-open-rate is slightly
                      different but essential. The CTR defines the inbox action
                      whereas CTOR portrays the activities of those who have
                      opened your email. Both summarize the engagement rate of
                      your content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 block-2">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/email-marketing/emailServiceIcon6.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Bounce Handling</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      As simply the name defines if an email does not reach the
                      recipient it bounces back. These bounces are analyzed and
                      segregated into different concern areas. This analysis
                      helps you determine your improvement sectors, the needs of
                      your existing potential customers, and the scope of new
                      clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* key features end */}

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

export default EmailMarketing;
