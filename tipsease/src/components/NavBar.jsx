import React from "react";
import { NavLink, withRouter } from "react-router-dom";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function NavBar({history, clearCurrentUser}) {
  // LOGOUT FUNCTIONALITY

  const logout = e => {
    localStorage.clear();
    clearCurrentUser();
    history.replace("/");
  };

  return (
    <div>
      Tipsease
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default withRouter(
  connect(
    state => state,
    actionCreators
  )(NavBar)
);
