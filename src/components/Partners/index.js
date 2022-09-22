import React from "react";
import _data from "../../data";

class Partners extends React.Component {
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
        <section
          id="team"
          className="partners-section pb-50"
          style={{
            backgroundImage: "url('img/images/bgwing.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            // backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center mb-3">
              <div className="col-lg-7">
                <h2 className="maintitle">Our Partners</h2>
                <hr className="hrstyle" />
              </div>
            </div>
            <div className="row">
              {(this.state.teamMember.members || []).map((member, index) => {
                return (
                  <div className="col-lg-3 col-sm-6" key={index}>
                    <img
                      src="img/images/partner1.png"
                      alt="Team Members"
                      className="img-fluid mb-3"
                    />
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

export default Partners;
