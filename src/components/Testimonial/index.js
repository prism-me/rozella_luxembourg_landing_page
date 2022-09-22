import React, { Component } from "react";
import _data from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    return (
      <React.Fragment>
        <section className={"testimonial-section  ptb-50"}>
          <div className="container">
            <div className="owl-carousel owl-theme client-testimonial dot-indicator">
              {(this.state.testimonial.comments || []).map(
                (comment, _index) => {
                  return (
                    <div className="item" key={comment.name}>
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <h2 className="maintitle">Guests of Honor</h2>
                          <hr className="hrstyle" />
                          <h3 className="subtitle">H.E Mohamed Al Sahlawi</h3>
                          <p className="detail">
                            UAE Ambassador to the Kingdom of Belgium, Grand
                            Duchy of Luxembourg, and the European Union
                          </p>
                        </div>
                        <div className="col-md-6">
                          {/* <img
                            src="img/images/guest.png"
                            width="500"
                            alt="about us"
                            className="img-fluid"
                          /> */}
                          <LazyLoadImage
                            placeholderSrc="img/images/guest.png"
                            effect="blur"
                            width="500"
                            alt="about us"
                            className="img-fluid"
                            src="img/images/guest.png"
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonial;
