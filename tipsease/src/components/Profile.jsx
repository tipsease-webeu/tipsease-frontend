import React from "react";
import { Formik, Form, Field } from "formik";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Profile({ currentUser, onEditProfile }) {
  const initialValuesProfile = {
    fullName: currentUser.fullName,
    username: currentUser.username,
    password: ""
  };

  const onSubmitEditProfile = (values, actions) => {
    actions.resetForm();
    let newValues = {};
    if (values.password === "") {
        newValues = {
            fullName: values.fullName,
            username: values.username,
        }
    } else {
        newValues = {
            fullName: values.fullName,
            username: values.username,
            password: values.password,
        }
    }
    onEditProfile(newValues, currentUser.id);
  }

  return (
    <Formik
      initialValues={initialValuesProfile}
      onSubmit={onSubmitEditProfile}
      render={props => {
        return (
          <Form>
            <label>
              Full Name:
              <Field name="fullName" type="text" />
            </label>
            <label>
              Username:
              <Field name="username" type="text" />
            </label>
            <label>
              Password:
              <Field
                name="password"
                type="text"
                placeholder="Type new password"
              />
            </label>
            <button>Edit profile</button>
          </Form>
        );
      }}
    />
  );
}

export default connect(
  state => state,
  actionCreators
)(Profile);
