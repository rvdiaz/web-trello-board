import React from 'react'
import { Card } from './card/Card';

export const CardsList = (props) => {
  const {listCards,title}=props;
  return (
    <div className='cardWrapper'>
        <h2 className='cardListTitle'>
          {title}
        </h2>
        <div className='cardContainer'>
        {listCards.map((card)=>(
          <Card
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
