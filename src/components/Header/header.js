import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav
            className={
              "navbar navbar-expand-lg fixed-top " +
              (this.props.bgColor && this.props.bgColor === "white"
                ? "custom-nav white-bg"
                : "bg-transparent")
            }
          >
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={
                    this.props.bgColor && this.props.bgColor === "white"
                      ? "img/images/rozella-logo.png"
                      : "img/images/rozella-logo.png"
                  }
                  width="224"
                  alt="logo"
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="ti-menu"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page-scroll" href="#register">
                      Register
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">
                      Contact Us
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({}))(Header);
