import React from 'react'
import { Card } from './card/Card';

export const CardsList = (props) => {
  const {listCards}=props;
  return (
    <div className='cardWrapper'>
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
