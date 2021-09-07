import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleCompetitionsCard.scss';

import BundesligaLogo from '../../assets/img/Bundesliga.png';
import PrimeraDivisionLogo from '../../assets/img/Primera Division.png';
import PremierLeagueLogo from '../../assets/img/Premier League.png';
import SerieALogo from '../../assets/img/Serie A.png';
import Ligue1Logo from '../../assets/img/Ligue 1.png';
import PrimeiraLigaLogo from '../../assets/img/Primeira Liga.png';

function SingleCompetitionsCard({ name, id }) {
var logoSrc;
switch (name) {
  case 'Premier League':
  logoSrc = PremierLeagueLogo;
  break;

  case 'Primera Division':
  logoSrc = PrimeraDivisionLogo;
  break;

  case 'Serie A':
  logoSrc = SerieALogo;
  break;

  case 'Bundesliga':
  logoSrc = BundesligaLogo;
  break;

  case 'Ligue 1':
  logoSrc = Ligue1Logo;
  break;

  case 'Primeira Liga':
  logoSrc = PrimeiraLigaLogo;
  break;

  default:
    break;
}
  return (
    <Col xs={12} md={6} lg={4} className='d-flex justify-content-center align-items-center flex-column p-md-3 single-competition'>
        <img src={logoSrc} alt={name}/>
    </Col>
  );
}

export default SingleCompetitionsCard;
