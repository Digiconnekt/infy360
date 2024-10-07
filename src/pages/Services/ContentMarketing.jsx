import React from "react";
import { Helmet } from "react-helmet-async";
import ContactBtnBanner from "../../components/ContactBtnBanner";
// import ContentImg from "../../components/ContentImg";
import ImgContent from "../../components/ImgContent";
import OneLiner from "../../components/OneLiner";
import ServicesLinkCarousel from "../../components/ServicesLinkCarousel";
import TitleSection from "../../components/Title";
import "./scrollBar.css";

const ContentMarketing = () => {
  // Strategizing The Content start
  const strategizingTheContent = {
    img: "../images/services/content-marketing/strategizingContent.png",
    title: "Strategizing The Content That’s Relevant For You",
    para: [
      `Strategizing The Content That’s Relevant For You Statistics state that 50% of buyers use ad-block methodology and around 80% prefer to look for the appropriate option instead of speaking to your sales team during their initial purchasing journey. This is when content marketing comes to your rescue!`,
      `Content marketing helps you to portray your business’s voice. The right content can lead to higher ROI rates via clicking on the links, staying on the page, knowing more about you, and having more potential customers on board. Creating the right content while keeping in mind the market needs might take time to show results but promise you an increase in your potential customers.`,
      `To get it right, content marketing is about more than just selling your product. It is about building relationships with your customers across spheres! With the help of digital platforms, you can connect with your customers worldwide by providing them with just the right content!`,
    ],
  };

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Leading Content Marketing Agency in Canada | SEO Writing &
          Optimization Services in India
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Elevate your brand with Infy360, a premier content marketing agency in USA and Canada. Unlock SEO content writing excellence in India. Optimize your content for success with our expert content optimization service in Canada."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="content marketing agency services, seo content marketing services, seo content writing services, seo optimized content, seo and content marketing services"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

      {/* title section start */}
      <TitleSection title="Content Marketing" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* Strategizing content start */}
        <ImgContent
          img={strategizingTheContent.img}
          title={strategizingTheContent.title}
          para={strategizingTheContent.para}
        />
        {/* Strategizing content end */}

        {/* one liner start */}
        <OneLiner
          textBeforeHighlight="Creating Valuable, Consistent "
          highlightText="Content "
          textAfterHighlight="That Accelerates Your Digital Race."
        />
        {/* one liner end */}

        {/* Content That Drives Results start */}
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
                  <h2 className="title">Content That Drives Results</h2>
                  <p className="mb-0 text-black">
                    Optimized content that targets your potential customers and
                    drives sales. We offer data-driven, valuable, and relevant
                    content for your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/content-marketing/contentDrivesIcon1.png"
                      alt="Experts on board"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Experts on board</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Our well-optimized website content focuses on driving
                      potential customers to your website and making it stand
                      out in the crowd.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 sm-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/content-marketing/contentDrivesIcon2.png"
                      alt="Audience across globe"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Audience across globe</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      We target audiences across the globe researching their
                      interest areas and needs. Our content is focused on
                      meeting the needs of your users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/content-marketing/contentDrivesIcon3.png"
                      alt="Get highlighted online"
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Get highlighted online</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Our expert design content is aligned with SEO to drive
                      organic traffic which will keep you on top of Google
                      search results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Content That Drives Results end */}

        {/* contact btn start */}
        <ContactBtnBanner fromSection="section - 1" />
        {/* contact btn end */}

        {/* Customize Any Content start */}
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
                    Customize Any Content
                  </h2>
                  <p className="mb-0 text-black">
                    We are committed to providing highly engaging, optimized,
                    plagiarism-free content to ensure higher conversion rates
                    and increase the ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/content-marketing/articleWriting.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Article Writing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Article writing basically focuses on a massive audience and
                    explicates your ideologies, thoughts, and vision. We help
                    you promote your business with just the right content!
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/content-marketing/blog.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Blog Writing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Get them wrong and your rankings will never result in your
                    desired output. No worries we come to your rescue focused on
                    building quality content and powerful links that win your
                    website.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/content-marketing/seoContentWriting.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">SEO Content Writing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We have experts in SEO! They are aimed to work from
                    analyzing the most demanded keywords to framing the
                    paragraph right and everything in between.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/content-marketing/contentEditing.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Content Editing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Have raw content or visual ideas. We offer services to
                    convert your raw data into optimized content focused on
                    improving your conversion rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/content-marketing/pressRelease.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Press Releases</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    A well-framed press release notifies your customer about
                    something new or updated. We have a team of experts who
                    format the content in the appropriate manner to match the
                    need of release.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/content-marketing/socialMediaWriting.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Social Media Writing</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Social Media is undoubtedly the most powerful tool but
                    keeping content right is of utmost importance. Our content
                    creators stay updated with the latest trend and merge them
                    with your need to meet the desired output.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Customize Any Content end */}

        {/* contact btn start */}
        <section
          className="overflow-hidden dark-bg animatedBackground"
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
        </section>
        {/* contact btn end */}

        {/* what we offer start */}
        <section
          className="bg-contain bg-pos-r"
          data-bg-img="images/pattern/02.png"
          style={{
            backgroundImage: 'url("../images/pattern/02.png")',
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="section-title mb-0">
                  <h2 className="title">What we Offer</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/content-marketing/weOfferIcon1.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>SMO Content</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      From taglines to content yes we filter everything for you,
                      to provide the best content for your brand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/content-marketing/weOfferIcon2.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>SEO Content</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Keywords, blogs, and descriptions we research every sphere
                      to meet your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/content-marketing/weOfferIcon3.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Infographic Content</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Pictures speak louder. But, the appropriate description
                      for the same would add a lot to your pictorial views.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/content-marketing/weOfferIcon4.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Brochure Contents</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      The right words can portray the vision of your brand in
                      the customer's mind. Therefore, we provide the appropriate
                      content to make your business stand out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/content-marketing/weOfferIcon5.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Multiple Content Types</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      From SEO to email marketing yes we cover everything!
                      Keeping in mind your needs we publish content that suits
                      your domain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* what we offer end */}

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

export default ContentMarketing;
