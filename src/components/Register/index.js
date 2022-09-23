import React, { Component } from "react";
import _data from "../../data";
import { CountryCode } from "../../data/countries";

class Register extends Component {
  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      contact: _data.contact,
    });

    this.setState({
      countrycodeData: CountryCode,
    });
  }

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
                  <p>
                    Register now & gain access to all key players in the Dubai
                    real estate market under one roof.
                  </p>
                </div>
                <div className="footer-address">
                  <ul>
                    <li>
                      <span>Meet Top Tier</span> Investors, Buyers & Regulators
                    </li>
                    <li>
                      <span>Get Briefed</span> on The Latest Trends and
                      Opportunities
                    </li>
                    <li>
                      <span>Discuss Business</span> with the Right People
                    </li>
                    <li>
                      <span>Find & Grab</span> Business Opportunities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <form id="contactForm1" className="contact-us-form">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email Address"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-2 pr-0">
                      <div className="form-group">
                        <select
                          name="country_code"
                          className="form-control"
                          required="required"
                        >
                          {CountryCode.map((x, i) => (
                            <option value={x.dial_code} key={i}>
                              {x.dial_code} - {x.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-10 pl-0">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="radio"
                          id="agreement"
                          name="agreement"
                          className="mr-2"
                          value="agree"
                        />
                        <label for="agreement">
                          I accept the terms of the User Agreement and Privacy
                          Policy
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mt-3">
                      <button
                        type="submit"
                        className="register-btn"
                        id="btnContactUs"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-message"></p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Register;
