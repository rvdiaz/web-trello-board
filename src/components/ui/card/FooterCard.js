import React, { useEffect, useState } from 'react'
import { getArrayRandom } from '../../../helpers/helpers';
import { ProfilesCards } from './ProfilesCards';

export const FooterCard = (props) => {
  const {gal,del}=props;
  const [galArray, setgalArray] = useState([]);
  const [delArray, setdelArray] = useState([]);

  useEffect(() => {
    const list=getArrayRandom(gal);
    setgalArray(list);
  }, [gal])
  
  useEffect(() => {
    const list=getArrayRandom(del);
    setdelArray(list);
  }, [del])

  return (
    <div className='paddingCard footerCard'>
      <ProfilesCards 
        profiles={galArray} 
        action='gal'/>
      <ProfilesCards 
        profiles={delArray} 
        action='del'/>
    </div>
  )
}
