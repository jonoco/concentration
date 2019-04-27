import React from 'react';

export const Card = props => {
  
  const { card, selected, handleClick } = props;
  const { code, matched, image } = card;
  
  let className = 'Card';
  if (props.selected) {
    className += ' selected';
  }

  if (matched) {
    return <div className={className}></div>
  }

  return (
    <div className={className} onClick={() => handleClick(card)}>
      {selected ? 
        <img src={image} alt={code}/>
        :
        <div className="blank"></div>        
      }
    </div>
  )
}