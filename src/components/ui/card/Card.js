import React from 'react'
import { getArrayRandom } from '../../../helpers/getArrayRandom';
import { getRandomNumber } from '../../../helpers/getRandomNumbers';
import { BodyCard } from './BodyCard';
import { FooterCard } from './FooterCard';
import { HeaderCard } from './HeaderCard';

export const Card = (props) => {
  const {photo,name,job}=props;
  const gal=getRandomNumber(0,5);
  const del=getRandomNumber(0,5);
  const list=getArrayRandom(gal);
  
  return (
    <div className='card'>
        <HeaderCard job={job}/>
        <BodyCard photo={photo} name={name}/>
        <FooterCard gal={gal} del={del}/>  
    </div>
  )
}
