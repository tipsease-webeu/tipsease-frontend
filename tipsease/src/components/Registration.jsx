import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import '../App.css';

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from 'react-redux';

const initialValuesLogin = {
  username: "",
  password: "",
  fullName: "",
  photoUrl: ""
};

const userRegEndpoint = "https://build-tipsease.herokuapp.com/auth/users/register";

function Registration({getCurrentUser, history}) {
  const onRegFormSubmission = values => {
    axios
      .post(userRegEndpoint, {
        fullName: values.fullname,
        username: values.username,
        password: values.password,
        photoUrl: values.photourl
      })
      .then(res => {
        getCurrentUser(res.data.userInfo);
        history.push('/');
      })
      .catch(error => {
        alert(error.message)
      });
  };
  return (
    <Formik
      initialValues={initialValuesLogin}
      onSubmit={onRegFormSubmission}
      render={props => {
        return (
          <Form className="registration-form">
            <label>
              Full Name:
              <Field name="fullname" type="text" />
            </label>
            <label>
              Password:
              <Field name="password" type="password" />
            </label>
            <label>
              User Name:
              <Field name="username" type="text" />
            </label>
            <label>
              Worker Type:
              <Field name="text" type="text" />
            </label>
            <label>
              Photo URL:
              <Field name="photourl" type="text" />
            </label>
            <button type="submit">Sign Up</button>
          </Form>
        );
      }}
    />
  );
}

export default connect(
  state => state,
  actionCreators
)(Registration);
