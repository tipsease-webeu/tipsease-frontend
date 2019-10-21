import React from "react";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Counter({ count, increment, decrement }) {
  return (
    <div>
      Counter: {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Counter);
