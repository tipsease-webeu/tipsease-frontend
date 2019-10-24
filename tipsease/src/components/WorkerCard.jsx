import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

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
  margin: 1rem auto;
  .actions-workers {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* margin: 2rem; */
    border-bottom: 0.5px solid gray;
    padding: 2rem;
    .tip-form {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      width: 50%;
      section {
        display: flex;
        flex-direction: column;
        margin: 0 1rem;
        * {
          margin: 0.5rem 0;
        }
      }
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
    /* margin: 2rem; */
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
    <>
      <StyledCard>
        <section classeName="name-worker">
          <h2>{selectedWorker.fullName}</h2>
        </section>
        <section className="actions-workers">
          <Formik
            validationSchema={validationSchemaTip}
            initialValues={initialValueTip}
            // onSubmit={(e) => onSubmitTip(e, selectedWorker.id, currentUser.username)}
            onSubmit={onAddTip}
            render={props => {
              return (
                <Form className="tip-form">
                  <section>
                    <label htmlFor="amount">Input amount in EUR: </label>
                    <Field name="amount" type="number" id="amount" min="1" />
                    <ErrorMessage name="amount" component="div" className='validation-message'/>
                  </section>
                  <div className="button action small round">
                    <button type="submit">Tip</button>
                  </div>
                </Form>
              );
            }}
          />

          <Formik
            validationSchema={validationSchemaRating}
            initialValues={initialValueRating}
            // onSubmit={(e) => onSubmitTip(e, selectedWorker.id, currentUser.username)}
            onSubmit={onAddRating}
            render={props => {
              return (
                <Form className="tip-form">
                  <section>
                    <label htmlFor="stars">Submit your rating: </label>
                    <Field
                      name="stars"
                      type="number"
                      id="stars"
                      min="1"
                      max="5"
                    />

                    <ErrorMessage name="stars" component="div" />
                  </section>
                  <div className="button action small round">
                    <button type="submit">Rate</button>
                  </div>
                </Form>
              );
            }}
          />
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
                      Math.floor(
                        Math.random() * Math.floor(arrayAvatars.length)
                      )
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
      </StyledCard>
      <section>
        <Link to="/app/home" onClick={() => resetTipSuccess()}>
          Back
        </Link>
      </section>
    </>
  );
}

export default connect(
  state => state,
  actionCreators
)(WorkerCard);
