import React from "react";
import { Formik, Form, Field } from "formik";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Profile({ currentUser }) {
  const initialValuesProfile = {
    fullName: currentUser.fullName,
    username: currentUser.username,
    password: "*****"
  };
  const onEditProfile = e => {
    debugger;
  };
  return (
    <Formik
      initialValues={initialValuesProfile}
      onSubmit={onEditProfile}
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
              <Field name="password" type="text" />
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
