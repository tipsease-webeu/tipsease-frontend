import React, { useEffect } from "react";

// COMPONENTS

import WorkerCard from './WorkerListItem';

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

function Container({ fetchServiceWorkers, listServiceWorkers }) {
  useEffect(() => {
    fetchServiceWorkers();
  }, []);

  return (
    <div>
      <section>
        <h1>Service Workers</h1>
        <button>Add +</button>
      </section>
      <section>
        {!listServiceWorkers ? (
          <h1>Loading...</h1>
        ) : (
          listServiceWorkers.map(worker => <WorkerCard worker={worker} />)
        )}
      </section>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Container);
