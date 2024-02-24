import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.css';
const Card = ({ imageUrl, title, text, _id }) => (
  <Link to={"/stream/" + _id} className="noUnderline">
    <div className="card m-2">
      <img src={imageUrl} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};



export default Card;
