import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: center;
  * {
    margin: 0.5rem;
  }
`;

export default function Title() {
  return (
    <div>
      <StyledLink to="/">
        <h1>Tipsease...</h1>
        <h3>I tip, you tip, everyone tips!</h3>
      </StyledLink>
    </div>
  );
}
