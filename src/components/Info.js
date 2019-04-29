import React from 'react';

export const Info = props => {
  
  return (
    <div className="Info">
      <p>Matches: {props.numMatches}</p>
      <p>Time: {Math.floor(props.time / 1000)}</p>
      {props.bestTime &&
        <p>Best time: {Math.floor(props.bestTime / 1000)}</p>
      }
    </div>
  )
}