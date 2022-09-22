import React, { Component } from "react";
import { connect } from "react-redux";
import { submitContact } from "../../actions/index";
import _data from "../../data";

import { CountryCode } from "../../data/countries";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country_code: "",
      phone: "",
      agreement: "",
      disableContactBtn: false,
      contactBtnText: "Send Message",
      contact: {},
      countrycodeData: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * When we click on Send button, changeBtnText function will help to change text
   * @param contactBtnText
   */
  changeBtnText = (contactBtnText) => {
    this.setState({ contactBtnText });
  };

  /**
   * Get all form data and set to the state
   * @param contactBtnText
   */
  handleFormValueChange(inputName, event) {
    let stateValue = {};
    stateValue[inputName] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(stateValue);
  }

  /**
   * Submit the form and dispatch to the store
   * @param contactBtnText
   */
  handleSubmit(event) {
    event.preventDefault();

    // disable the button
    this.setState({ disableContactBtn: true });

    // get action
    const contactAction = submitContact(this.state);

    // Dispatch the contact from data
    this.props.dispatch(contactAction);

    // added delay to change button text to previous
    setTimeout(
      function () {
        // enable the button
        this.setState({ disableContactBtn: false });

        // change to button name
        this.changeBtnText("Send Message");

        // get action again to update state
        const contactAction = submitContact(this.state);

        // Dispatch the contact from data
        this.props.dispatch(contactAction);

        // clear form data
        this.setState({
          name: "",
          email: "",
          phone: "",
          agreement: "",
          country_code: "",
        });
      }.bind(this),
      3000
    );
  }

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
                <form
                  method="POST"
                  id="contactForm1"
                  className="contact-us-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          value={this.state.name}
                          onChange={(e) =>
                            this.handleFormValueChange("name", e)
                          }
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
                          value={this.state.email}
                          onChange={(e) =>
                            this.handleFormValueChange("email", e)
                          }
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
                          value={this.state.country_code}
                          onChange={(e) =>
                            this.handleFormValueChange("country_code", e)
                          }
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
                          value={this.state.phone}
                          onChange={(e) =>
                            this.handleFormValueChange("phone", e)
                          }
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
                          onChange={(e) =>
                            this.handleFormValueChange("agreement", e)
                          }
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
                        disabled={this.state.disableContactBtn}
                        onClick={() => {
                          this.changeBtnText("Sending...");
                        }}
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

export default connect((state) => ({
  state,
}))(Contact);