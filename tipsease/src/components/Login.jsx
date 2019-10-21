import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from 'react-redux';

const initialValuesLogin = {
  username: "",
  password: ""
};

const loginEndpoint = "https://build-tipsease.herokuapp.com/auth/users/login";

function Login({getCurrentUser, history}) {
  const onLoginFormSubmission = values => {
    axios
      .post(loginEndpoint, {
          username: values.username,
          password: values.password,
          isServiceWorker: false,
      })
      .then(res => {
        localStorage.setItem('authorization', res.data.token);
        getCurrentUser(res.data.userInfo);
        history.push('/home');
      })
      .catch(error => {
        alert(error.message)
      });
  };
  return (
    <Formik
      initialValues={initialValuesLogin}
      onSubmit={onLoginFormSubmission}
      render={props => {
        return (
          <Form>
            <label>
              username:
              <Field name="username" type="text" />
            </label>
            <label>
              password:
              <Field name="password" type="password" />
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
