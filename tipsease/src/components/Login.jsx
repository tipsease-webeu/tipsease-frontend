import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

// COMPONENTS

import Title from "./Title";

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

const initialValuesLogin = {
  username: "",
  password: ""
};

const loginEndpoint = "https://build-tipsease.herokuapp.com/auth/users/login";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(2, "Too short"),
  password: yup.string().required()
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 50px auto 0;
  label {
    font-size: 2rem;
  }
  input {
    font-size: 3rem;
    margin: 0.5rem;
    padding: 0.75rem;
  }
`;

function Login({
  getCurrentUser,
  history,
  resetTipSuccess,
  activateErrorLogin,
  loginError,
  setError,
  clearError,
  error
}) {
  useEffect(() => {
    resetTipSuccess();
  }, []);

  const onLoginFormSubmission = (values, action) => {
    axios
      .post(loginEndpoint, {
        username: values.username,
        password: values.password,
        isServiceWorker: false
      })
      .then(res => {
        clearError();
        localStorage.setItem("authorization", res.data.token);
        getCurrentUser(res.data.userInfo);
        history.push("/app/home");
      })
      .catch(error => {
        activateErrorLogin();
        action.resetForm();
        setError(error.response.data.message);
      });
  };
  return (
    <>
      <Title />
      {error[0] ? (
        <section>
          <h2>{error[1]}. Please try again.</h2>
        </section>
      ) : null}
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValuesLogin}
        onSubmit={onLoginFormSubmission}
        render={props => {
          return (
            <StyledForm>
              <label htmlFor="name">username:</label>
              <Field name="username" type="text" id="name" />
              <ErrorMessage name="username" component="div" />
              <label htmlFor="password">password:</label>
              <Field name="password" type="password" id="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" className="action-button-big">
                Login
              </button>
            </StyledForm>
          );
        }}
      />
      <section>
        <p>
          If you are not registered, please sign up{" "}
          <Link to="/register">here</Link>
        </p>
      </section>
    </>
  );
}

export default connect(
  state => state,
  actionCreators
)(Login);
