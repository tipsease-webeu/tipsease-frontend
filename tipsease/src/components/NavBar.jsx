import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function NavBar(props) {
  // LOGOUT FUNCTIONALITY

  const logout = e => {
    localStorage.clear();
    clearCurrentUser();
    props.history.replace("/");
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

export default withRouter(NavBar);
