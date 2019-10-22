import React from "react";
import { Link } from "react-router-dom";

// HELPERS

import { addDefaultSrc } from "../helpers/helpers";

export default function WorkerListItem({ worker }) {
  return (
    <Link to={`/service-worker/${worker.id}`}>
      <div>
        <h1>{worker.fullName}</h1>
        <div>
          <img
            src={worker.photoUrl}
            onError={addDefaultSrc}
            alt="profile-pic"
          />
        </div>
        <div>
          <p>Workplace: {worker.workplace}</p>
          <p>Rating: {worker.rating}</p>
          <p># of ratings: {worker.numOfRatings}</p>
          <p>Balance: {worker.accountBalance}</p>
        </div>
      </div>
    </Link>
  );
}
