import React from 'react';

export const Card = props => {
  const {code, matched, image} = props.card;
  return (
    <div className="Card">
      <p>{code}</p>

      <p>{matched ? 'matched' : 'unmatched'}</p>
      <img src={image} alt={code}/>
    </div>
  )
}