import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

const initialValuesLogin = {
  username: "",
  password: "",
  fullName: "",
  photoUrl: ""
};

const userRegEndpoint =
  "https://build-tipsease.herokuapp.com/auth/users/register";

function Registration({ history, setTaskSucceded, tipSuccess, clearError }) {
  useEffect(() => {
    clearError();
  })
  const onRegFormSubmission = values => {
    axios
      .post(userRegEndpoint, {
        fullName: values.fullname,
        username: values.username,
        password: values.password,
        photoUrl: values.photourl
      })
      .then(res => {
        setTaskSucceded();
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <>
      {tipSuccess ? (
        <section className="tip-message">
          <h2>
            Thank you! You have succesfully registered. You can now{" "}
            <Link to="/login">Log In</Link>
          </h2>
        </section>
      ) : null}

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
                Photo URL:
                <Field name="photourl" type="text" />
              </label>
              <button type="submit">Sign Up</button>
            </Form>
          );
        }}
      />
            <section>
        <p>
          If you are already registered, you can sign in <Link to="/login">here</Link>
        </p>
      </section>
    </>
  );
}

export default connect(
  state => state,
  actionCreators
)(Registration);
