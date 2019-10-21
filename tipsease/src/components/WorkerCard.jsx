import React from "react";
import { Formik, Form, Field } from "formik";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

// HELPERS

import { addDefaultSrc } from "../helpers/helpers";

const initialValueTip = 0;

function WorkerCard({ currentUser, listServiceWorkers, match, onSubmitTip }) {
  const selectedWorker = listServiceWorkers.find(worker => {
    return worker.id === Number(match.params.id);
  });

  return (
    <div>
      <div>
        <h1>{selectedWorker.fullName}</h1>
        <div>
          <img
            src={selectedWorker.photoUrl}
            onError={addDefaultSrc}
            alt="profile-pic"
          />
        </div>
        <div>
          <p>Workplace: {selectedWorker.workplace}</p>
          <p>Rating: {selectedWorker.rating}</p>
          <p># of ratings: {selectedWorker.numOfRatings}</p>
        </div>
      </div>
      <Formik
        initialValues={initialValueTip}
        onSubmit={(e) => onSubmitTip(e, selectedWorker.id, currentUser.username)}
        render={props => {
          return (
            <Form>
              <label>
                Input amount in EUR:
                <Field name="amount" type="number" />
              </label>
              <button>Tip</button>
            </Form>
          );
        }}
      />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(WorkerCard);
