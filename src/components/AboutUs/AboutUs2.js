import React from "react";

class About extends React.Component {
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
        <section id="about" className="about-us ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <p className="mainsubtitle">
                  About
                </p>
                <h2 className="maintitle">
                  Sobha Realty
                </h2>
                <hr className="hrstyle" />
                <p className="detail">
                  Established in 1976 as an interior decoration firm in Oman by Mr. PNC Menon, Sobha Realty has grown into one of the largest and most trusted names in real estate. Sobha is one of the leading luxurious developers in the region, its unique way of designing and excellent finishing makes its value in today’s market. Sobha Realty brings you an exquisite and rare collection of wanted real estate at the most primary locations in the world, offering unmatched experience to those who seek the finest way of living including an eclectic combination of royalty and modern-day designs. Sobha Hartland is an 8 million sq. ft. waterfront community of luxurious apartments, beautiful villas, and high-end townhouses with two international schools located in H.H. Mohammed Bin Rashid City.
                </p>
              </div>
              <div className="col-md-5">
                <img
                  src="img/images/about.png"
                  width="500"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
