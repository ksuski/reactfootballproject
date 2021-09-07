import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleTeamCard.scss';

function SingleTeamCard({ name, crestUrl, colors, id }) {
  return (
      <Col className='d-flex justify-content-center align-items-center flex-column'>
      <h2>{name}</h2>
      <img src={crestUrl} alt={name} className='img-thumbnail' />
      <p>Club colors:{colors}</p>
    </Col>
  );
}

export default SingleTeamCard;
