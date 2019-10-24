import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

// HELPERS

import { addDefaultSrc } from "../helpers/helpers";

const initialValueTip = {
  amount: 0
};

const initialValueRating = {
  stars: 0
};

const validationSchemaTip = yup.object().shape({
  amount: yup
    .number()
    .required("Amount required")
    .integer("Number needs to be an integer")
});

const validationSchemaRating = yup.object().shape({
  stars: yup
    .number()
    .required("Amount required")
    .integer("Number needs to be an integer")
});

// STYLED COMPONENTS

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .header-worker-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem;
    border-bottom: 0.5px solid gray;
    padding: 2rem;
    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.5rem;
      input {
        font-size: 1.5 rem;
      }
    }
  }
  .body-worker-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    div {
      width: 50%;
    }

    .img-container {
      width: 20%;
    }
    img {
      width: 100%;
      border-radius: 100%;
    }
    .worker-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      h3 {
        margin: 1rem;
      }
    }
  }
  .tip-message {
    color: red;
    margin: 2rem;
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

function WorkerCard({
  currentUser,
  listServiceWorkers,
  match,
  onSubmitTip,
  history,
  tipSuccess,
  resetTipSuccess,
  onSubmitRating,
  arrayAvatars
}) {
  const selectedWorker = listServiceWorkers.find(worker => {
    return worker.id === Number(match.params.id);
  });

  const onAddTip = (values, action) => {
    action.resetForm();
    onSubmitTip(values.amount, selectedWorker.id, currentUser.username);
  };

  const onAddRating = (values, action) => {
    action.resetForm();
    onSubmitRating(values.stars, selectedWorker.id);
  };

  return (
    <StyledCard>
      <section className="header-worker-card">
        <h2>{selectedWorker.fullName}</h2>
        <div className="tip-form">
          <Formik
            validationSchema={validationSchemaTip}
            initialValues={initialValueTip}
            // onSubmit={(e) => onSubmitTip(e, selectedWorker.id, currentUser.username)}
            onSubmit={onAddTip}
            render={props => {
              return (
                <Form>
                  <div className="input-form">
                    <label htmlFor="amount">Input amount in EUR: </label>
                    <Field name="amount" type="number" id="amount" min="1" />
                  </div>
                  <div className="validation-field">
                    <ErrorMessage name="amount" component="div" />
                  </div>
                  <button type="submit">Tip</button>
                </Form>
              );
            }}
          />
        </div>
        <div className="tip-form">
          <Formik
            validationSchema={validationSchemaRating}
            initialValues={initialValueRating}
            // onSubmit={(e) => onSubmitTip(e, selectedWorker.id, currentUser.username)}
            onSubmit={onAddRating}
            render={props => {
              return (
                <Form>
                  <div className="input-form">
                    <label htmlFor="stars">Submit your rating: </label>
                    <Field
                      name="stars"
                      type="number"
                      id="stars"
                      min="1"
                      max="5"
                    />
                  </div>
                  <div className="validation-field">
                    <ErrorMessage name="stars" component="div" />
                  </div>
                  <button type="submit">Rate</button>
                </Form>
              );
            }}
          />
        </div>
      </section>
      {tipSuccess ? (
        <section className="tip-message">
          <h2>Thank you! You have tipped {selectedWorker.fullName}</h2>
        </section>
      ) : null}

      <section className="body-worker-card">
        <div className="img-container">
          <img
            src={
              !selectedWorker.photoUrl
                ? arrayAvatars[
                    Math.floor(Math.random() * Math.floor(arrayAvatars.length))
                  ]
                : selectedWorker.photoUrl
            }
            onError={e => {
              e.target.src =
                arrayAvatars[
                  Math.floor(Math.random() * Math.floor(arrayAvatars.length))
                ];
            }}
            alt="profile-pic"
          />
        </div>
        <div className="worker-details">
          <h3>Workplace: {selectedWorker.workplace}</h3>
          <h3>Rating: {selectedWorker.rating}</h3>
          <h3># of ratings: {selectedWorker.numOfRatings}</h3>
          <h3>Balance: {selectedWorker.accountBalance}</h3>
        </div>
      </section>
      <section>
        <Link to="/app/home" onClick={() => resetTipSuccess()}>
          Back
        </Link>
      </section>
    </StyledCard>
  );
}

export default connect(
  state => state,
  actionCreators
)(WorkerCard);
