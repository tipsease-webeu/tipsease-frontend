import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// STATE

import { connect } from "react-redux";

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  .greeting {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .body-worker-card {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .img-container {
      width: 20%;
    }
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
`;

function Profile({ currentUser }) {
  return (
    <div>
      <StyledDiv>
        <section className="greeting">
          <h2>Hello <span style={{"border-bottom": "1px dashed gray" }}>{currentUser.fullName}</span>&nbsp;,</h2>
        </section>
        <section className="body-worker-card">
          <div className="img-container">
            <img src={currentUser.photoUrl} alt="current-user-profile-pic" />
          </div>
          {/* <div className="worker-details"> */}
          <h3>Full name:&nbsp; {currentUser.fullName}</h3>
          <h3>Username:&nbsp; {currentUser.username}</h3>
          {/* </div> */}
          <Link to="/app/profile/edit" style={{ color: "white" }}>
            <div className="button action">Edit profile</div>
          </Link>
        </section>
        <section>
          <Link to="/app/home">back</Link>
        </section>
      </StyledDiv>
    </div>
  );
}

export default connect(state => state)(Profile);
