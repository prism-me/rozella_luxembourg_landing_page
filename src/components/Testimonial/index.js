import React, { Component } from "react";
import _data from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      testimonial: _data.testimonial,
    });
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
      },
    };
    return (
      <React.Fragment>
        <section className={"testimonial-section  ptb-50"}>
          <div className="container">
            <Carousel
              responsive={responsive}
              swipeable={true}
              showDots={true}
              arrows={false}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              draggable={true}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
            >
              {(this.state.testimonial.comments || []).map(
                (comment, _index) => {
                  return (
                    <div
                      className="item"
                      style={{ marginBottom: "2rem" }}
                      key={comment.name}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <h2 className="maintitle">Guests of Honor</h2>
                          <hr className="hrstyle" />
                          <h3 className="subtitle">{comment.name}</h3>
                          <p className="detail">{comment.comment}</p>
                        </div>
                        <div className="col-md-6 guestimgwraper">
                          {/* <img
                            src="img/images/guest.png"
                            width="500"
                            alt="about us"
                            className="img-fluid"
                          /> */}
                          <LazyLoadImage
                            placeholderSrc={comment.image}
                            effect="blur"
                            width="500"
                            alt="about us"
                            className="img-fluid"
                            src={comment.image}
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </Carousel>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonial;
