import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledLink = styled(Link)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: center;
  * {
    margin: 0.5rem;
  }
`;

function Title({ currentUser }) {
  return (
    <div>
      <StyledLink to="/" className={currentUser.id ? "white" : "blue"}>
        <h1>Tipsease...</h1>
        <h3>I tip, you tip, everyone tips!</h3>
      </StyledLink>
    </div>
  );
}

export default connect(state => state)(Title);
