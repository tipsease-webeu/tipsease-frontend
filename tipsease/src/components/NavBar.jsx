import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const StyledNavBar = styled.nav`
  width: 25vw;
  height: 100vh;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

function NavBar({ history, clearCurrentUser, currentUser }) {
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
      <NavLink to="/register">Register</NavLink>
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
