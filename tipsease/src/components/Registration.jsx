import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import * as yup from "yup";

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
    .max(15, "Too long")
});

const userRegEndpoint =
  "https://build-tipsease.herokuapp.com/auth/users/register";

function Registration({ history, setTaskSucceded, tipSuccess, clearError }) {
  useEffect(() => {
    clearError();
  }, []);

  const onRegFormSubmission = values => {
    axios
      .post(userRegEndpoint, values)
      .then(res => {
        setTaskSucceded();
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };
  return (
    <>
      <Title />
      {tipSuccess ? (
        <section className="tip-message">
          <h2>
            Thank you! You have succesfully registered. You can now{" "}
            <Link to="/login">Log In</Link>
          </h2>
        </section>
      ) : null}

      <Formik
        // validationSchema={validationSchema}
        initialValues={initialValuesLogin}
        onSubmit={onRegFormSubmission}
        render={props => {
          return (
            <Form className="registration-form">
              <label>
                Full Name:
                <Field name="fullName" type="text" />
                <ErrorMessage name="fullName" component="div" />
              </label>
              <label>
                Password:
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <label>
                User Name:
                <Field name="username" type="text" />
                <ErrorMessage name="username" component="div" />

              </label>
              <label>
                Photo URL:
                <Field name="photourl" type="text" />
                <ErrorMessage name="photourl" component="div" />
                
              </label>
              <button type="submit">Sign Up</button>
            </Form>
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