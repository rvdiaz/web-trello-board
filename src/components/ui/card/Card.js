import React, { useEffect, useState } from 'react'
import { useDrag } from 'react-dnd';
import { getRandomNumber } from '../../../helpers/helpers';

import { BodyCard } from './BodyCard';
import { FooterCard } from './FooterCard';
import { HeaderCard } from './HeaderCard';

export const Card = (props) => {
  const {id,photo,name,job,idList}=props;
  const [num, setnum] = useState({
    gal:0,
    del:0
  })

  useEffect(() => {
    const gal=getRandomNumber(0,5);
    const del=getRandomNumber(0,5);
    setnum({
      gal:gal,
      del:del
    })
  }, [setnum])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: id,idList:idList },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div 
      className='card'
      ref={drag}
    >
      <HeaderCard job={job}/>
      <BodyCard photo={photo} name={name}/>
      <FooterCard gal={num.gal} del={num.del}/>  
      </div>
    </>
  )
}
