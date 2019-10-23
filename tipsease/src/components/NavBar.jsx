import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

// COMPONENTS

import Title from "./Title";

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
    history.replace("/login");
  };

  return (
    <StyledNavBar>
      <Title />
      <NavLink to="/app/home">
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/app/profile">
        <h2>Profile</h2>
      </NavLink>
      <h2 onClick={logout} className="action-button-big">
        Log out
      </h2>
      {/* {currentUser.id ? (
        <h2 onClick={logout} className="action-button">
          Log out
        </h2>
      ) : null} */}
    </StyledNavBar>
  );
}

export default withRouter(
  connect(
    state => state,
    actionCreators
  )(NavBar)
);
