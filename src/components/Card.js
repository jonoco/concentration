import React from 'react';

export const Card = props => {
  
  const { card, selected, handleClick, showFaces } = props;
  const { code, matched, image } = card;
  
  if (matched) {
    return (
      <div className='Card'>
        <img className='animated flipOutY faster' src={image} alt={code}/>
      </div>
    );
  }

  let cardClass = props.selected ? 'Card selected' : 'Card';

  return (
    <div className={cardClass} onClick={() => handleClick(card)}>
      {selected || showFaces ? 
        <img className='animated flipInY' src={image} alt={code}/>
        :
        <div className='blank animated flipInY'></div>        
      }
    </div>
  )
}