import React, { useEffect } from "react";

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

function Container({ fetchServiceWorkers }) {
  useEffect(() => {
    fetchServiceWorkers();
  }, []);

  return <div>Hello from container component</div>;
}

export default connect(
  state => state,
  actionCreators
)(Container);
