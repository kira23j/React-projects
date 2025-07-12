import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import "../styles/playerStats.css";

const PlayerStats = () => {

 
  return (
    <div id="playerStats">
      <h1>Kirubel M.Sahle</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <div className='App'>
      <h2 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
       {' '}
        <span style={{ color: 'aquamarine', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Software Engineer', 'Fullstack Developer', 'AI-Web3 Advocate']}
            loop={0}
            cursor
            cursorStyle={'|'}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
    </div>
   

      {/* ai-web3 advocate, Software Engineer , Python & React Stack use typewriter effect*/}
    </div>
  );
};

export default PlayerStats;
