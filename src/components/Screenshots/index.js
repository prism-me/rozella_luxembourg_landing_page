import React from "react";
import _data from "../../data";

export default class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="screenshots"
          className="screenshots-section ptb-100"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="section-heading text-center">
                  <h2>
                    About The Event
                  </h2>
                  <hr className="hrstyle" />
                  <p className="lead">
                    This one-of-a-kind event has something for every stakeholder in the real estate market. It would bring all the key players in the real estate market under one roof, paving the way for greater collaboration. In addition to attracting 150+ investors, it would also attract banks, their subsidiaries, and officials from the chamber of commerce. This would allow the sponsors to attract relevant people and showcase their services to those in need of them. It is a great opportunity for companies to gain goodwill, brand awareness, networking opportunities, and leads as well. The event will host real estate professionals, and keynote speakers including Mr. Mohamed Al Sahlawi, His Excellency the UAE Ambassador to Belgium, highlighting the current topics and opportunities in the real estate industry in Dubai.
                  </p>
                </div>
              </div>
            </div>
            <div className="screen-slider-content my-5">
              <div className="screenshot-frame"></div>
              <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                <img src="img/images/slider.png" className="img-fluid" alt="screenshots" />
                <img src="img/images/slider.png" className="img-fluid" alt="screenshots" />
                <img src="img/images/slider.png" className="img-fluid" alt="screenshots" />
                <img src="img/images/slider.png" className="img-fluid" alt="screenshots" />
                <img src="img/images/slider.png" className="img-fluid" alt="screenshots" />
                <img src="img/images/slider.png" className="img-fluid" alt="screenshots" />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
