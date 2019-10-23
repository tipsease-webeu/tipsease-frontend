import React, { useEffect } from "react";
import styled from "styled-components";

// COMPONENTS

import WorkerListItem from "./WorkerListItem";

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .header-table {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid gray;
    margin: 0.5rem 2rem;
    padding: 0.5rem 0;
  }
`;

const header = [
  "photo",
  "name",
  "workplace",
  "rating",
  "# ratings",
  "Balance",
  "Tip!"
];

function Container({ fetchServiceWorkers, listServiceWorkers }) {
  useEffect(() => {
    fetchServiceWorkers();
  }, []);

  return (
    <StyledContainer>
      <section className="header-container">
        <h2>Service Workers</h2>
      </section>
      <section>
        <section className='header-table'>
          {header.map(item => (
            <span>{item}</span>
          ))}
        </section>
        {!listServiceWorkers ? (
          <h1>Loading...</h1>
        ) : (
          listServiceWorkers.map(worker => (
            <WorkerListItem key={worker.id} worker={worker} />
          ))
        )}
      </section>
    </StyledContainer>
  );
}

export default connect(
  state => state,
  actionCreators
)(Container);
