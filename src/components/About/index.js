import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class About extends React.Component {
  state = {
    text: ` Established in 1976 as an interior decoration firm in Oman by
    Mr. PNC Menon, Sobha Realty has grown into one of the largest
    and most trusted names in real estate. Sobha is one of the
    leading luxurious developers in the region, its unique way of
    designing and excellent finishing makes its value in today’s
    market. Sobha Realty brings you an exquisite and rare
    collection of wanted real estate at the most primary locations
    in the world, offering unmatched experience to those who seek
    the finest way of living including an eclectic combination of
    royalty and modern-day designs. Sobha Hartland is an 8 million
    sq. ft. waterfront community of luxurious apartments,
    beautiful villas, and high-end townhouses with two
    international schools located in H.H. Mohammed Bin Rashid
    City.`,
    isReadMore: true,
  };

  toggleReadMore = () => {
    this.setState({ isReadMore: !this.state.isReadMore });
  };

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    const { isReadMore, text } = this.state;
    return (
      <React.Fragment>
        <section className="about-us pb-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 col-sm-12">
                <p className="mainsubtitle">About</p>
                <h2 className="maintitle">Sobha Realty</h2>
                <hr className="hrstyle" />
                <p className="detail">
                  {isReadMore ? text.slice(0, 250) : text}
                </p>
                <button
                  className="viewdetailsbtn"
                  onClick={this.toggleReadMore}
                >
                  {isReadMore ? "View More" : " Show Less"}{" "}
                  <span className="ti-arrow-right btnicon"></span>
                </button>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-md-6 pl-0 py-0 imgAboutMblspace">
                    {/* <img
                      src="img/images/about1.png"
                      width="500"
                      alt="about us"
                      className="img-fluid"
                    /> */}
                    <LazyLoadImage
                      placeholderSrc="img/images/about1.jpg"
                      effect="blur"
                      width="500"
                      alt="about us"
                      className="img-fluid"
                      src="img/images/about1.jpg"
                    />
                  </div>
                  <div className="col-md-6 pl-0 py-0 imgAboutMblspace">
                    {/* <img
                      src="img/images/about2.png"
                      width="500"
                      alt="about us"
                      className="img-fluid"
                    /> */}
                    <LazyLoadImage
                      placeholderSrc="img/images/about2.jpg"
                      effect="blur"
                      width="500"
                      alt="about us"
                      className="img-fluid"
                      src="img/images/about2.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
