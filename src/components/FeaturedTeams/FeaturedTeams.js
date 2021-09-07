import React, { useEffect, useState } from 'react';
import SingleTeamCard from '../SingleTeamCard/SingleTeamCard';
import './FeaturedTeams.scss';
import '../../assets/css/bootstrap/bootstrap-grid.css';
import { getBasicTeamInfoById } from '../../requests';
import { Row, Container } from 'react-bootstrap';

const featuredTeamsIds = [66, 98, 88];

function FeaturedTeams() {

  useEffect(() => {
    fetchAndRenderFeaturedTeams();
  }, []);

const [featuredTeamsList, setFeaturedTeamsList] = useState ([]);

  const fetchAndRenderFeaturedTeams = async () => {
    let teams = [];
    for (const teamId of featuredTeamsIds) {
      const team = await getBasicTeamInfoById(teamId);
      teams.push(team);
    }
    console.log(teams);
    setFeaturedTeamsList(teams);
  }

  return (
    <>
      <Container>
        <Row className='d-flex'>
        {featuredTeamsList.map(({ name, crestUrl, website, colors, id}) => (
            <SingleTeamCard key={id} name={name} crestUrl={crestUrl} website={website} colors={colors} id={id} />
        ))}
        </Row>
      </Container>
    </>
  );
}

export default FeaturedTeams;
