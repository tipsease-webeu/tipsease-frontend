import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div>
      <Link to="/">
        <h1>Tipsease</h1>
        <h3>I tip, you tip, everyone tips!</h3>
      </Link>
    </div>
  );
}
