import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// STATE

import { connect } from "react-redux";

const StyledDiv = styled("div")`
  .body-worker-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    div {
      width: 50%;
    }

    .img-container {
      width: 20%;
    }
    img {
      width: 100%;
      border-radius: 100%;
    }
    .worker-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      h3 {
        margin: 1rem;
      }
    }
  }
`;

function Profile({ currentUser }) {
  return (
    <div>
      <StyledDiv>
        <section>
          <h2>Hello {currentUser.fullName},</h2>
        </section>
        <section className="body-worker-card">
          <div className="img-container">
            <img src={currentUser.photoUrl} alt="current-user-profile-pic" />
          {/* </div> */}
          {/* <div className="worker-details"> */}
            <h3>Full name:&nbsp; {currentUser.fullName}</h3>
            <h3>Username:&nbsp; {currentUser.username}</h3>
          </div>
          <Link to="/app/profile/edit">Edit profile</Link>
        </section>
      </StyledDiv>
      <Link to="/app/home">back</Link>
    </div>
  );
}

export default connect(state => state)(Profile);
