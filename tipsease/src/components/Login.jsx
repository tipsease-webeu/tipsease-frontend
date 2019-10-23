import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

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
  margin: 10% auto 0;
  label {
    font-size: 2rem;
  }
  input {
    font-size: 3rem;
    margin: 0.5rem;
    padding: 0.75rem;
  }
`;

function Login({ getCurrentUser, history }) {
  const onLoginFormSubmission = values => {
    axios
      .post(loginEndpoint, {
        username: values.username,
        password: values.password,
        isServiceWorker: false
      })
      .then(res => {
        localStorage.setItem("authorization", res.data.token);
        getCurrentUser(res.data.userInfo);
        history.push("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
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
  );
}

export default connect(
  state => state,
  actionCreators
)(Login);
