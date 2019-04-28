import React from 'react';

export const Info = props => {
  
  return (
    <div className="Info">
      <p>Matches: {props.numMatches}</p>
      <p>Time: {Math.floor(props.time / 1000)}</p>
      {props.numMatches == 52 &&
        <h1>Game over!</h1>
      }
    </div>
  )
}