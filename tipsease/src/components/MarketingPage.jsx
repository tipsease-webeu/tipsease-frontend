import React from "react";
import { Link } from "react-router-dom";

export default function MarketingPage() {
  return (
    <div>
      <p>Hello from Marketing component</p>
      <Link to='/login'>Log In</Link>
    </div>
  );
}
