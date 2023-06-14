import React from 'react'

export const BodyCard = (props) => {
  const {photo,name}=props;
  return (
    <div className='bodyCard paddingCard'>
      <div className='photocard'>
        <img src={photo} alt={name}/>
      </div>
      <h2 className='nameCard'>
        {name}
      </h2>
      <p className='descriptionBodyCard'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.
      </p>
    </div>
  )
}
