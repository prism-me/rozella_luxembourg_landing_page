import React from "react";
import _data from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="pricing" className={"package-section pb-50"}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mb-3">
                <h2 className="maintitle">Key Speakers</h2>
                <hr className="hrstyle" />
              </div>
            </div>
            <div
              className="owl-carousel owl-theme speaker-testimonial ptb-50 px-5"
              style={{
                backgroundImage: "url('img/images/speakerbg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              {(this.state.price.packages || []).map((_package, index) => {
                return (
                  <div className="item" key={index}>
                    <div className={"card text-center single-pricing-pack"}>
                      <div className="pricing-img mt-5 mb-2">
                        {/* <img
                          src="img/images/quotemarks.png"
                          alt="pricing img"
                          className="img-fluid"
                        /> */}
                        <LazyLoadImage
                          placeholderSrc="img/images/quotemarks.png"
                          effect="blur"
                          alt="pricing img"
                          className="img-fluid"
                          src="img/images/quotemarks.png"
                        />
                      </div>
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <div className="pricing-img mt-3">
                          {/* <img
                            src="img/images/speaker1.png"
                            alt="pricing img"
                            className="img-fluid"
                          /> */}
                          <LazyLoadImage
                            placeholderSrc="img/images/speaker1.png"
                            effect="blur"
                            alt="pricing img"
                            className="img-fluid"
                            src="img/images/speaker1.png"
                          />
                        </div>
                        <p className="speakertitle">Jackie Jackson</p>
                        <p className="speakersubtitle">Project Manager</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
