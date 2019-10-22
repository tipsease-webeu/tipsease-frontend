import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

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
        history.push("/home");
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
          <Form>
            <label>
              username:
              <Field name="username" type="text" />
              <ErrorMessage name="username" component="div" />
            </label>
            <label>
              password:
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </label>
            <button type="submit">Login</button>
          </Form>
        );
      }}
    />
  );
}

export default connect(
  state => state,
  actionCreators
)(Login);
