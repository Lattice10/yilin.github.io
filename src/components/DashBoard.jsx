import React from 'react';
import Button from '@mui/material/Button';
import './dashboard.css';

function DashBoard() {
  const [score, setScore] = React.useState(localStorage.getItem('score'));
  const Reset = () =>{
    localStorage.setItem('score',0);
    setScore(0);
  }

  async function getScore () {
    const response = await fetch(`https://cgi.cse.unsw.edu.au/~cs6080/raw/data/score.json`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    })
    const initScore = await response.json();
    setScore(initScore.score);
  }

  React.useEffect(() => {
    getScore();
    console.log(score);
    localStorage.setItem('score', score);
  }, []);

  return (
    <div className='container'>
      <div style={{ color:"red", fontSize:"2em" }}>Please choice a game from navbar.</div>
      <div id='secondline'>Games won: {score}
      <Button variant="outlined" onClick={Reset}>Reset</Button></div>
    </div>
  )
}

export default DashBoard