import React from 'react'

export const CardPreview = ({isDrawing}) => {
  if(!isDrawing) 
  return null;
  
  return (
    <div className='cardPreview'></div>
  )

}
