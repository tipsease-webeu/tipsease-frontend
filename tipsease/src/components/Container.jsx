import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  .sorting-options {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin:0.5rem 2rem;
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

function Container({
  fetchServiceWorkers,
  listServiceWorkers,
  sortListWorkers
}) {
  useEffect(() => {
    fetchServiceWorkers();
  }, []);

  const sortAlpha = (field, type) => {
    const sortedArrayWorkers = listServiceWorkers.sort((a, b) => {
      var nameA = a[field].toUpperCase(); // ignore upper and lowercase
      var nameB = b[field].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return type === "asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return type === "asc" ? 1 : -1;
      }
      // names must be equal
      return 0;
    });
    sortListWorkers(sortedArrayWorkers);
  };

  const sortScore = (field, type) => {
    const sortedArrayWorkers = listServiceWorkers.sort((a, b) => {
      // console.log(a[field]);
      // console.log(b[field]);
      return type === "asc" ? a[field] - b[field] : b[field] - a[field];
    });
    sortListWorkers(sortedArrayWorkers);
    // console.log(sortedArrayWorkers);
  };

  return (
    <StyledContainer>
      <section className="header-container">
        <h2>Service Workers</h2>
      </section>
      <section className="sorting-options">
        <span>Sort by:&nbsp;</span>
        <Link to="#" onClick={() => sortAlpha("fullName", "asc")}>
          name (asc)
        </Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="#" onClick={() => sortAlpha("fullName", "desc")}>
          name (desc)
        </Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="#" onClick={() => sortScore("rating", "asc")}>
          rating (asc)
        </Link>
        <span>&nbsp;|&nbsp;</span>
        <Link to="#" onClick={() => sortScore("rating", "desc")}>
          rating (desc)
        </Link>
      </section>
      <section>
        <section className="header-table">
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
