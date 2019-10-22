import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function NavBar({ history, clearCurrentUser }) {
  // LOGOUT FUNCTIONALITY

  const logout = e => {
    localStorage.clear();
    clearCurrentUser();
    history.replace("/");
  };

  const StyledNavBar = styled.nav`
    width: 33vw;
    background: green;
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: black;
    }
  `;

  return (
    <StyledNavBar>
      Tipsease
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <button onClick={logout}>Logout</button>
    </StyledNavBar>
  );
}

export default withRouter(
  connect(
    state => state,
    actionCreators
  )(NavBar)
);
