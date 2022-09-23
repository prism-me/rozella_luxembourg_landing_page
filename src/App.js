import React, { useState, useEffect } from "react";
import Routes from "./routers";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  });
  return (
    <React.Fragment>
      {loader ? (
        <div
          className={`d-flex flex-column text-center align-items-center justify-content-center`}
          style={{
            position: "absolute",
            zIndex: 99999,
            height: "100%",
            width: "100%",
            background: "rgba(49, 135, 196, 0.3)",
          }}
        >
          <BounceLoader color={"#071c35"} size={100} />
        </div>
      ) : (
        <Routes />
      )}
    </React.Fragment>
  );
}

export default App;
