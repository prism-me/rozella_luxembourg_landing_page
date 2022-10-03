import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  {
    title: "Sobha Hartland",
    image: "img/images/SOBHA_HARTLAND1.jpg",
  },
  {
    title: "Sobha Hartland",
    image: "img/images/SOBHA_HARTLAND2.jpg",
  },
  {
    title: "Sobha Hartland",
    image: "img/images/SOBHA_HARTLAND3.jpg",
  },
  {
    title: "Creek Vistas",
    image: "img/images/CREEK_VISTAS1.jpg",
  },
  {
    title: "Creek Vistas",
    image: "img/images/CREEK_VISTAS2.jpg",
  },
  {
    title: "Creek Vistas",
    image: "img/images/CREEK_VISTAS3.jpg",
  },
  {
    title: "Creek Vistas",
    image: "img/images/CREEK_VISTAS4.jpg",
  },
  {
    title: "Gardenia Villas",
    image: "img/images/GARDENIA_VILLAS1.jpg",
  },
  {
    title: "Gardenia Villas",
    image: "img/images/GARDENIA_VILLAS2.jpg",
  },
  {
    title: "Gardenia Villas",
    image: "img/images/GARDENIA_VILLAS3.jpg",
  },
  {
    title: "Gardenia Villas",
    image: "img/images/GARDENIA_VILLAS4.jpg",
  },
  {
    title: "Waterfront Villas",
    image: "img/images/WATERFRONT_VILLAS1.jpg",
  },
  {
    title: "Waterfront Villas",
    image: "img/images/WATERFRONT_VILLAS2.jpg",
  },
  {
    title: "Waterfront Villas",
    image: "img/images/WATERFRONT_VILLAS3.jpg",
  },
  {
    title: "Waterfront Villas",
    image: "img/images/WATERFRONT_VILLAS4.jpg",
  },
];

class Gallery extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
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
    const { photoIndex, isOpen } = this.state;
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
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass="listStyle"
            >
              {(images || []).map((x, index) => {
                return (
                  <div
                    className="item"
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => this.setState({ isOpen: true })}
                  >
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex].image}
                // nextSrc={images[(photoIndex + 1) % images.length].image}
                // prevSrc={
                //   images[(photoIndex + images.length - 1) % images.length].image
                // }
                onCloseRequest={() => this.setState({ isOpen: false })}
                // onMovePrevRequest={() =>
                //   this.setState({
                //     photoIndex:
                //       (photoIndex + images.length - 1).image % images.length,
                //   })
                // }
                // onMoveNextRequest={() =>
                //   this.setState({
                //     photoIndex: (photoIndex + 1).image % images.length,
                //   })
                // }
              />
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
