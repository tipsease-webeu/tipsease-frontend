import React, { useEffect } from "react";
import styled from 'styled-components';

// COMPONENTS

import WorkerListItem from './WorkerListItem';

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

const StyledContainer = styled.div`
  background: green;
  width: 75vw;
  display: flex;
  flex-direction: column;
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div {
    border: 1px solid gray;
  }
`;

function Container({ fetchServiceWorkers, listServiceWorkers }) {
  useEffect(() => {
    fetchServiceWorkers();
  }, []);

  return (
    <StyledContainer>
      <section className='header-container'>
        <h2>Service Workers</h2>
        <button>Add +</button>
      </section>
      <section>
        {!listServiceWorkers ? (
          <h1>Loading...</h1>
        ) : (
          listServiceWorkers.map(worker => <WorkerListItem worker={worker} />)
        )}
      </section>
    </StyledContainer>
  );
}

export default connect(
  state => state,
  actionCreators
)(Container);
