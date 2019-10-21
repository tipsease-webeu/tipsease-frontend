import React from "react";

export default function WorkerCard({ worker }) {
  const addDefaultSrc = e => {
    e.target.src =
      "http://saltlifetherapy.ie/wp-content/uploads/2018/11/no-photo-1.png";
  };
  return (
    <div>
      <h1>{worker.fullName}</h1>
      <div>
        <img src={worker.photoUrl} onError={addDefaultSrc} alt="profile-pic" />
      </div>
      <div>
        <p>Workplace: {worker.workplace}</p>
        <p>Rating: {worker.rating}</p>
        <p># of ratings: {worker.numOfRatings}</p>
      </div>
      <button>Tip</button>
    </div>
  );
}
