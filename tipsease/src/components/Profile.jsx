import React from "react";
import { Link } from "react-router-dom";

// STATE

import { connect } from "react-redux";

function Profile(props) {
  return (
    <div>
      <div>Hellofrom profile</div>
      <Link to="/home">back</Link>
      <Link to="/profile/edit">Edit profile</Link>
    </div>
  );
}

export default connect(state => state)(Profile);
