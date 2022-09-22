import React from "react";
import { connect } from "react-redux";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section id="download" className="video-promo">
          <div className="container">
            <div className="mb-5">
              <h2 className="maintitle">Video and Photo Galleries</h2>
              <hr className="hrstyle" />
            </div>
            <div className="container">
              <div
                className="row justify-content-center"
                style={{
                  backgroundImage: "url('img/images/videoimg.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  clear: "both",
                  padding: "15rem 0",
                }}
              >
                <div className="col-md-6">
                  <div className="video-promo-content mt-4 text-center">
                    <a
                      href="https://www.youtube.com/watch?v=9No-FiEInLA"
                      className="popup-youtube video-play-icon d-inline-block"
                    >
                      <span className="ti-control-play"></span>{" "}
                    </a>
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

export default connect((state) => ({
  state,
}))(Video);
