import React, { Component } from "react";
import Header from "../components/Header/header";
import Banner from "../components/Banner/Banner";
import CeoSection from "../components/CeoSection";
import Event from "../components/Event";
import RegisterSection from "../components/Register";
import Testimonial from "../components/Testimonial";
import Speakers from "../components/Speakers";
import Partners from "../components/Partners";
import AboutSection from "../components/About";
import VideoSection from "../components/Video";
import Gallery from "../components/Gallery";
import Brokers from "../components/Brokers";
import MapSection from "../components/MapSection";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Banner />
          <RegisterSection />
          <Event />
          <CeoSection />
          <Testimonial />
          <Speakers />
          <Partners />
          <AboutSection />
          <VideoSection />
          <Gallery />
          <Brokers />
        </div>
        <MapSection />
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
