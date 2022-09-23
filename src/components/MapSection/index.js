import React from "react";

class MapSection extends React.Component {
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
        <section id="features" className="map-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.747325925281!2d55.271648214326845!3d25.178008238658876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69551f104233%3A0x30c0b760375700f1!2sRozella%20Real%20Estae!5e0!3m2!1sen!2s!4v1660303340990!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: "0", objectFit: "cover" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-lg-6 col-md-6 venu-wrape">
                <div className="venu-details">
                  <p className="mainsubtitle">Register here for the Event</p>
                  <h2 className="maintitle">Real Estate Giants</h2>
                  <hr className="hrstyle" />
                  <h3 className="title">Date:</h3>
                  <p className="subtitle">6-8 October, 2022</p>
                  <h3 className="title">Venue:</h3>
                  <p className="subtitle">
                    Le Royal Hotels and Resorts, 12 Bd Royal, 2449 Luxembourg
                  </p>
                  <h3 className="title">Tel:</h3>
                  <p className="subtitle">+3522416161</p>
                  <h3 className="title">RSVP:</h3>
                  <p className="subtitle">
                    Ms.Melanny Alvarez - +971 50 602 6664
                    Melanny.a@rozellarealestate.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default MapSection;
