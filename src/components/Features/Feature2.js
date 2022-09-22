import React from "react";

class Feature extends React.Component {
  state = {
    text: `This model has been created for those who don't have the
    luxury of time or know-how, therefore Rozella has taken
    the lead of providing all the necessary needs following
    your settlement process by offering the following services
    for free, to bring ease to our investors nor our end users`,
    isReadMore: true,
    text2: `This model we present for investors seeking profits and
    stability by shaping our products in a way that allows
    them to have the maximum income in the market with
    reliable assistance that can be used for other purposes,
    where we guarantee these investments with contractual
    terms makes every move clear and transparent between
    Rozella and its investors, therefore we are providing the
    following additional services.`,
    isReadMore2: true,
    text3: `As we know stability is fragile. In life and business, we
    often have to pivot to achieve and maintain stability, and
    so much is at risk if we're not prepared to maneuver in
    time. Rozella has worked in Real Estate for the last 6
    years and we have experience with every type of situation.
    This includes the need to liquidate a property asset in
    order to engage in other business activities or quickly
    reduce market losses during difficult times. We have
    developed alliances with banks and fund entities, based on
    our trusted reputation, successful investment record, and
    the status of our clientele, in order to maintain
    investment value and serve clients’ needs no matter what
    ups and downs the economy faces.`,
    isReadMore3: true,
  };

  toggleReadMore = () => {
    this.setState({ isReadMore: !this.state.isReadMore });
  };

  toggleReadMore2 = () => {
    this.setState({ isReadMore2: !this.state.isReadMore2 });
  };
  toggleReadMore3 = () => {
    this.setState({ isReadMore3: !this.state.isReadMore3 });
  };

  render() {
    const { isReadMore, text, isReadMore2, text2, isReadMore3, text3 } =
      this.state;
    return (
      <React.Fragment>
        <div id="features" className={"feature-section pb-50"}>
          <div className="container">
            <div className="mb-5">
              <p className="mainsubtitle">About</p>
              <h2 className="maintitle">Rozella Real Estate Brokers</h2>
              <hr className="hrstyle" />
              <p className="detail">
                Established in 2016 as managing private investors portfolio by
                Mr. Mohammed Hamza, Rozella takes pride in its own way of
                providing endless real estate services that serve its investors
                and keep real estate investments at minimal risk. Rozella
                provides three business models that guarantee the maximum
                service for its clients
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="iconDiv mr-4">
                    <div className="icon icon-shape icon-color-2">
                      <img
                        src="img/images/lifesetup.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>The Life Setup Model</h5>
                    <p className="mb-0">
                      {isReadMore ? text.slice(0, 200) : text}
                    </p>
                    <button
                      className="viewdetailsbtn"
                      onClick={this.toggleReadMore}
                    >
                      {isReadMore ? "View More" : " Show Less"}{" "}
                      <span className="ti-arrow-right btnicon"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="iconDiv mr-4">
                    <div className="icon icon-shape icon-color-2">
                      <img
                        src="img/images/investment.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>The Investment Packages</h5>
                    <p className="mb-0">
                      {isReadMore2 ? text2.slice(0, 200) : text2}
                    </p>
                    <button
                      className="viewdetailsbtn"
                      onClick={this.toggleReadMore2}
                    >
                      {isReadMore2 ? "View More" : " Show Less"}{" "}
                      <span className="ti-arrow-right btnicon"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="iconDiv mr-4">
                    <div className="icon icon-shape icon-color-2">
                      <img
                        src="img/images/property.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="icon-text">
                    <h5>Covering Property Losses</h5>
                    <p className="mb-0">
                      {isReadMore3 ? text3.slice(0, 200) : text3}
                    </p>
                    <button
                      className="viewdetailsbtn"
                      onClick={this.toggleReadMore3}
                    >
                      {isReadMore3 ? "View More" : " Show Less"}{" "}
                      <span className="ti-arrow-right btnicon"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;
