import React from 'react';

export const Card = props => {
  const {code, matched, image} = props.card;

  return (
    <div className="Card" onClick={() => props.handleClick(props.card)}>
      <p>{code}</p>
      <span>{props.selected ? 'selected' : ''}</span>
      <p>{matched ? 'matched' : 'unmatched'}</p>
      <img src={image} alt={code}/>
    </div>
  )
}