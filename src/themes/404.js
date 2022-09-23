import React, { Component } from "react";

import Banner from "../components/Banner/Banner404";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Banner />
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
