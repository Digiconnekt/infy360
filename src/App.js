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

import ServiceForm from "./pages/ServiceForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import ThankYou from "./pages/ThankYou";
import ProgramLanding from "./pages/ProgramLanding";
import Branding from "./pages/Services/Branding";

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
        <Route path="/services/branding" element={<Branding />} />

        <Route path="/service-form/:id" element={<ServiceForm />} />

        <Route path="/quote" element={<Proposal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digital-marketing-proposal" element={<Landing />} />

        <Route path="/thank-you" element={<ThankYou />} />

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
