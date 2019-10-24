import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  .greeting {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  margin: 1rem auto 0;
  .input-group {
    display: flex;
    flex-direction: row;
    height: 75px;
    margin-bottom: 0.2rem;
    align-items: center;
    width: 100%;
    label {
      font-size: 2rem;
      width: 30%;
    }
    .field-group {
      height: 50px;
      width: 400px;
      width: 70%;
      input {
        padding: 0.75rem;
        font-size: 1rem;
        width: 100%;
      }
    }
  }
`;

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
    history.push("/app/profile");
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValuesProfile}
        onSubmit={onSubmitEditProfile}
        render={props => {
          return (
            <StyledForm>
              <section className="greeting">
                <h2>
                  Hello{" "}
                  <span style={{ "border-bottom": "1px dashed gray" }}>
                    {currentUser.fullName}
                  </span>
                  &nbsp;,
                </h2>
              </section>
              <StyledSection>
                <div className="input-group">
                  <label htmlFor="fullName">Full Name:</label>
                  <div className="field-group">
                    <Field name="fullName" type="text" id="fullName" />
                    <ErrorMessage name="fullName" component="div" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Username:</label>
                  <div className="field-group">
                    <Field name="username" type="text" />
                    <ErrorMessage name="username" component="div" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Photo profile URL:</label>
                  <div className="field-group">
                    <Field name="photoUrl" type="text" />
                    <ErrorMessage name="photoUrl" component="div" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Password:</label>
                  <div className="field-group">
                    <Field
                      name="password"
                      type="text"
                      placeholder="Type new password"
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>
                </div>
              </StyledSection>
              <div className="button action">
                <button>Edit profile</button>
              </div>
            </StyledForm>
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
