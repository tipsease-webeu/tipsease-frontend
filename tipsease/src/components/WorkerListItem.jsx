import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// HELPERS

import { addDefaultSrc } from "../helpers/helpers";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  margin: 0.5rem 2rem;
  border-bottom: 0.5px solid gray;
  text-decoration: none;
  color: black;
  img {
    height: 65px;
    width: auto;
    border-radius: 100%;
  }
`;

export default function WorkerListItem({ worker }) {
  return (
    <div>
      <StyledLink to={`/app/service-worker/${worker.id}`}>
        <div>
          <img
            src={worker.photoUrl}
            onError={addDefaultSrc}
            alt="profile-pic"
          />
        </div>
        <h4>{worker.fullName}</h4>
        <h4>{worker.workplace}</h4>
        <h4>{worker.rating}</h4>
        <h4>{worker.numOfRatings}</h4>
        <h4>{worker.accountBalance}</h4>
        <h4 className="action-button-small">Click To Tip</h4>
      </StyledLink>
    </div>
  );
}
