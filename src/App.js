import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SearchEngineOptmization from "./pages/Services/SearchEngineOptmization";
import SocialMediaOptimization from "./pages/Services/SocialMediaOptimization";
import Error from "./pages/Error";
import EmailMarketing from "./pages/Services/EmailMarketing";
import ContentMarketing from "./pages/Services/ContentMarketing";
import About from "./pages/About";
import Proposal from "./pages/Proposal";
import ScrollToTop from "./components/ScrollToTop";
import LeadGeneration from "./pages/Services/LeadGeneration";
import ProgrammaticAdvertising from "./pages/Services/ProgrammaticAdvertising";
import PPC from "./pages/Services/PPC";
import Blogs from "./pages/Blogs";
import Blog1 from "./pages/Blogs/Blog1";
import Blog2 from "./pages/Blogs/Blog2";
import Blog3 from "./pages/Blogs/Blog3";
import Blog4 from "./pages/Blogs/Blog4";
import Blog5 from "./pages/Blogs/Blog5";
import Blog6 from "./pages/Blogs/Blog6";
import Blog7 from "./pages/Blogs/Blog7";
import Blog8 from "./pages/Blogs/Blog8";
import Blog9 from "./pages/Blogs/Blog9";
import Blog10 from "./pages/Blogs/Blog10";
import Blog11 from "./pages/Blogs/Blog11";

