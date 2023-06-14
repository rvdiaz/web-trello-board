import React from 'react'
import del from '../../../assets/img/del.png';
import gal from '../../../assets/img/gal.png';
export const ProfilesCards = (props) => {
    const {profiles,action}=props;
  return (
    <div className='profilesCard'>
        <img src={action==='gal' ? gal : del}/>
        {profiles.map((profile,index)=>(
            <img key={index} src={`https://randomuser.me/api/portraits/med/men/${profile}.jpg`}/>
        ))}
    </div>
  )
}
