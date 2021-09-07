import React, { useEffect, useState } from 'react';
import SingleCompetitionsCard from '../SingleCompetitionsCard/SingleCompetitionsCard';
import './FeaturedCompetitions.scss';
import '../../assets/css/bootstrap/bootstrap-grid.css';
import { getBasicCompetitionInfoById } from '../../requests';
import { Row, Container } from 'react-bootstrap';

const featuredCompetitionsId = [2021, 2014, 2019, 2002, 2015, 2017];

function FeaturedCompetitions() {

  useEffect(() => {
    fetchAndRenderFeaturedCompetitions();
  }, []);

const [featuredCompetitionsList, setFeaturedCompetitionsList] = useState ([]);

  const fetchAndRenderFeaturedCompetitions = async () => {
    let competitions = [];
    for (const competitionId of featuredCompetitionsId) {
      const competition = await getBasicCompetitionInfoById(competitionId);
      competitions.push(competition);
    }
    console.log(competitions);
    setFeaturedCompetitionsList(competitions);
  }

  return (
    <>
      <Container className="featured-competitions">
        <h2 className="text-center">
          Featured Leagues
        </h2>
        <Row className='d-flex'>
        {featuredCompetitionsList.map(({ id, name }) => (
            <SingleCompetitionsCard key={id} name={name} />
        ))}
        </Row>
      </Container>
    </>
  );
}

export default FeaturedCompetitions;
