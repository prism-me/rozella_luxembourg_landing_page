import React from "react";
import _data from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Speakers extends React.Component {
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
      price: _data.speaker,
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
              {(this.state.price.packages || []).map((x, index) => {
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
                        <p>{x.detail}</p>
                        <div className="pricing-img mt-3">
                          {/* <img
                            src="img/images/speaker1.png"
                            alt="pricing img"
                            className="img-fluid"
                          /> */}
                          <LazyLoadImage
                            placeholderSrc={x.image}
                            effect="blur"
                            alt="pricing img"
                            className="img-fluid"
                            src={x.image}
                          />
                        </div>
                        <p className="speakertitle">{x.name}</p>
                        <p className="speakersubtitle">{x.designation}</p>
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
export default Speakers;
