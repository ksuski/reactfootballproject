import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import FeaturedTeams from './components/FeaturedTeams/FeaturedTeams';
import FeaturedCompetitions from './components/FeaturedCompetitions/FeaturedCompetitions';
import './App.css';
import './index.css';



function App() {
  
  
  
    return (
      <>
      <Header />
      <FeaturedCompetitions />
      <FeaturedTeams />
      </>
    );
    
}

export default App;
