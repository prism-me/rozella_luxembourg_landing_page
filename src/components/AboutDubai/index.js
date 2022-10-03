import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "img/images/aboutdubai1.jpg",
  "img/images/aboutdubai2.jpg",
  "img/images/aboutdubai3.jpg",
  "img/images/aboutdubai4.jpg",
];

class AboutDubai extends React.Component {
  state = {
    text: `Dubai property market started to pick up soon after HRH Sheikh Mohammed Bin Rashid Al Maktoum, the then crown prince general of Dubai declared freehold rights for owning property for non-national back in 2022. Property prices almost quadrupled between 2002 and 2008 and that’s when the financial crisis hit, plunging the world into the most severe recession witnessed for decades.\n

    The crisis had an adverse effect on Dubai real estate as well but the city has always bounced back stronger. The leadership put a robust legal and regulatory framework in place which has been instrumental in its rapid recovery in the wake of the 2020 Covid-19 pandemic, fueled by the rapid response to the health crisis and Expo 2020 Dubai.\n
    
    Dubai leadership has laid the foundations for robust growth and equipped the nation with the resilience required to navigate uncharted waters. The future looks promising with ever-increasing demand, making the Dubai real estate market ripe for investment.`,
    isReadMore: true,
    photoIndex: 0,
    isOpen: false,
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
    const { isReadMore, text, photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <section className="about-us pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h2 className="maintitle">About Dubai</h2>
                <hr className="hrstyle" />
                <p className="detail">
                  {isReadMore ? text.slice(0, 550) : text}
                </p>
                <button
                  className="viewdetailsbtn"
                  onClick={this.toggleReadMore}
                >
                  {isReadMore ? "View More" : " Show Less"}{" "}
                  <span className="ti-arrow-right btnicon"></span>
                </button>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  {images.map((x, i) => (
                    <div
                      className="col-md-6 col-sm-6 col-6 pl-0 py-0 imgAboutMblspace"
                      key={i}
                    >
                      {/* <img
                        src="img/images/about1.png"
                        width="500"
                        alt="about us"
                        className="img-fluid"
                      /> */}
                      <LazyLoadImage
                        placeholderSrc={x}
                        effect="blur"
                        alt="about us"
                        className="img-fluid"
                        style={{ cursor: "pointer" }}
                        src={x}
                        onClick={() => this.setState({ isOpen: true })}
                      />
                    </div>
                  ))}

                  {isOpen && (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      // nextSrc={images[(photoIndex + 1) % images.length]}
                      // prevSrc={
                      //   images[(photoIndex + images.length - 1) % images.length]
                      // }
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      // onMovePrevRequest={() =>
                      //   this.setState({
                      //     photoIndex:
                      //       (photoIndex + images.length - 1) % images.length,
                      //   })
                      // }
                      // onMoveNextRequest={() =>
                      //   this.setState({
                      //     photoIndex: (photoIndex + 1) % images.length,
                      //   })
                      // }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutDubai;
