import React from 'react';

const Card = ({ p }) => {
  return (
    <>
      <div className="card subtle-shadow no-border">
        <div className="card-body">
          <h5 className="card-title">{p.jobTitle}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Location {p.location}
          </h6>
          <p className="card-text fs-2">{p.description}</p>
        </div>
        <div className="card-footer no-border">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </>
  );
};

export default Card;
