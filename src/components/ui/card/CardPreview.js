import React from 'react'

export const CardPreview = ({isDragging}) => {
  if(!isDragging) 
  return null;
  
  return (
    <div className='cardPreview'></div>
  )

}
