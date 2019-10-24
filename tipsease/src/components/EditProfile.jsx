import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .min(2, "Too short"),
  username: yup
    .string()
    .required()
    .min(5, "Too short")
    .max(12, "Too long")
});

function Profile({ currentUser, onEditProfile, history }) {
  const initialValuesProfile = {
    fullName: currentUser.fullName,
    username: currentUser.username,
    photoUrl: currentUser.photoUrl,
    password: ""
  };

  const onSubmitEditProfile = (values, actions) => {
    if (values.password === "") {
      const { password, ...newValues } = values;
      onEditProfile(newValues, currentUser.id);
    } else {
      const { ...newValues } = values;
      onEditProfile(newValues, currentUser.id);
    }
    actions.resetForm();
    history.push("/app/home");
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValuesProfile}
        onSubmit={onSubmitEditProfile}
        render={props => {
          return (
            <Form>
              <label>
                Full Name:
                <Field name="fullName" type="text" />
                <ErrorMessage name="fullName" component="div" />
              </label>
              <label>
                Username:
                <Field name="username" type="text" />
                <ErrorMessage name="username" component="div" />
              </label>
              <label>
                Photo profile URL:
                <Field name="photoUrl" type="text" />
                <ErrorMessage name="photoUrl" component="div" />
              </label>
              <label>
                Password:
                <Field
                  name="password"
                  type="text"
                  placeholder="Type new password"
                />
                <ErrorMessage name="password" component="div" />
              </label>
              <button>Edit profile</button>
            </Form>
          );
        }}
      />
      <Link to="/app/profile">back</Link>
    </>
  );
}

export default connect(
  state => state,
  actionCreators
)(Profile);
