import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Más información</a>
      </div>
    </div>
  );
}

export default Card;
