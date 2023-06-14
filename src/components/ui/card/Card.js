import React from 'react'

export const Card = (props) => {
  const {photo,name,job}=props;
  return (
    <div className='card'>
        <h1>{name}</h1>
        <h3>{job}</h3>
        <img src={photo} alt={name} />
    </div>
  )
}
