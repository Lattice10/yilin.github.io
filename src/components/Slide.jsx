import React from 'react';
import slido from './assets/slido.png';
import './dashboard.css'

function Slide() {
  const [pieces, setPieces] = React.useState([
    { id: 0, x: 0, y: 0 },
    { id: 1, x: 100, y: 0 },
    { id: 2, x: 200, y: 0 },
    { id: 3, x: 0, y: 100 },
    { id: 4, x: 100, y: 100 },
    { id: 5, x: 200, y: 100 },
    { id: 6, x: 0, y: 200 },
    { id: 7, x: 100, y: 200 },
    { id: 8, x: 200, y: 200 },
  ]);

  return (
    <div className='container'>
      <img src={slido}></img>
      <div
        style={{
          position: 'relative',
          width: '150px',
          height: '150px',
        }}
      >
        {pieces.map((piece) => (
          <div
            key={piece.id}
            style={{
              position: 'absolute',
              left: piece.x,
              top: piece.y,
              width: '50px',
              height: '50px',
              backgroundColor: "#333",
              background:slido,
              border: "1px solid",
              margin: "0",
            }}
          ></div>
        ))}
      </div>
      <div className='buttonBox'><button>Reset</button></div>
    </div>
  )
}

export default Slide