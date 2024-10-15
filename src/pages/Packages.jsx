import React from "react";
import TitleSection from "../components/Title";
import ImgContent from "../components/ImgContent";
import NationalSeo from "../components/packages/NationalSeo";
import {
  seoPackageContentMarketing,
  seoPackageConversationTracking,
  seoPackageCustomerSupport,
  seoPackageInitialReview,
  seoPackageLocalSearch,
  seoPackageMonthlyReporting,
  seoPackageOffPage,
  seoPackageOnPage,
  seoPackageSchemaAndStructure,
} from "../data/packages/national/startupPackages";
import {
  growthSeoPackageOnPage,
  growthSeoPackageInitialReview,
  growthSeoPackageConversationTracking,
  growthSeoPackageSchemaAndStructure,
  growthSeoPackageLocalSearch,
  growthSeoPackageContentMarketing,
  growthSeoPackageOffPage,
  growthSeoPackageMonthlyReporting,
  growthSeoPackageCustomerSupport,
} from "../data/packages/national/growthPackages ";
import {
  premiumSeoPackageOnPage,
  premiumSeoPackageInitialReview,
  premiumSeoPackageConversationTracking,
  premiumSeoPackageSchemaAndStructure,
  premiumSeoPackageLocalSearch,
  premiumSeoPackageContentMarketing,
  premiumSeoPackageOffPage,
  premiumSeoPackageMonthlyReporting,
  premiumSeoPackageCustomerSupport,
} from "../data/packages/national/premiumPackages ";
import {
  highVolumeSeoPackageOnPage,
  highVolumeSeoPackageInitialReview,
  highVolumeSeoPackageConversationTracking,
  highVolumeSeoPackageSchemaAndStructure,
  highVolumeSeoPackageLocalSearch,
  highVolumeSeoPackageContentMarketing,
  highVolumeSeoPackageOffPage,
  highVolumeSeoPackageMonthlyReporting,
  highVolumeSeoPackageCustomerSupport,
} from "../data/packages/national/highVolumePackages ";

import LocalSeo from "../components/packages/LocalSeo";
import {
  localBasicSeoPackageContentMarketing,
  localBasicSeoPackageCustomerSupport,
  localBasicSeoPackageInitialReview,
  localBasicSeoPackageLocalSearch,
  localBasicSeoPackageMonthlyReporting,
  localBasicSeoPackageOffPage,
  localBasicSeoPackageOnPage,
} from "../data/packages/local/basicPackages";
import {
  localGrowthSeoPackageInitialReview,
  localGrowthSeoPackageOnPage,
  localGrowthSeoPackageLocalSearch,
  localGrowthSeoPackageOffPage,
  localGrowthSeoPackageContentMarketing,
  localGrowthSeoPackageMonthlyReporting,
  localGrowthSeoPackageCustomerSupport,
} from "../data/packages/local/growthPackages ";
import {
  localBoosterSeoPackageContentMarketing,
  localBoosterSeoPackageCustomerSupport,
  localBoosterSeoPackageInitialReview,
  localBoosterSeoPackageLocalSearch,
  localBoosterSeoPackageMonthlyReporting,
  localBoosterSeoPackageOffPage,
  localBoosterSeoPackageOnPage,
} from "../data/packages/local/boosterPackages";
import EcommSeo from "../components/packages/EcommSeo";
import {
  ecommNanoSeoPackageContentMarketing,
  ecommNanoSeoPackageCustomerSupport,
  ecommNanoSeoPackageInitialReview,
  ecommNanoSeoPackageMonthlyReporting,
  ecommNanoSeoPackageOffPage,
  ecommNanoSeoPackageOnPage,
  ecommNanoSeoPackageSalesFunnel,
  ecommNanoSeoPackageSchemaAndStructure,
} from "../data/packages/ecommerce/nanoPackages";
import {
  ecommEnterpriseSeoPackageContentMarketing,
  ecommEnterpriseSeoPackageCustomerSupport,
  ecommEnterpriseSeoPackageInitialReview,
  ecommEnterpriseSeoPackageMonthlyReporting,
  ecommEnterpriseSeoPackageOffPage,
  ecommEnterpriseSeoPackageOnPage,
  ecommEnterpriseSeoPackageSalesFunnel,
  ecommEnterpriseSeoPackageSchemaAndStructure,
} from "../data/packages/ecommerce/enterprisePackages";
import {
  ecommBlastSeoPackageContentMarketing,
  ecommBlastSeoPackageCustomerSupport,
  ecommBlastSeoPackageInitialReview,
  ecommBlastSeoPackageMonthlyReporting,
  ecommBlastSeoPackageOffPage,
  ecommBlastSeoPackageOnPage,
  ecommBlastSeoPackageSalesFunnel,
  ecommBlastSeoPackageSchemaAndStructure,
} from "../data/packages/ecommerce/blastPackages";
import {
  ecommMegaSeoPackageContentMarketing,
  ecommMegaSeoPackageCustomerSupport,
  ecommMegaSeoPackageInitialReview,
  ecommMegaSeoPackageMonthlyReporting,
  ecommMegaSeoPackageOffPage,
  ecommMegaSeoPackageOnPage,
  ecommMegaSeoPackageSalesFunnel,
  ecommMegaSeoPackageSchemaAndStructure,
} from "../data/packages/ecommerce/megaPackages";
import { Helmet } from "react-helmet-async";

