import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

// HELPERS

import { addDefaultSrc } from "../helpers/helpers";

const initialValueTip = 0;

const validationSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Amount required")
    .positive("No negative amounts allowed")
    .integer("Number needs to be an integer")
});

function WorkerCard({
  currentUser,
  listServiceWorkers,
  match,
  onSubmitTip,
  history
}) {
  debugger;
  const selectedWorker = listServiceWorkers.find(worker => {
    return worker.id === Number(match.params.id);
  });

  const onAddTip = (values, action) => {
    action.resetForm();
    onSubmitTip(values.amount, selectedWorker.id, currentUser.username);
    history.push("/home");
  };

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
        validationSchema={validationSchema}
        initialValues={initialValueTip}
        // onSubmit={(e) => onSubmitTip(e, selectedWorker.id, currentUser.username)}
        onSubmit={onAddTip}
        render={props => {
          return (
            <Form>
              <label>
                Input amount in EUR:
                <Field name="amount" type="number" />
                <ErrorMessage name="amount" component='div' />
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
