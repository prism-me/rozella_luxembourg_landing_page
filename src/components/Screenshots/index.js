import React from "react";
import _data from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="about" className="screenshots-section ptb-50">
          <div className="container">
            <div className="mb-5">
              <h2 className="maintitle">About The Event</h2>
              <hr className="hrstyle" />
              <p className="detail">
                This one-of-a-kind event has something for every stakeholder in
                the real estate market. It would bring all the key players in
                the real estate market under one roof, paving the way for
                greater collaboration. In addition to attracting 150+ investors,
                it would also attract banks, their subsidiaries, and officials
                from the chamber of commerce. This would allow the sponsors to
                attract relevant people and showcase their services to those in
                need of them. It is a great opportunity for companies to gain
                goodwill, brand awareness, networking opportunities, and leads
                as well. The event will host real estate professionals, and
                keynote speakers including Mr. Mohamed Al Sahlawi, His
                Excellency the UAE Ambassador to Belgium, highlighting the
                current topics and opportunities in the real estate industry in
                Dubai. Established in 2016 as managing private investors
                portfolio by Mr. Mohammed Hamza, Rozella takes pride in its own
                way of providing endless real estate services that serve its
                investors and keep real estate investments at minimal risk.
                Rozella provides three business models that guarantee the
                maximum service for its clients
              </p>
            </div>
          </div>
          {/* <div className="screen-slider-content my-5">
              <div className="screenshot-frame"></div>
              <div className="screen-carousel owl-carousel owl-theme dot-indicator"> */}
          <LazyLoadImage
            placeholderSrc="img/images/eventimg.png"
            effect="blur"
            className="img-fluid"
            src="img/images/eventimg.png"
          />
          {/* <img
            src="img/images/eventimg.png"
            className="img-fluid"
            alt="screenshots"
          /> */}
          {/* <img
                  src="img/images/slider.png"
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src="img/images/slider.png"
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src="img/images/slider.png"
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src="img/images/slider.png"
                  className="img-fluid"
                  alt="screenshots"
                />
                <img
                  src="img/images/slider.png"
                  className="img-fluid"
                  alt="screenshots"
                />
              </div>
            </div> */}
        </section>
      </React.Fragment>
    );
  }
}
