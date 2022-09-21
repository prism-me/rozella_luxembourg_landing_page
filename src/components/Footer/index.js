import React from "react";

class Footer extends React.Component {
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
        <footer className="footer-section">
          <div
            className={"footer-top background-img-2 py-5"}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7">
                  <div className="footer-nav-wrap text-white mb-3">
                    <p>
                      Le Royal Hotels and Resorts, 12 Bd Royal, 2449 Luxembourg
                    </p>
                    <h5 className="mb-1 text-white">Supported By:</h5>
                    <p>
                      ABLCC ( Arab-Belgian-Luxembourg Chamber of Commerce )
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 mb-3 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <h5 className="mb-4 text-white">Follow Us On</h5>
                    <div className="social-list-wrap">
                      <ul className="social-list list-inline list-unstyled">
                        <li className="list-inline-item">
                          <a href="https://m.facebook.com/rozellarealestate/?ref=py_c" target="_blank" title="Facebook">
                            <span className="ti-facebook"></span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/company/rosella-real-estate" target="_blank" title="LinkedIn">
                            <span className="ti-linkedin"></span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.instagram.com/rozellarealestate/?igshid=YmMyMTA2M2Y%3D" target="_blank" title="Instagram">
                            <span className="ti-instagram"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom pt-4 pb-4">
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <p className="copyright-text pb-0 mb-0">
                    Designed and Managed by
                    <a href="https://www.prism-me.com/" target={"_blank"}> Prism Digital</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment >
    );
  }
}

export default Footer;
