import React from 'react'
import { CardDrop } from './card/CardDrop';

export const CardsList = (props) => {
  const {listCards,title,id}=props;
  console.log(listCards);
  return (
    <div className='cardWrapper'>
        <h2 className='cardListTitle'>
          {title}
        </h2>
        <div className='cardContainer'>
        {listCards.map((card)=>(
          <CardDrop
            photo={card.photo}
            name={card.name}
            job={card.job}
            key={card.id}
            id={card.id}
          />
      ))} 
      </div>
    </div>
  )
}
