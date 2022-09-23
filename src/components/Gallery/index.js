import React from "react";
import _data from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMember: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      teamMember: _data.teamMember,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="team" className="team-member-section pb-50 pt-3">
          <div className="container">
            <div className="owl-carousel owl-theme event-gallery dot-indicator">
              {(this.state.teamMember.members || []).map((member, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="single-team-member position-relative">
                      <div className="team-image">
                        {/* <img
                          src="img/images/galleryimg.png"
                          alt="Team Members"
                          className="img-fluid teamImgstyle"
                        /> */}
                        <LazyLoadImage
                          placeholderSrc="img/images/galleryimg.png"
                          effect="blur"
                          alt="Team Members"
                          className="img-fluid teamImgstyle"
                          src="img/images/galleryimg.png"
                        />
                      </div>
                      <div className="team-info text-white d-flex flex-column align-items-center justify-content-center">
                        <h5 className="mb-2">Photo Gallery</h5>
                        <h6>Lorem Ipsum Event</h6>
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

export default Gallery;