import ServiceForm from "./pages/ServiceForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import ThankYou from "./pages/ThankYou";
import Packages from "./pages/Packages";
import ProgramLanding from "./pages/ProgramLanding";
import Blog12 from "./pages/Blogs/Blog12";
import Blog13 from "./pages/Blogs/Blog13";
import Blog14 from "./pages/Blogs/Blog14";
import Blog15 from "./pages/Blogs/Blog15";
import Blog16 from "./pages/Blogs/Blog16";
import Blog17 from "./pages/Blogs/Blog17";
import Blog18 from "./pages/Blogs/Blog18";
import Blog19 from "./pages/Blogs/Blog19";
import Blog20 from "./pages/Blogs/Blog20";
import Blog21 from "./pages/Blogs/Blog21";
import Blog22 from "./pages/Blogs/Blog22";
import Blog23 from "./pages/Blogs/Blog23";
import Blog24 from "./pages/Blogs/Blog24";
import Blog25 from "./pages/Blogs/Blog25";
import Blog26 from "./pages/Blogs/Blog26";
import Blog27 from "./pages/Blogs/Blog27";
import Blog28 from "./pages/Blogs/Blog28";
import Blog29 from "./pages/Blogs/Blog29";
import Blog30 from "./pages/Blogs/Blog30";
import Blog31 from "./pages/Blogs/Blog31";
import Blog32 from "./pages/Blogs/Blog32";
import Blog33 from "./pages/Blogs/Blog33";
import Blog34 from "./pages/Blogs/Blog34";
import Blog35 from "./pages/Blogs/Blog35";
import Blog36 from "./pages/Blogs/Blog36";
import Blog37 from "./pages/Blogs/Blog37";
import Blog38 from "./pages/Blogs/Blog38";
import Blog39 from "./pages/Blogs/Blog39";
import Blog40 from "./pages/Blogs/Blog40";
import Blog41 from "./pages/Blogs/Blog41";
import Blog42 from "./pages/Blogs/Blog42";
import Blog43 from "./pages/Blogs/Blog43";
import Blog44 from "./pages/Blogs/Blog44";
import Blog45 from "./pages/Blogs/Blog45";
import Blog46 from "./pages/Blogs/Blog46";
import Blog47 from "./pages/Blogs/Blog47";
import Blog48 from "./pages/Blogs/Blog48";
import Blog49 from "./pages/Blogs/Blog49";
import Blog50 from "./pages/Blogs/Blog50";
import Blog51 from "./pages/Blogs/Blog51";
import Blog52 from "./pages/Blogs/Blog52";
import Blog57 from "./pages/Blogs/Blog57";
import Blog56 from "./pages/Blogs/Blog56";
import Blog55 from "./pages/Blogs/Blog55";
import Blog54 from "./pages/Blogs/Blog54";
import Blog53 from "./pages/Blogs/Blog53";
import Blog58 from "./pages/Blogs/Blog58";
import Blog59 from "./pages/Blogs/Blog59";
import Blog60 from "./pages/Blogs/Blog60";
import Blog61 from "./pages/Blogs/Blog61";
import Blog62 from "./pages/Blogs/Blog62";
import Blog63 from "./pages/Blogs/Blog63";
import Blog64 from "./pages/Blogs/Blog64";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/search-engine-optimization"
          element={<SearchEngineOptmization />}
        />
        <Route
          path="/services/social-media-Optimization"
          element={<SocialMediaOptimization />}
        />
        <Route path="/services/email-marketing" element={<EmailMarketing />} />
        <Route
          path="/services/content-marketing"
          element={<ContentMarketing />}
        />
        <Route path="/services/lead-generation" element={<LeadGeneration />} />
        <Route
          path="/services/programmatic-advertising"
          element={<ProgrammaticAdvertising />}
        />
        <Route path="/services/ppc" element={<PPC />} />

        <Route path="/service-form/:id" element={<ServiceForm />} />

        {/* <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/blogs/the-role-of-seo-in-modern-digital-marketing-strategies"
          element={<Blog1 />}
        />
        <Route
          path="/blogs/10-tips-for-optimizing-your-social-media-presence"
          element={<Blog2 />}
        />
        <Route
          path="/blogs/advanced-ppc-techniques:-taking-your-campaigns-to-the-next-level"
          element={<Blog3 />}
        />
        <Route
          path="/blogs/digital-marketing-in-the-age-of-social-media-:-tips-to-success"
          element={<Blog4 />}
        />
        <Route
          path="/blogs/the-ultimate-guide-to-seo:-tips-and-strategies-to-success"
          element={<Blog5 />}
        />
        <Route
          path="/blogs/seo-and-content-marketing:-a-winning-combination-in-digital-marketing"
          element={<Blog6 />}
        />
        <Route
          path="/blogs/why-content-marketing-is-essential-for-business:-a-deep-dive"
          element={<Blog7 />}
        />
        <Route
          path="/blogs/from-strategy-to-success:-how-infy360-transforms-your-digital-marketing-journey"
          element={<Blog8 />}
        />
        <Route
          path="/blogs/revolutionizing-digital-marketing:-how-infy360-is-pioneering-the-future-of-customer-engagement"
          element={<Blog9 />}
        />
        <Route
          path="/blogs/a-game-changer-in-email-marketing-service"
          element={<Blog10 />}
        />
        <Route
          path="/blogs/internet-marketing-agency-in-the-usa-your-pathway-to-online-triumph"
          element={<Blog11 />}
        />
        <Route
          path="/blogs/infy360-best-seo-agency-in-india-what-makes-us-best"
          element={<Blog12 />}
        />
        <Route
          path="/blogs/turn-likes-into-leads-infy360s-smo-tactics-for-conversion-success"
          element={<Blog13 />}
        />
        <Route
          path="/blogs/infy360-your-ultimate-content-marketing-agency-partner"
          element={<Blog14 />}
        />
        <Route
          path="/blogs/ready-to-dominate-serps-unleash-the-power-of-infy360s-seo-service-for-your-business"
          element={<Blog15 />}
        />
        <Route
          path="/blogs/5-seo-mistakes-that-are-killing-your-website-traffic-and-how-to-fix-them"
          element={<Blog16 />}
        />
        <Route
          path="/blogs/maximizing-roi-with-paid-digital-media-optimization"
          element={<Blog17 />}
        />
        <Route
          path="/blogs/the-ultimate-guide-to-social-media-marketing-in-2024"
          element={<Blog18 />}
        />
        <Route
          path="/blogs/expert-email-marketing-solutions-in-the-usa-drive-results-for-your-business"
          element={<Blog19 />}
        />
        <Route
          path="/blogs/elevate-your-brand-dentity-with-infy360-branding-solutions"
          element={<Blog20 />}
        />
        <Route
          path="/blogs/10-tips-to-boost-your-local-seo-ranking"
          element={<Blog21 />}
        />
        <Route
          path="/blogs/keyword-optimization-strategies-mastering-google-keyword-planner"
          element={<Blog22 />}
        />
        <Route
          path="/blogs/bounce-rate-mastery-expert-tips-for-website-retention"
          element={<Blog23 />}
        />
        <Route
          path="/blogs/the-impact-of-seo-slugs-on-website-ranking-a-deep-dive"
          element={<Blog24 />}
        />
        <Route
          path="/blogs/link-building-strategies-for-2024-a-step-by-step-guide"
          element={<Blog25 />}
        />
        <Route
          path="/blogs/video-marketing-domination-engaging-audiences-with-visual-content"
          element={<Blog26 />}
        />
        <Route
          path="/blogs/personalization-in-email-marketing-crafting-tailored-campaigns-for-success"
          element={<Blog27 />}
        />
        <Route
          path="/blogs/the-8-benefits-of-digital-pr-for-your-business-building-trust-engaging-audiences-and-driving-sales"
          element={<Blog28 />}
        />
        <Route
          path="/blogs/10-proven-techniques-to-encourage-customers-to-write-positive-reviews"
          element={<Blog29 />}
        />
        <Route
          path="/blogs/drive-traffic-to-your-website-with-social-media-optimization"
          element={<Blog30 />}
        />
        <Route
          path="/blogs/local-seo-tips-for-ranking-higher-on-google"
          element={<Blog31 />}
        />

        <Route
          path="/blogs/step-by-step-guide-to-competitive-analysis"
          element={<Blog32 />}
        />
        <Route
          path="/blogs/content-marketing-the-key-to-online-success"
          element={<Blog33 />}
        />
        <Route
          path="/blogs/the-benefits-of-paid-search-marketing-maximize-your-roi-and-grow-your-business"
          element={<Blog34 />}
        />
        <Route
          path="/blogs/local-seo-master-guide-boost-your-business-s-visibility"
          element={<Blog35 />}
        />
        <Route
          path="/blogs/top-pr-agencies-you-should-absolutely-check-out-in-2024"
          element={<Blog36 />}
        />
        <Route
          path="/blogs/5-best-mailchimp-alternatives-to-try-in-2024"
          element={<Blog37 />}
        />
        <Route
          path="/blogs/ai-fued-musk-vs-apple-who-will-win-the-privacy-battle"
          element={<Blog38 />}
        />
        <Route
          path="/blogs/decoding-technical-seo-insider-tips-from-the-best-agency-in-the-uk"
          element={<Blog39 />}
        />
        <Route
          path="/blogs/do-you-know-your-websites-weak-points-find-out-with-an-seo-audit-service"
          element={<Blog40 />}
        />
        <Route
          path="/blogs/5-proven-strategies-a-usa-performance-marketing-agency-uses-for-effective-lead-generation"
          element={<Blog41 />}
        />
        <Route
          path="/blogs/are-you-missing-out-on-leads-learn-how-smo-can-drive-targeted-traffic"
          element={<Blog42 />}
        />
        <Route
          path="/blogs/content-marketing-magic-turning-readers-into-customers"
          element={<Blog43 />}
        />
        <Route
          path="/blogs/4-kpis-you-should-care-about-to-ace-your-business-marketing"
          element={<Blog44 />}
        />
        <Route
          path="/blogs/google-ppc-agency-in-india-stop-wasting-budget-start-generating-leads"
          element={<Blog45 />}
        />
        <Route
          path="/blogs/paid-digital-media-optimization-are-you-ready-to-take-your-smm-service-to-the-next-level"
          element={<Blog46 />}
        />
        <Route
          path="/blogs/11-proven-ideas-to-improve-roi-in-your-online-marketing-campaigns"
          element={<Blog47 />}
        />
        <Route
          path="/blogs/video-seo-marketing-tips-how-to-optimize-for-youtube-in-2024"
          element={<Blog48 />}
        />
        <Route
          path="/blogs/enterprise-marketing-definition-and-strategies-a-complete-guide"
          element={<Blog49 />}
        />
        <Route
          path="/blogs/plagiarism-vs-seo-why-copying-content-is-a-big-crime-for-rankings"
          element={<Blog50 />}
        />
        <Route
          path="/blogs/how-to-use-social-media-effectively-for-small-businesses-in-2024"
          element={<Blog51 />}
        />
        <Route
          path="/blogs/mastering-return-on-ad-spend-defining-roas-and-why-it-matters"
          element={<Blog52 />}
        />
        <Route path="/blogs/ppc-marketing-agency" element={<Blog53 />} />
        <Route
          path="/blogs/lead-generation-agency-in-uk"
          element={<Blog54 />}
        />
        <Route
          path="/blogs/how-content-marketing-agencies-in-the-uk-drive-results-expert-insights"
          element={<Blog55 />}
        />
        <Route
          path="/blogs/generate-leads-like-a-pro-top-10-strategies-for-success-leads-campaign"
          element={<Blog56 />}
        />
        <Route
          path="/blogs/google-ads-ptimization-checklist-7-insider-tips-to-beat-your-competitors"
          element={<Blog57 />}
        />
        <Route
          path="/blogs/youtube-marketing-domination-engaging-audiences-with-video-content"
          element={<Blog58 />}
        />
        <Route
          path="/blogs/how-to-maximize-the-roi-with-a-programmatic-ad-agency-in-the-usa"
          element={<Blog59 />}
        />
        <Route
          path="/blogs/seo-for-small-business-a-starter-guide"
          element={<Blog60 />}
        />
        <Route
          path="/blogs/10-powerful-instagram-marketing-strategies-to-follow"
          element={<Blog61 />}
        />
        <Route
          path="/blogs/best-off-page-seo-techniques-that-boosts-organic-traffic"
          element={<Blog62 />}
        />
        <Route
          path="/blogs/the-shift-from-search-engines-to-social-media-a-new-paradigm-for-seo"
          element={<Blog63 />}
        />
        <Route
          path="/blogs/how-combining-seo-and-cro-can-supercharge-your-digital-strategy"
          element={<Blog64 />}
        /> */}
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digital-marketing-proposal" element={<Landing />} />

        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/seo-packages" element={<Packages />} />

        <Route
          path="/student-ambassador-programme"
          element={<ProgramLanding />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
};

export default App;
