import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialValuesLogin = {
    username: "",
    password: "",
}

export default function Login() {

    const onLoginFormSubmission = values => {
        console.log(values);
    }
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
                )
            }}
        />
    )
}