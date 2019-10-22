import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import '../App.css';

// STATE

import * as actionCreators from "../state/actionCreators";
import { connect } from 'react-redux';

function Registration() {
  return(
    <div>
      <form>
        Full Name<input /><br/>
        User Name<input /><br />
        Password<input /><br />
        Photo Url<input /><br />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default connect(
  state => state,
  actionCreators
)(Registration);
