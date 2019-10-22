import React from "react";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Profile({currentUser}) {
  return (
  <div>
      <h1>Name: {currentUser.fullName}</h1>
      <h1>Username: {currentUser.username}</h1>
      <h1>Password: {currentUser.password}</h1>
  </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Profile);
