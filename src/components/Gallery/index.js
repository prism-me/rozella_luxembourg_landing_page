import React from "react";
import _data from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      teamMember: _data.gallery,
    });
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
      },
    };
    return (
      <React.Fragment>
        <section id="team" className="team-member-section pb-50 pt-3">
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
              itemClass="listStyle"
            >
              {(this.state.teamMember.members || []).map((x, index) => {
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
                          placeholderSrc={x.image}
                          effect="blur"
                          alt="Team Members"
                          className="img-fluid teamImgstyle"
                          src={x.image}
                        />
                      </div>
                      <div className="team-info text-white d-flex flex-column align-items-center justify-content-center">
                        <h5 className="mb-2">{x.title}</h5>
                        <h6>{x.subtitle}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
