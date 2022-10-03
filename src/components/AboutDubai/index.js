import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "img/images/about1.jpg",
  "img/images/about2.jpg",
  "img/images/about1.jpg",
  "img/images/about2.jpg",
];

class AboutDubai extends React.Component {
  state = {
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
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
                      className="col-md-6 pl-0 py-0 imgAboutMblspace"
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
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                      }
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex:
                            (photoIndex + images.length - 1) % images.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % images.length,
                        })
                      }
                    />
                  )}
                  {/* <div className="col-md-6 pl-0 py-0 imgAboutMblspace">
                    <LazyLoadImage
                      placeholderSrc="img/images/about2.jpg"
                      effect="blur"
                      alt="about us"
                      className="img-fluid"
                      src="img/images/about2.jpg"
                    />
                  </div>
                  <div className="col-md-6 pl-0 py-0 imgAboutMblspace">
                    <LazyLoadImage
                      placeholderSrc="img/images/about1.jpg"
                      effect="blur"
                      alt="about us"
                      className="img-fluid"
                      src="img/images/about1.jpg"
                    />
                  </div>
                  <div className="col-md-6 pl-0 py-0 imgAboutMblspace">
                    <LazyLoadImage
                      placeholderSrc="img/images/about2.jpg"
                      effect="blur"
                      alt="about us"
                      className="img-fluid"
                      src="img/images/about2.jpg"
                    />
                  </div> */}
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
