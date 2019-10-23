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
<<<<<<< HEAD
    <StyledNavBar>
      <h1>Tipsease</h1>
      <NavLink to="/home">
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/profile">
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
=======
    <div>
      Tipsease
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/register">Register</NavLink>
      <button onClick={logout}>Logout</button>
    </div>
>>>>>>> 516672fd38712cca2a7af26b0b915786a2cde7e0
  );
}

export default withRouter(
  connect(
    state => state,
    actionCreators
  )(NavBar)
);
