import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";

// COMPONENTS

import Title from "./Title";

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

const initialValuesLogin = {
  username: "",
  password: "",
  fullName: "",
  photoUrl: ""
};

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .min(5, "Too short"),
  username: yup
    .string()
    .required()
    .min(5, "Too short")
    .max(15, "Too long"),
  password: yup
    .string()
    .required()
    .min(3, "Too short"),
  photoUrl: yup
    .string()
    .required()
    .min(5, "Too short")
});

const userRegEndpoint =
  "https://build-tipsease.herokuapp.com/auth/users/register";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 1rem auto 0;
  .input-group {
    display: flex;
    flex-direction: row;
    height: 75px;
    margin-bottom: 0.2rem;
    align-items: center;
    width: 750px;
    label {
      font-size: 2rem;
      width: 30%;
    }
    .field-group {
      height: 50px;
      width: 400px;
      width: 70%;
      input {
        padding: 0.75rem;
        font-size: 1rem;
        width: 100%;
      }
    }
  }
`;

function Registration({ history, setTaskSucceded, tipSuccess, clearError }) {
  useEffect(() => {
    clearError();
  }, []);

  const onRegFormSubmission = (values, actions) => {
    axios
      .post(userRegEndpoint, values)
      .then(res => {
        setTaskSucceded();
      })
      .catch(error => {
        alert(error.response.data.message);
      });
    actions.resetForm();
  };
  return (
    <>
      <Title className="title" />
      {tipSuccess ? (
        <section className="tip-message">
          <h2>
            Thank you! You have succesfully registered. You can now{" "}
            <Link to="/login">Log In</Link>
          </h2>
        </section>
      ) : null}

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValuesLogin}
        onSubmit={onRegFormSubmission}
        render={props => {
          return (
            <StyledForm className="registration-form">
              <StyledSection>
                <div className="input-group">
                  <label htmlFor="fullName">Full Name:</label>
                  <div className="field-group">
                    <Field name="fullName" type="text" id="fullName" />
                    <ErrorMessage name="fullName" component="div" />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password:</label>
                  <div className="field-group">
                    <Field name="password" type="password" id="password" />
                    <ErrorMessage name="password" component="div" />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="username">User Name:</label>
                  <div className="field-group">
                    <Field name="username" type="text" id="username" />
                    <ErrorMessage name="username" component="div" />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="photoUrl">Photo URL:</label>
                  <div className="field-group">
                    <Field name="photoUrl" type="text" id="photoUrl" />
                    <ErrorMessage name="photoUrl" component="div" />
                  </div>
                </div>
              </StyledSection>
              <div className="button action blue">
                <button type="submit">Signup</button>
              </div>
              {/* <button type="submit">Sign Up</button> */}
            </StyledForm>
          );
        }}
      />
      <section>
        <p>
          If you are already registered, you can sign in{" "}
          <Link to="/login">here</Link>
        </p>
      </section>
    </>
  );
}

export default connect(
  state => state,
  actionCreators
)(Registration);
