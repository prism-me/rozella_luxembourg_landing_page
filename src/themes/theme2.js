import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection2";
import PromoSection from "../components/PromoSection/Promo2";
import AboutSection from "../components/AboutUs/AboutUs2";
import FeatureSection from "../components/Features/Feature2";
import VideoSection from "../components/Video";
import PricingSection from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Screenshots from "../components/Screenshots";
import FaqSection from "../components/Faq";
import TeamMember from "../components/TeamMember";
import Partners from "../components/Partners/index";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import MapSection from "../components/Features/Feature6";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <ContactSection />
          <Screenshots />
          <PromoSection />
          <Testimonial />
          <PricingSection />
          <Partners />
          <AboutSection />
          <FeatureSection />
          <VideoSection showDownloadBtn={true} />
          <TeamMember />
          <FaqSection />
        </div>
        <MapSection />
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
