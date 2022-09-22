import React from "react";
import { connect } from "react-redux";

class HeroSection extends React.Component {
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
        <section
          className="hero-section ptb-120 background-img"
          style={{
            backgroundImage: "url('img/images/banner.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-8 col-lg-8">
                <div className="hero-content-left text-white mt-5">
                  <h1 className="bannersubheading">Rozella Presents</h1>
                  <h2 className="bannerheading">Real Estate Giants</h2>
                  <h1 className="bannersubheading">in Luxembourg</h1>
                  <p className="detail">
                    6th - 8th October 2022 <br />{" "}
                    <span style={{ borderBottom: "2px solid #FFFFFF" }}>
                      Le Royal Hotels and Resorts, 12 Bd Royal, 2449 Luxembourg
                    </span>
                  </p>

                  <a href="#" className="bannerBtn">
                    Get Your Free Ticket Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(HeroSection);
