import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': '88ed991946ea4e3ea3e3e5eca182aff5'
};

export const getBasicTeamInfoById = async id => {
  const { data: team } = await axios.get(`https://api.football-data.org/v2/teams/${id}`, {headers});
  return { id: team.id, name: team.name, crestUrl: team.crestUrl, website: team.website, colors: team.clubColors }
}

export const getBasicCompetitionInfoById = async id => {
  const { data: competition } = await axios.get(`https://api.football-data.org/v2/competitions/${id}`, {headers});
  return { id: competition.id, name: competition.name }
}