const Packages = () => {
  // what is seo start
  const seo = {
    img: "../images/services/seo/whatIsSeo.png",
    title: "Search Engine Optimization",
    para: [
      `is a crucial component of any online marketing strategy, and Brandnest recognizes the importance of having a comprehensive and effective SEO plan in place. As a leading digital marketing agency, we provide customized SEO packages tailored to the specific needs and goals of each client.`,

      `Our SEO package includes a range of services designed to boost a website's search engine rankings, increase website traffic, and improve overall online visibility. These services include:`,
    ],
  };
  // what is seo end

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Brandnest SEO Package | Best SEO Company in India</title>

        {/* Description */}
        <meta
          name="description"
          content="Explore Brandnest's comprehensive SEO package for unparalleled online visibility. We are the leading SEO company in India, offering a free SEO site audit. "
        />
      </Helmet>

      {/* title section start */}
      <TitleSection title="SEO Packages" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* seo start */}
        <ImgContent img={seo.img} title={seo.title} para={seo.para} />
        {/* seo end */}

        <section className=" position-relative text-center overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/dataDrivenIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Keyword research and analysis</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      This involves identifying the most relevant and profitable
                      keywords related to a client's business and industry, and
                      analyzing their search volume and competition levels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/resultOrientedIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>On-page optimization</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Brandnest's team of SEO experts optimize the website's
                      content, metadata, and HTML tags to make it more search
                      engine-friendly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/industryExpertIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Off-page optimization</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      This involves building high-quality backlinks from
                      authoritative websites to increase the website's authority
                      and credibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoConsultingIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Content creation</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Brandnest's team of professional writers create
                      high-quality, engaging, and SEO-friendly content that
                      helps to attract and retain website visitors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoOptimizationIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Technical SEO</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      This includes optimizing the website's structure, speed,
                      and mobile responsiveness, among other factors, to ensure
                      it meets the technical requirements of search engines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoAuditIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Analytics and reporting</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Brandnest provides regular reports that track the progress
                      of the SEO campaign, including website traffic, keyword
                      rankings, and other metrics.
                    </p>
                  </div>
                </div>
              </div>

              <p className="col-12 col-md-8 mx-auto mt-3 mb-0 text-black">
                Whether the goal is to increase website traffic, generate more
                leads, or improve online visibility, Brandnest has the expertise
                and experience to deliver results.
              </p>
            </div>
          </div>
        </section>

        {/* 3 cards start */}
        {/* <section className="bg-contain bg-pos-r" data-bg-img="images/bg/02.png">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">Our SEO Packages</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tab text-center">
                  <div className="tab-content px-0 pb-0" id="nav-tabContent">
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="tab1-1"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-12">
                          <div className="price-table">
                            <div className="round-p-animation"></div>
                            <div className="price-header">
                              <h3 className="price-title">
                                Local SEO <br /> Packages
                              </h3>
                            </div>
                            <img
                              className="img-fluid my-4"
                              src="images/price/01.png"
                              alt=""
                            />
                            <div className="price-value">
                              <h2>
                                $275<span>/Month</span>
                              </h2>
                            </div>
                            <div className="">
                              <ul className="list-unstyled list-icon">
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Target:
                                  </span>
                                  Google Maps
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Best suited for:
                                  </span>
                                  Local / Niche Business
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Keywords are generally:
                                  </span>
                                  Long Tail / City/ Town Specific
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Covers:
                                  </span>
                                  SEO Related Technical Audits + On Page + Off
                                  Page + Content Syndication + Local Listings
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    What to expect:
                                  </span>
                                  Better Rankings on Google Maps + More Calls /
                                  Enquiries
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Improvements Expected:
                                  </span>
                                  From 1 month onwards
                                </li>
                              </ul>
                            </div>
                            <a className="btn btn-theme mt-5" href="#pick-plan">
                              <span>View</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                          <div className="price-table">
                            <div className="round-p-animation"></div>
                            <div className="price-header">
                              <h3 className="price-title">
                                National SEO <br /> Packages
                              </h3>
                            </div>
                            <img
                              className="img-fluid my-4"
                              src="images/price/01.png"
                              alt=""
                            />
                            <div className="price-value">
                              <h2>
                                $200<span>/Month</span>
                              </h2>
                            </div>
                            <div className="">
                              <ul className="list-unstyled list-icon">
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Target:
                                  </span>
                                  Organic Search Results
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Best suited for:
                                  </span>
                                  Business that targets Nation Wide or with
                                  Audience
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Keywords are generally:
                                  </span>
                                  Competitive, Mid Competitive & Low Competitive
                                  Keywords
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Covers:
                                  </span>
                                  SEO Related Technical Audits + On Page + Off
                                  Page + Content Syndication
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    What to expect:
                                  </span>
                                  Better Rankings + More, Calls + Enquiries
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Improvements Expected:
                                  </span>
                                  From 2 month onwards
                                </li>
                              </ul>
                            </div>
                            <a className="btn btn-theme mt-5" href="#pick-plan">
                              <span>View</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                          <div className="price-table">
                            <div className="round-p-animation"></div>
                            <div className="price-header">
                              <h3 className="price-title">
                                Ecommerce SEO <br /> Packages
                              </h3>
                            </div>
                            <img
                              className="img-fluid my-4"
                              src="images/price/01.png"
                              alt=""
                            />
                            <div className="price-value">
                              <h2>
                                $425<span>/Month</span>
                              </h2>
                            </div>
                            <div className="">
                              <ul className="list-unstyled list-icon">
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Target:
                                  </span>
                                  Organic Search Results + Product Listings
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Best suited for:
                                  </span>
                                  Business that sells Products / Services
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Keywords are generally:
                                  </span>
                                  Product Centric + Category, Oriented Keywords
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Covers:
                                  </span>
                                  SEO Related Technical Audits + On Page + Off
                                  Page + Content Syndication + Product Listings
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    What to expect:
                                  </span>
                                  Better Rankings + More Sales
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Improvements Expected:
                                  </span>
                                  From 2 month onwards
                                </li>
                              </ul>
                            </div>
                            <a className="btn btn-theme mt-5" href="#pick-plan">
                              <span>View</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* 3 cards end */}

        {/* pick you plan start */}
        <section
          id="pick-plan"
          className="bg-contain bg-pos-r"
          data-bg-img="images/bg/02.png"
        >
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">Pick Your Plan</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tab text-center">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-link mt-3"
                        id="nav-tab1"
                        data-bs-toggle="tab"
                        href="#price-tab1-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Local SEO Packages
                      </a>
                      <a
                        className="nav-link active mt-3"
                        id="nav-tab2"
                        data-bs-toggle="tab"
                        href="#price-tab1-2"
                        role="tab"
                        aria-selected="false"
                      >
                        National SEO Packages
                      </a>
                      <a
                        className="nav-link mt-3"
                        id="nav-tab3"
                        data-bs-toggle="tab"
                        href="#price-tab1-3"
                        role="tab"
                        aria-selected="false"
                      >
                        Ecomm. SEO Packages
                      </a>
                    </div>
                  </nav>
                  <div className="tab-content px-0 pb-0" id="nav-tabContent">
                    {/* local seo start */}
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="price-tab1-1"
                    >
                      <div className="row">
                        {/* Startup start */}
                        <LocalSeo
                          classes="col-lg-6 col-md-12"
                          noOfLocation="1"
                          title="Basic"
                          price="275"
                          keyPlan="Upto 10"
                          keyTop="20%"
                          initialReview={localBasicSeoPackageInitialReview}
                          onPage={localBasicSeoPackageOnPage}
                          localSearch={localBasicSeoPackageLocalSearch}
                          contentMarketing={
                            localBasicSeoPackageContentMarketing
                          }
                          offPage={localBasicSeoPackageOffPage}
                          monthlyReport={localBasicSeoPackageMonthlyReporting}
                          customerSupport={localBasicSeoPackageCustomerSupport}
                        />
                        {/* Startup end */}

                        {/* Growth start */}
                        <LocalSeo
                          classes="col-lg-6 col-md-12 mt-5 mt-lg-0"
                          noOfLocation="Upto 2"
                          title="Growth"
                          price="475"
                          keyPlan="Upto 20"
                          keyTop="25%"
                          initialReview={localGrowthSeoPackageInitialReview}
                          onPage={localGrowthSeoPackageOnPage}
                          localSearch={localGrowthSeoPackageLocalSearch}
                          contentMarketing={
                            localGrowthSeoPackageContentMarketing
                          }
                          offPage={localGrowthSeoPackageOffPage}
                          monthlyReport={localGrowthSeoPackageMonthlyReporting}
                          customerSupport={localGrowthSeoPackageCustomerSupport}
                        />
                        {/* Growth end */}

                        {/* Booster start */}
                        <LocalSeo
                          classes="col-lg-6 col-md-12 mt-5"
                          noOfLocation="Upto 3"
                          title="Booster"
                          price="775"
                          keyPlan="Upto 40"
                          keyTop="30%"
                          initialReview={localBoosterSeoPackageInitialReview}
                          onPage={localBoosterSeoPackageOnPage}
                          localSearch={localBoosterSeoPackageLocalSearch}
                          contentMarketing={
                            localBoosterSeoPackageContentMarketing
                          }
                          offPage={localBoosterSeoPackageOffPage}
                          monthlyReport={localBoosterSeoPackageMonthlyReporting}
                          customerSupport={
                            localBoosterSeoPackageCustomerSupport
                          }
                        />
                        {/* Booster end */}
                      </div>
                    </div>
                    {/* local seo end */}

                    {/* national seo start */}
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="price-tab1-2"
                    >
                      <div className="row">
                        {/* Startup start */}
                        <NationalSeo
                          classes="col-lg-6 col-md-12"
                          title="Startup"
                          price="200"
                          keyPlan="Upto 15"
                          keyTop="20%"
                          initialReview={seoPackageInitialReview}
                          onPage={seoPackageOnPage}
                          conversationTracking={seoPackageConversationTracking}
                          schemaAndStructured={seoPackageSchemaAndStructure}
                          localSearch={seoPackageLocalSearch}
                          contentMarketing={seoPackageContentMarketing}
                          offPage={seoPackageOffPage}
                          monthlyReport={seoPackageMonthlyReporting}
                          customerSupport={seoPackageCustomerSupport}
                        />
                        {/* Startup end */}

                        {/* Growth start */}
                        <NationalSeo
                          classes="col-lg-6 col-md-12 mt-5 mt-lg-0"
                          title="Growth"
                          price="350"
                          keyPlan="Upto 25"
                          keyTop="25%"
                          initialReview={growthSeoPackageInitialReview}
                          onPage={growthSeoPackageOnPage}
                          conversationTracking={
                            growthSeoPackageConversationTracking
                          }
                          schemaAndStructured={
                            growthSeoPackageSchemaAndStructure
                          }
                          localSearch={growthSeoPackageLocalSearch}
                          contentMarketing={growthSeoPackageContentMarketing}
                          offPage={growthSeoPackageOffPage}
                          monthlyReport={growthSeoPackageMonthlyReporting}
                          customerSupport={growthSeoPackageCustomerSupport}
                        />
                        {/* Growth end */}

                        {/* Premium start */}
                        <NationalSeo
                          classes="col-lg-6 col-md-12 mt-5"
                          title="Premium"
                          price="574"
                          keyPlan="Upto 40"
                          keyTop="30%"
                          initialReview={premiumSeoPackageInitialReview}
                          onPage={premiumSeoPackageOnPage}
                          conversationTracking={
                            premiumSeoPackageConversationTracking
                          }
                          schemaAndStructured={
                            premiumSeoPackageSchemaAndStructure
                          }
                          localSearch={premiumSeoPackageLocalSearch}
                          contentMarketing={premiumSeoPackageContentMarketing}
                          offPage={premiumSeoPackageOffPage}
                          monthlyReport={premiumSeoPackageMonthlyReporting}
                          customerSupport={premiumSeoPackageCustomerSupport}
                        />
                        {/* Premium end */}

                        {/* High Volume start */}
                        <NationalSeo
                          classes="col-lg-6 col-md-12 mt-5"
                          title="High Volume"
                          price="1074"
                          keyPlan="Upto 75"
                          keyTop="35%"
                          initialReview={highVolumeSeoPackageInitialReview}
                          onPage={highVolumeSeoPackageOnPage}
                          conversationTracking={
                            highVolumeSeoPackageConversationTracking
                          }
                          schemaAndStructured={
                            highVolumeSeoPackageSchemaAndStructure
                          }
                          localSearch={highVolumeSeoPackageLocalSearch}
                          contentMarketing={
                            highVolumeSeoPackageContentMarketing
                          }
                          offPage={highVolumeSeoPackageOffPage}
                          monthlyReport={highVolumeSeoPackageMonthlyReporting}
                          customerSupport={highVolumeSeoPackageCustomerSupport}
                        />
                        {/* High Volume end */}
                      </div>
                    </div>
                    {/* national seo end */}

                    {/* ecomm seo start */}
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="price-tab1-3"
                    >
                      <div className="row">
                        {/* nano start */}
                        <EcommSeo
                          classes="col-lg-6 col-md-12"
                          title="Nano"
                          price="425"
                          keyPlan="Upto 30"
                          focusKey="15"
                          otherKey="15"
                          keyTop="25%"
                          initialReview={ecommNanoSeoPackageInitialReview}
                          salesFunnel={ecommNanoSeoPackageSalesFunnel}
                          onPage={ecommNanoSeoPackageOnPage}
                          schemaAndStructured={
                            ecommNanoSeoPackageSchemaAndStructure
                          }
                          contentMarketing={ecommNanoSeoPackageContentMarketing}
                          offPage={ecommNanoSeoPackageOffPage}
                          monthlyReport={ecommNanoSeoPackageMonthlyReporting}
                          customerSupport={ecommNanoSeoPackageCustomerSupport}
                        />
                        {/* nano end */}

                        {/* enterprise start */}
                        <EcommSeo
                          classes="col-lg-6 col-md-12 mt-5 mt-lg-0"
                          title="Enterprise"
                          price="674"
                          keyPlan="Upto 50"
                          focusKey="25"
                          otherKey="25"
                          keyTop="30%"
                          initialReview={ecommEnterpriseSeoPackageInitialReview}
                          salesFunnel={ecommEnterpriseSeoPackageSalesFunnel}
                          onPage={ecommEnterpriseSeoPackageOnPage}
                          schemaAndStructured={
                            ecommEnterpriseSeoPackageSchemaAndStructure
                          }
                          contentMarketing={
                            ecommEnterpriseSeoPackageContentMarketing
                          }
                          offPage={ecommEnterpriseSeoPackageOffPage}
                          monthlyReport={
                            ecommEnterpriseSeoPackageMonthlyReporting
                          }
                          customerSupport={
                            ecommEnterpriseSeoPackageCustomerSupport
                          }
                        />
                        {/* enterprise end */}

                        {/* blast start */}
                        <EcommSeo
                          classes="col-lg-6 col-md-12 mt-5"
                          title="Blast"
                          price="1175"
                          keyPlan="Upto 100"
                          focusKey="50"
                          otherKey="50"
                          keyTop="35%"
                          initialReview={ecommBlastSeoPackageInitialReview}
                          salesFunnel={ecommBlastSeoPackageSalesFunnel}
                          onPage={ecommBlastSeoPackageOnPage}
                          schemaAndStructured={
                            ecommBlastSeoPackageSchemaAndStructure
                          }
                          contentMarketing={
                            ecommBlastSeoPackageContentMarketing
                          }
                          offPage={ecommBlastSeoPackageOffPage}
                          monthlyReport={ecommBlastSeoPackageMonthlyReporting}
                          customerSupport={ecommBlastSeoPackageCustomerSupport}
                        />
                        {/* blast end */}

                        {/* mega start */}
                        <EcommSeo
                          classes="col-lg-6 col-md-12 mt-5"
                          title="Mega"
                          price="2075"
                          keyPlan="Upto 200"
                          focusKey="100"
                          otherKey="100"
                          keyTop="45%"
                          initialReview={ecommMegaSeoPackageInitialReview}
                          salesFunnel={ecommMegaSeoPackageSalesFunnel}
                          onPage={ecommMegaSeoPackageOnPage}
                          schemaAndStructured={
                            ecommMegaSeoPackageSchemaAndStructure
                          }
                          contentMarketing={ecommMegaSeoPackageContentMarketing}
                          offPage={ecommMegaSeoPackageOffPage}
                          monthlyReport={ecommMegaSeoPackageMonthlyReporting}
                          customerSupport={ecommMegaSeoPackageCustomerSupport}
                        />
                        {/* mega end */}
                      </div>
                    </div>
                    {/* ecomm seo end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* pick your plan end */}

        {/* 4 cards start */}
        <section className="light-bg position-relative overflow-hidden">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">
                    We can grow your business Exponentially
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="featured-item style-3 text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5 className="fw-bold">E-Commerce</h5>
                  </div>
                  <div className="featured-desc">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+150%</span>
                          <h6>Organic Revenue</h6>
                        </div>
                      </div>
                      <div className="col-sm-6 mt-5 mt-sm-0">
                        <div className="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+80%</span>
                          <h6>Website Traffic</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="featured-item style-3 text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5 className="fw-bold">Real Estate</h5>
                  </div>
                  <div className="featured-desc">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+180%</span>
                          <h6>Online Leads</h6>
                        </div>
                      </div>
                      <div className="col-sm-6 mt-5 mt-sm-0">
                        <div className="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+243%</span>
                          <h6>Website Sales</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5">
                <div className="featured-item style-3 text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5 className="fw-bold">Health Care</h5>
                  </div>
                  <div className="featured-desc">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+210%</span>
                          <h6>Qualified Leads</h6>
                        </div>
                      </div>
                      <div className="col-sm-6 mt-5 mt-sm-0">
                        <div className="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+98%</span>
                          <h6>Keywords Ranked Page #1</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5">
                <div className="featured-item style-3 text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5 className="fw-bold">Law Firm</h5>
                  </div>
                  <div className="featured-desc">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+95%</span>
                          <h6>Keywords Ranked in Top 5</h6>
                        </div>
                      </div>
                      <div className="col-sm-6 mt-5 mt-sm-0">
                        <div className="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+140%</span>
                          <h6>Organic Search Traffic</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4 cards end */}

        <section className=" position-relative text-center overflow-hidden">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">Benefits of Brandnest's SEO Package</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/dataDrivenIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Increased website traffic</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      By improving a website's search engine rankings,
                      Brandnest's SEO package can help to drive more targeted
                      traffic to a website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 sm-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/resultOrientedIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Better online visibility</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      By optimizing a website's content and structure,
                      Brandnest's SEO package can help to improve a website's
                      online visibility, making it easier for potential
                      customers to find it online.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/industryExpertIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Higher search engine rankings</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      Brandnest's SEO package is designed to improve a website's
                      search engine rankings, which can lead to increased brand
                      awareness, credibility, and trust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoAuditIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Improved user experience</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      By optimizing a website's structure, speed, and content,
                      Brandnest's SEO package can help to improve the user
                      experience, making it easier for visitors to navigate and
                      find the information they need.
                    </p>
                  </div>
                </div>
              </div>

              <p className="col-12 col-md-10 mx-auto mt-3 mb-0 text-black">
                In conclusion, Brandnest's SEO package is a comprehensive and
                effective solution for businesses looking to improve their
                online visibility, attract more targeted traffic, and increase
                their search engine rankings. With a team of experienced SEO
                experts and a range of customizable services, Brandnest is the
                ideal partner for businesses looking to succeed online.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Packages;
