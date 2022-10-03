import React, { Component } from "react";
import _data from "../../data";
import ZohoBannerForm from "../ZohoBannerForm/ZohoBannerForm";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="register" className={"contact-us ptb-50 "}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading">
                  <h3 className="title">
                    Reserve<span> Your Seat</span>
                  </h3>
                  <p style={{ color: "#3c3c3c" }}>
                    Register now & gain access to all key players in the Dubai
                    real estate market under one roof.
                  </p>
                </div>
                <div className="footer-address">
                  <ul>
                    <li>
                      <span>Top Tier Developers ,</span> High end service
                      management and Regulators
                    </li>
                    <li>
                      <span>Get Briefed</span> on the latest project updates and
                      Real Estate opportunities
                    </li>
                    {/* <li>
                      <span>Discuss Business</span> with the Right People
                    </li> */}
                    <li>
                      <span>Find & Grab</span> of Real Estate investment
                      opportunities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <ZohoBannerForm />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Register;
