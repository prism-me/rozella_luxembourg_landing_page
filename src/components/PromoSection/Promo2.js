import React from "react";
import { connect } from "react-redux";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className={"promo-section ptb-100"}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-content-right">
                  <img
                    src="img/images/ceo.png"
                    width="500"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-heading mb-4">
                  <h2 className="maintitle">
                    CEO’s Message
                  </h2>
                  <hr className="hrstyle" />
                </div>
                <p className="detail">
                  This event is the first of its kind to introduce Dubai’s real estate investments to the European Market providing knowledge and statistics about the huge growth that is happening in the region and how profitable it could be for investors linked to other sectors related to real estate stating all facts and benefits of having a Dubai lifestyle. The event will potentially build a bridge between Europe and the United Arab Emirates in exchange for investments and culture. We are proud and delighted to engage in this huge project with more than 150 investors involved alongside the Arab Belgian Luxembourg chamber of commerce (ABLCC) and your kind corporations, We aim to bring investors, banks, the chamber of commerce, and all the subsidiaries under one roof, providing unlimited networking, collaboration, and growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(PromoSection);
